const localDb = require('./localDb');

// ── Query chain (supports .sort() and .limit()) ──────────────────────────────
class Query {
    constructor(data) {
        this.data = Array.isArray(data) ? [...data] : [];
        this._sorted = false;
    }
    sort(opts) {
        if (!opts) return this;
        this.data.sort((a, b) => {
            for (const key of Object.keys(opts)) {
                const order = opts[key];
                const av = a[key] ?? '';
                const bv = b[key] ?? '';
                if (av > bv) return order;
                if (av < bv) return -order;
            }
            return 0;
        });
        return this;
    }
    limit(n) {
        this.data = this.data.slice(0, n);
        return this;
    }
    then(res, rej) {
        return Promise.resolve(this.data).then(res, rej);
    }
}

// ── Single-result Query (supports .sort() and .limit()) ──────────────────────
class SingleQuery {
    constructor(data) {
        this.data = Array.isArray(data) ? [...data] : [];
    }
    sort(opts) {
        if (!opts) return this;
        this.data.sort((a, b) => {
            for (const key of Object.keys(opts)) {
                const order = opts[key];
                const av = a[key] ?? '';
                const bv = b[key] ?? '';
                if (av > bv) return order;
                if (av < bv) return -order;
            }
            return 0;
        });
        return this;
    }
    then(res, rej) {
        return Promise.resolve(this.data[0] || null).then(res, rej);
    }
}

// ── FakeModel instance (has .save()) ──────────────────────────────────────────
class FakeModel {
    constructor(data, db) {
        Object.assign(this, data);
        Object.defineProperty(this, '_db', { value: db, enumerable: false });
    }
    save() {
        // Strip non-enumerable hidden keys, save plain data
        const plain = { ...this };
        const result = this._db.create(plain);
        return Promise.resolve(result);
    }
}

// ── Match a single document against a query object ────────────────────────────
function matchesQuery(item, query) {
    if (!query || Object.keys(query).length === 0) return true;
    return Object.keys(query).every(key => {
        const val = query[key];
        if (key === '$or') {
            return val.some(condition => matchesQuery(item, condition));
        }
        if (key === '$and') {
            return val.every(condition => matchesQuery(item, condition));
        }
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            // Handle operators like { $regex: ... }
            if (val.$regex) {
                const re = new RegExp(val.$regex, val.$options || 'i');
                return re.test(item[key]);
            }
            if (val.$in) return val.$in.includes(item[key]);
            if (val.$ne !== undefined) return item[key] !== val.$ne;
            if (val.$gt !== undefined) return item[key] > val.$gt;
            if (val.$gte !== undefined) return item[key] >= val.$gte;
            if (val.$lt !== undefined) return item[key] < val.$lt;
            if (val.$lte !== undefined) return item[key] <= val.$lte;
        }
        return item[key] === val;
    });
}

// ── Schema stub (all hooks are no-ops) ────────────────────────────────────────
class Schema {
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }
    pre() { return this; }
    post() { return this; }
    index() { return this; }
    virtual() { return { get: () => this, set: () => this }; }
    static() { return this; }
    method() { return this; }
    set() { return this; }
    get() { return this; }
    plugin() { return this; }
    add() { return this; }
    path() { return { validate: () => this }; }
}

// ── model factory ─────────────────────────────────────────────────────────────
const model = (name, schema) => {
    const db = localDb.createModel(name);

    const ModelClass = class extends FakeModel {
        constructor(data) {
            super(data, db);
        }
    };

    // find(query?) → Query (thenable with sort/limit)
    ModelClass.find = (query) => {
        let data = db.find();
        if (query && Object.keys(query).length > 0) {
            data = data.filter(item => matchesQuery(item, query));
        }
        return new Query(data);
    };

    // findById(id) → Promise<doc|null>
    ModelClass.findById = (id) => {
        return Promise.resolve(db.findById(id) || null);
    };

    // findOne(query?) → SingleQuery (thenable with sort)
    ModelClass.findOne = (query) => {
        let data = db.find();
        if (query && Object.keys(query).length > 0) {
            data = data.filter(item => matchesQuery(item, query));
        }
        return new SingleQuery(data);
    };

    // findByIdAndUpdate(id, data, opts) → Promise<doc|null>
    ModelClass.findByIdAndUpdate = (id, data, opts) => {
        return Promise.resolve(db.updateById(id, data) || null);
    };

    // findByIdAndDelete(id) → Promise<doc|null>
    ModelClass.findByIdAndDelete = (id) => {
        return Promise.resolve(db.deleteById(id) || null);
    };

    // findOneAndUpdate(query, data, opts) → Promise<doc|null>
    ModelClass.findOneAndUpdate = (query, data, opts) => {
        const items = db.find();
        const item = items.find(i => matchesQuery(i, query));
        if (item) {
            const updated = db.updateById(item._id, data);
            return Promise.resolve(updated);
        }
        // upsert support
        if (opts && opts.upsert) {
            const newItem = db.create({ ...query, ...data });
            return Promise.resolve(newItem);
        }
        return Promise.resolve(null);
    };

    // findOneAndDelete(query) → Promise<doc|null>
    ModelClass.findOneAndDelete = (query) => {
        const items = db.find();
        const item = items.find(i => matchesQuery(i, query));
        if (item) {
            return Promise.resolve(db.deleteById(item._id) || null);
        }
        return Promise.resolve(null);
    };

    // countDocuments(query?) → Promise<number>
    ModelClass.countDocuments = (query) => {
        let data = db.find();
        if (query && Object.keys(query).length > 0) {
            data = data.filter(item => matchesQuery(item, query));
        }
        return Promise.resolve(data.length);
    };

    // updateMany(query, update) → Promise<{modifiedCount}>
    ModelClass.updateMany = (query, update) => {
        const items = db.find();
        let modifiedCount = 0;
        const setData = update.$set || update;
        items.forEach(item => {
            if (matchesQuery(item, query)) {
                db.updateById(item._id, setData);
                modifiedCount++;
            }
        });
        return Promise.resolve({ modifiedCount });
    };

    // deleteMany(query) → Promise<{deletedCount}>
    ModelClass.deleteMany = (query) => {
        const items = db.find();
        let deletedCount = 0;
        items.forEach(item => {
            if (matchesQuery(item, query)) {
                db.deleteById(item._id);
                deletedCount++;
            }
        });
        return Promise.resolve({ deletedCount });
    };

    // create(data) → Promise<doc>  (static helper)
    ModelClass.create = (data) => {
        const result = db.create(data);
        return Promise.resolve(result);
    };

    return ModelClass;
};

module.exports = {
    Schema,
    model
};
