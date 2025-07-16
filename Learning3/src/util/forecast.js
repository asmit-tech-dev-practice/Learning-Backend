const https = require('https');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/YOUR_API_KEY/${latitude},${longitude}`;

  https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      try {
        const body = JSON.parse(data);
        callback(undefined, body);
      } catch (error) {
        callback('Unable to parse response', undefined);
      }
    });
  }).on('error', (error) => {
    callback('Unable to connect to service', undefined);
  });
};

module.exports = forecast;
