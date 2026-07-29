const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'models');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Calculate relative path to fake-mongoose.js from the current file
            let relativePath = path.relative(path.dirname(fullPath), path.join(__dirname, 'fake-mongoose.js'));
            // Normalize path for require (replace \ with /)
            relativePath = relativePath.replace(/\\/g, '/');
            if (!relativePath.startsWith('.')) {
                relativePath = './' + relativePath;
            }

            // Replace exact matches
            if (content.includes("require('mongoose')")) {
                content = content.replace(/require\('mongoose'\)/g, `require('${relativePath}')`);
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            } else if (content.includes('require("mongoose")')) {
                content = content.replace(/require\("mongoose"\)/g, `require("${relativePath}")`);
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir(modelsDir);
console.log('Refactoring complete.');
