require('dotenv').config()
const { standOut, log } = require('./utils/utils')
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

const placeName = 'Bristol, England'
geocode(placeName, displayGeocode)
weather(placeName, displayWeather)
