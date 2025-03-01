import fs from 'fs';

export function byteCounter(filePath) {
    const file = fs.readFileSync(filePath);
    return file.length;
}
