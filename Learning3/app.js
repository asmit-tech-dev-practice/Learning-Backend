const forecast = require('./src/utils/forecast');

forecast(40, -75, (error, data) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Data:', data);
});
