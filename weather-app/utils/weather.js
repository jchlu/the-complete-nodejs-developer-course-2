const request = require('postman-request')
const { failFlash, standOut, DEFAULT_ADDRESS } = require('./utils')
const {
  WEATHERSTACK_API_ENDPOINT,
  WEATHERSTACK_ACCESS_KEY
} = process.env

const weatherOptions = address => ({
  uri: WEATHERSTACK_API_ENDPOINT,
  qs: {
    access_key: WEATHERSTACK_ACCESS_KEY,
    query: encodeURIComponent(address)
  },
  json: true
})

const weather = (address, callback) => {
  request(weatherOptions(DEFAULT_ADDRESS), (error, response, body) => {
    if (error) {
      const msg = `${failFlash}It looks like there was a problem. The message reported was: ${standOut(error.message)}`
      callback(msg, undefined)
    } else if (!body.current.weather_descriptions) {
      const msg = `${failFlash}Looks like there were no results returned for that query`
      callback(msg, undefined)
    } else {
      callback(undefined, {
        description: body.current.weather_descriptions[0],
        temperature: body.current.temperature,
        feelslike: body.current.feelslike
      })
    }
  })
}

module.exports = {
  weather
}
