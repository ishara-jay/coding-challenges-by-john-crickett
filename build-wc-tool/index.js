#!/usr/bin/env node

import fs from 'fs';
import { byteCounter } from './byte-counter.js';
import { lineCounter } from './line-counter.js';
import { wordCounter } from './word-counter.js';
import { characterCounter } from './character-counter.js';
import { defaultOption } from './default-option.js';
const args = process.argv.slice(2);


if (fs.existsSync(args[1])) {
  try {
    switch (args[0]) {
      case '-c':
        console.log(`${byteCounter(args[1])} ${args[1]}`);
        break;
      case '-l':
        console.log(`${lineCounter(args[1])} ${args[1]}`);
        break;
      case '-w':
        console.log(`${wordCounter(args[1])} ${args[1]}`);
        break;
      case '-m':
        console.log(`${characterCounter(args[1])} ${args[1]}`);
        break;
      default:
        console.log('Invalid option');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

else if (fs.existsSync(args[0])) {
  try {
    const { bytes, lines, words } = defaultOption(args[0]);
    console.log(`${bytes} ${lines} ${words} ${args[0]}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
else {
  console.log('File not found');
}




