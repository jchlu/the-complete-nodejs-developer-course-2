require('dotenv').config()
const request = require('postman-request')
const {
  MAPBOX_PUBLIC_TOKEN,
  MAPBOX_API_ENDPOINT
} = process.env

const mapOptions = (address) => ({
  baseUrl: MAPBOX_API_ENDPOINT,
  uri: `${encodeURIComponent(address)}.json`,
  qs: {
    access_token: MAPBOX_PUBLIC_TOKEN,
    limit: 1
  },
  json: true
})

const geocode = (address, callback) => {
  if (!address) { return { error: 'No address provided' } }
  request(mapOptions(address), (error, response, body) => {
    if (error) {
      callback(error, undefined)
    } else if (!body.features.length) {
      const msg = 'Looks like there were no results returned for that query'
      callback(msg, undefined)
    } else {
      callback(undefined, {
        placeName: body.features[0].place_name,
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1]
      })
    }
  })
}

module.exports = {
  geocode
}
