const fs = require('fs');
const readline = require('readline');
const { findAndCleanText, countWords } = require('./wordCounter');

function countWordFrequency(text) {
  const words = text.toLowerCase().match(/\b\w+\b/g);
  const freq = new Map();

  if (words) {
    for (const word of words) {
      freq.set(word, (freq.get(word) || 0) + 1);
    }
  }

  return freq;
}

function saveToFile(wordCount, frequencies, filename) {
  let output = `Total word count: ${wordCount}\n\nWord Frequencies:\n`;

  for (const [word, count] of frequencies) {
    output += `${word}: ${count}\n`;
  }

  fs.writeFileSync(filename, output, 'utf8');
  console.log(`Word count and frequency saved to ${filename}`);
}

function sortFrequencies(frequencies, sortType, order) {
  const entries = Array.from(frequencies.entries());

  function sortAlphabetically(entries, order) {
    return entries.sort((a, b) => {
      return order === 'asc' ? a[0].localeCompare(b[0]) : b[0].localeCompare(a[0]);
    });
  }

  function sortByFrequency(entries, order) {
    return entries.sort((a, b) => {
      return order === 'asc' ? a[1] - b[1] : b[1] - a[1];
    });
  }

  let sorted;
  if (sortType === 'alphabetical') {
    sorted = sortAlphabetically(entries, order);
  } else if (sortType === 'frequency') {
    sorted = sortByFrequency(entries, order);
  } else {
    sorted = entries;
  }

  return new Map(sorted);
}

function askSortingPreference(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Do you want to sort the words? (frequency / alphabetical): ', function (sortType) {
    rl.question('Sort in ascending or descending order? (asc / desc): ', function (order) {
      rl.close();
      callback(sortType.toLowerCase(), order.toLowerCase());
    });
  });
}

async function run() {
  const url = 'https://www.wikipedia.org';

  try {
    const text = await findAndCleanText(url);
    const wordCount = countWords(text);
    const frequencies = countWordFrequency(text);

    askSortingPreference(function (sortType, order) {
      const sorted = sortFrequencies(frequencies, sortType, order);
      saveToFile(wordCount, sorted, 'word-count.txt');
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

run();
