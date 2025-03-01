import fs from 'fs';

export function lineCounter(filePath) {
    const file = fs.readFileSync(filePath, 'utf8');
    return file.split('\n').length;
}