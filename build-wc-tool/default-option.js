import fs from 'fs';

export function defaultOption(filePath) {
    const file = fs.readFileSync(filePath, 'utf8');
    const bytes = file.length;
    const lines = file.split('\n').length;
    const words = file.split(/\s+/).length;

    return { bytes, lines, words };
}
