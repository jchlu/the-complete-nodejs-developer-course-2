require('dotenv').config()
const { DEFAULT_ADDRESS, standOut, log } = require('./utils/utils')
const { geocode } = require('./utils/geocode')
const { weather } = require('./utils/weather')

const displayGeocode = (error, data) => {
  if (error) {
    log(error)
  } else {
    log(data)
  }
}

const displayWeather = (error, data) => {
  if (error) {
    log(error)
  } else {
    const { description, temperature, feelslike } = data
    log(`It's currently ${standOut(description)} and ${standOut(temperature)} degrees out, but feels like ${standOut(feelslike)}.`)
  }
}

geocode(DEFAULT_ADDRESS, displayGeocode)
weather(DEFAULT_ADDRESS, displayWeather)
