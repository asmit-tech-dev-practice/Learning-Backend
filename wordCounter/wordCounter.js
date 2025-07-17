const axios = require('axios');

function rmHTMLtags(html) {
  html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');
  return html.replace(/<\/?[^>]+>/gi, '');
}

function countWords(text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean === '') return 0;
  return clean.split(' ').length;
}

async function findAndCleanText(url) {
  const response = await axios.get(url);
  const html = response.data;
  const text = rmHTMLtags(html);
  return text;
}

module.exports = {
  findAndCleanText,
  countWords,
};
