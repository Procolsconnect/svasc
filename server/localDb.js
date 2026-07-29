// Local JSON file-based database — replaces MongoDB for local development
// Works exactly like mongoose models: find(), findById(), save(), etc.
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('crypto');

const DB_DIR = path.join(__dirname, 'db');
if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function readCollection(name) {
  const file = path.join(DB_DIR, `${name}.json`);
  if (!fs.existsSync(file)) return [];
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return []; }
}

function writeCollection(name, data) {
  const file = path.join(DB_DIR, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function createModel(collectionName) {
  return {
    find: () => readCollection(collectionName),
    findById: (id) => readCollection(collectionName).find(d => d._id === id) || null,
    findByField: (field, value) => readCollection(collectionName).find(d => d[field] === value) || null,
    create: (data) => {
      const items = readCollection(collectionName);
      const newItem = { ...data, _id: generateId(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
      items.push(newItem);
      writeCollection(collectionName, items);
      return newItem;
    },
    updateById: (id, updateData) => {
      const items = readCollection(collectionName);
      const idx = items.findIndex(d => d._id === id);
      if (idx === -1) return null;
      items[idx] = { ...items[idx], ...updateData, updatedAt: new Date().toISOString() };
      writeCollection(collectionName, items);
      return items[idx];
    },
    upsertByField: (field, value, updateData) => {
      const items = readCollection(collectionName);
      const idx = items.findIndex(d => d[field] === value);
      if (idx === -1) {
        const newItem = { ...updateData, [field]: value, _id: generateId(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
        items.push(newItem);
        writeCollection(collectionName, items);
        return newItem;
      }
      items[idx] = { ...items[idx], ...updateData, updatedAt: new Date().toISOString() };
      writeCollection(collectionName, items);
      return items[idx];
    },
    deleteById: (id) => {
      const items = readCollection(collectionName);
      const idx = items.findIndex(d => d._id === id);
      if (idx === -1) return null;
      const deleted = items.splice(idx, 1)[0];
      writeCollection(collectionName, items);
      return deleted;
    },
    count: () => readCollection(collectionName).length,
  };
}

module.exports = { createModel };
