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
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MyBot/1.0)',
      },
    });
    const html = response.data;
    const text = rmHTMLtags(html);
    return text;
  } catch (error) {
    throw new Error(`Failed to fetch content: ${error.message}`);
  }
}

module.exports = {
  findAndCleanText,
  countWords,
};
