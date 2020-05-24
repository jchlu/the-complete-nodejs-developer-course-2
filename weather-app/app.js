require('dotenv').config()
const request = require('postman-request')
const { failFlash, log, standOut } = require('./utils')
const {
  WEATHERSTACK_API_ENDPOINT,
  WEATHERSTACK_ACCESS_KEY,
  MAPBOX_PUBLIC_TOKEN,
  MAPBOX_API_ENDPOINT
} = process.env

const weatherOptions = {
  uri: WEATHERSTACK_API_ENDPOINT,
  qs: {
    access_key: WEATHERSTACK_ACCESS_KEY,
    query: 'Las Terrenas'
  },
  json: true
}

const mapOptions = {
  baseUrl: MAPBOX_API_ENDPOINT,
  uri: 'Las Terrenas.json',
  qs: {
    access_token: MAPBOX_PUBLIC_TOKEN,
    limit: 1
  },
  json: true
}

request(weatherOptions, (error, response, body) => {
  if (error) {
    log(failFlash + `It looks like there was a problem. The message reported was: ${standOut(error.message)}`)
  } else {
    log(`It's currently ${standOut(body.current.weather_descriptions[0])} and ${standOut(body.current.temperature)} degrees out, but feels like ${standOut(body.current.feelslike)}.`)
  }
})

request(mapOptions, (error, response, body) => {
  if (error) {
    log(failFlash + `It looks like there was a problem. The message reported was: ${standOut(error.message)}`)
  } else if (!body.features) {
    log(failFlash + 'Looks like there were no results returned for that query')
  } else {
    log(body.features[0].place_name)
    log(`long: ${standOut(body.features[0].center[0])}, lat: ${standOut(body.features[0].center[1])}`)
  }
})
