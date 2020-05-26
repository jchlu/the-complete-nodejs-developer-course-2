const request = require('postman-request')
const {
  WEATHERSTACK_API_ENDPOINT,
  WEATHERSTACK_ACCESS_KEY
} = process.env

const weatherOptions = (latitude, longitude) => ({
  uri: WEATHERSTACK_API_ENDPOINT,
  qs: {
    access_key: WEATHERSTACK_ACCESS_KEY,
    query: `${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`
  },
  json: true
})

const weather = (latitude, longitude, placeName, callback) => {
  request(weatherOptions(latitude, longitude), (error, response, body) => {
    if (error) {
      callback(error, undefined)
    } else if (!body.current.weather_descriptions) {
      const msg = 'Looks like there were no results returned for that query'
      callback(msg, undefined)
    } else {
      callback(undefined, {
        description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        location: `${body.location.name}, ${body.location.region}, ${body.location.country}`,
        placeName
      })
    }
  })
}

module.exports = {
  weather
}
