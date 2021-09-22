const request = require('request')
const geocode = (address, callback)=>{
  const url = `http://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGFveGlhbmczdzIxIiwiYSI6ImNrcWlqeGk5ZzA3N2YycHFzMnFxM2xxa3gifQ.B0xZ7cnc2f5QPVztR8HG_Q`
  request({url, json:true},(error, {body})=>{
    if (error){
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0){
      callback('Unable to find location. Try another search', undefined)
    } else {
      callback({
        latitude: body.features[0].center[0], 
        longtitude: body.features[0].center[1], 
        location: body.features[0].place_name, 
      })
    }
  })
}

module.exports = geocode