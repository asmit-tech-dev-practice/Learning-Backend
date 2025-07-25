const https = require('https')

const url = 'https://api.open-meteo.com/v1/forecast?latitude=40&longitude=-75&current_weather=true'

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data += chunk
  })

  response.on('end', () => {
    try {
      const weather = JSON.parse(data)
      console.log('Current Weather Info:')
      console.log(`Temperature: ${weather.current_weather.temperature}°C`)
      console.log(`Wind Speed: ${weather.current_weather.windspeed} km/h`)
    } catch (error) {
      console.log('Error parsing JSON:', error)
    }
  })
})

request.on('error', (error) => {
  console.log('An error occurred:', error)
})

request.end()
