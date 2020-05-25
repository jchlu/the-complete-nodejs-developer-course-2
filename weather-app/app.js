require('dotenv').config()
const { standOut, log } = require('./utils/utils')
const { geocode } = require('./utils/geocode')
const { weather } = require('./utils/weather')

const display = (error, { longitude, latitude, location } = {}) => {
  if (error) {
    return log(error)
  }
  log(`The current weather for ${location}:`)
  // log(`The current longitude: ${longitude} & latitude: ${latitude}`)
  weather(latitude, longitude, displayWeather)
}

const displayWeather = (error, { description, temperature, feelslike, location } = {}) => {
  if (error) {
    return log(error)
  }
  log(`${standOut(description)} and ${standOut(temperature)} degrees, feels like ${standOut(feelslike)} in ${standOut(location)}.`)
}

const searchTerm = process.argv[2] ? process.argv[2] : undefined
geocode(searchTerm, display)
