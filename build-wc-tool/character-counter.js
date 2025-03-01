import fs from 'fs';

export function characterCounter(filePath) {
    const file = fs.readFileSync(filePath, 'utf8');
    return file.replace(/\s+/g, '').length;
}