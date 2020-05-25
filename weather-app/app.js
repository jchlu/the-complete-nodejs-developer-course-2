require('dotenv').config()
const { standOut, log } = require('./utils/utils')
const { geocode } = require('./utils/geocode')
const { weather } = require('./utils/weather')

const display = (error, { longitude, latitude, location }) => {
  if (error) {
    return log(error)
  }
  log(`The current weather for ${location}:`)
  // log(`The current longitude: ${longitude} & latitude: ${latitude}`)
  weather(latitude, longitude, displayWeather)
}

const displayWeather = (error, data) => {
  if (error) {
    return log(error)
  }
  const { description, temperature, feelslike, location } = data
  log(`${standOut(description)} and ${standOut(temperature)} degrees, feels like ${standOut(feelslike)} in ${standOut(location)}.`)
}

geocode('Whitchurch, Bristol', display)
