const fs = require('fs');
const { findAndCleanText, countWords } = require('./wordCounter');

function countWordFrequency(text) {
  const clean = text.toLowerCase().replace(/\s+/g, ' ').trim();
  const words = clean.match(/\b\w+\b/g);
  const freq = {};

  if (words) {
    for (const word of words) {
      freq[word] = (freq[word] || 0) + 1;
    }
  }

  return freq;
}

function saveToFile(wordCount, frequencies, filename) {
  let output = `Total word count: ${wordCount}\n\nWord Frequencies:\n`;

  const sorted = Object.entries(frequencies).sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sorted) {
    output += `${word}: ${count}\n`;
  }

  fs.writeFileSync(filename, output, 'utf8');
  console.log(`Word count and frequency saved to ${filename}`);
}

async function run() {
  const url = 'https://www.wikipedia.org'; 

  try {
    const text = await findAndCleanText(url);
    const wordCount = countWords(text);
    const frequencies = countWordFrequency(text);

    saveToFile(wordCount, frequencies, 'word-count.txt');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

run();
