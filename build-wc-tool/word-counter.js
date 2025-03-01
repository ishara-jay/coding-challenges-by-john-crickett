import fs from 'fs';

export function wordCounter(filePath) {
    const file = fs.readFileSync(filePath, 'utf8');
    return file.split(/\s+/).length;
}