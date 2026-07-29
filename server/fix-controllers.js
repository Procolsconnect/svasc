/**
 * fix-controllers.js
 * Removes mandatory `req.file` checks from all create/update controller functions
 * so that records can be saved without requiring a media upload every time.
 */
const fs = require('fs');
const path = require('path');

const controllersDir = path.join(__dirname, 'controllers');

// Patterns to remove — these are the lines that block saving when no file uploaded
const BLOCK_PATTERNS = [
    // single file required blocks
    {
        find: /if \(!req\.file\) \{\r?\n\s+return res\.status\(400\)\.json\(\{[^}]*\}\);\r?\n\s+\}\r?\n?/gs,
        replace: ''
    },
    // Same but on one line  
    {
        find: /if \(!req\.file\) return res\.status\(400\)\.json\(\{[^}]*\}\);\r?\n?/g,
        replace: ''
    },
    // req.files.bannerImage required blocks
    {
        find: /\/\/ Validate banner image\r?\n\s+if \(!req\.files \|\| !req\.files\.bannerImage \|\| req\.files\.bannerImage\.length === 0\) \{\r?\n\s+return res\.status\(400\)\.json\(\{[^}]*\}\);\r?\n\s+\}\r?\n?/gs,
        replace: ''
    },
    // req.files.cardImages required blocks
    {
        find: /\/\/ Validate card images and titles\r?\n\s+if \(!req\.files\.cardImages \|\| req\.files\.cardImages\.length === 0\) \{\r?\n\s+return res\.status\(400\)\.json\(\{[^}]*\}\);\r?\n\s+\}\r?\n?/gs,
        replace: ''
    },
    // Rising star specific: if (!req.file) return 400
    {
        find: /if \(!req\.file\) \{\r?\n\s+return res\.status\(400\)\.json\(\{ message: '[^']*' \}\);\r?\n\s+\}\r?\n?/gs,
        replace: ''
    }
];

// Lines to make image optional in create (replace req.file.filename with optional chaining)
const OPTIONAL_PATTERNS = [
    // Make banner image optional
    {
        find: /const bannerImagePath = `\/uploads\/\$\{req\.files\.bannerImage\[0\]\.filename\}`;\r?\n/g,
        replace: `const bannerImagePath = req.files && req.files.bannerImage && req.files.bannerImage[0] ? \`/uploads/\${req.files.bannerImage[0].filename}\` : null;\n`
    },
    // Make single req.file path optional in create
    {
        find: /const imagePath = `\/uploads\/\$\{req\.file\.filename\}`;\r?\n/g,
        replace: `const imagePath = req.file ? \`/uploads/\${req.file.filename}\` : null;\n`
    },
    {
        find: /const videoPath = `\/uploads\/\$\{req\.file\.filename\}`;\r?\n/g,
        replace: `const videoPath = req.file ? \`/uploads/\${req.file.filename}\` : null;\n`
    },
    {
        find: /const image = `\/uploads\/\$\{req\.file\.filename\}`;\r?\n/g,
        replace: `const image = req.file ? \`/uploads/\${req.file.filename}\` : null;\n`
    },
    {
        find: /const backgroundImage = `\/uploads\/\$\{req\.file\.filename\}`;\r?\n/g,
        replace: `const backgroundImage = req.file ? \`/uploads/\${req.file.filename}\` : null;\n`
    },
    {
        find: /const src = `\/uploads\/\$\{req\.file\.filename\}`;\r?\n/g,
        replace: `const src = req.file ? \`/uploads/\${req.file.filename}\` : null;\n`
    },
    // Also make cards optional when no cardImages provided
    {
        find: /const cards = req\.files\.cardImages\.map/g,
        replace: `const cards = (req.files && req.files.cardImages) ? req.files.cardImages.map`
    }
];

function processDir(dir) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            for (const { find, replace } of BLOCK_PATTERNS) {
                content = content.replace(find, replace);
            }
            for (const { find, replace } of OPTIONAL_PATTERNS) {
                content = content.replace(find, replace);
            }

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log(`✅ Fixed: ${fullPath.replace(controllersDir, '')}`);
            }
        }
    }
}

processDir(controllersDir);

// Also fix home-hero-slide.controller.js at root level
const heroController = path.join(__dirname, 'controllers', 'home-hero-slide.controller.js');
let heroContent = fs.readFileSync(heroController, 'utf8');
const heroOriginal = heroContent;
for (const { find, replace } of BLOCK_PATTERNS) {
    heroContent = heroContent.replace(find, replace);
}
for (const { find, replace } of OPTIONAL_PATTERNS) {
    heroContent = heroContent.replace(find, replace);
}
if (heroContent !== heroOriginal) {
    fs.writeFileSync(heroController, heroContent);
    console.log('✅ Fixed: home-hero-slide.controller.js');
}

// Also fix value-slide controller (field1-5 all required)
const valueController = path.join(__dirname, 'controllers', 'home', 'value-slide.controller.js');
let valueContent = fs.readFileSync(valueController, 'utf8');
// Remove the "if (!field1 || ... || !field5)" required check
valueContent = valueContent.replace(
    /if \(!field1 \|\| !field2 \|\| !field3 \|\| !field4 \|\| !field5\) \{\r?\n\s+return res\.status\(400\)\.json\(\{[\s\S]*?\}\);\r?\n\s+\}\r?\n?/g,
    ''
);
fs.writeFileSync(valueController, valueContent);
console.log('✅ Fixed: value-slide required fields check removed');

console.log('\n🎉 All controllers patched! Image uploads are now optional on all pages.');
