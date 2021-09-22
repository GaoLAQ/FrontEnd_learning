//Async function always come after sync function in node enviroment
// console.log('Starting')
// setTimeout(()=> {
//   console.log('2 Second Timer')
// },2000)
// setTimeout(
//   ()=> console.log("0 Second Timer")
// )
// console.log('Stopping')
const geocode = require("./utlis/geocode");
const forecast = require("./utlis/forecast");
// **************************************************************//

// We use npm request

// const http = require('http');
// const PORT = process.env.PORT || 3001;
// const URL = 'http://api.weatherstack.com/current?access_key=4adc4535866a9ef0041ebc618c407ba2&query=37.8267,-122.4233'
// const server = http.createServer((req, res)=>{
//   const method = req.method;

// })
// server.listen(PORT, console.log(`Server is logging on: http://localhost:${PORT}`))

// const request = require('request');
// const url = 'http://api.weatherstack.com/current?access_key=4adc4535866a9ef0041ebc618c407ba2&query=37.8267,-122.4233';

// request({url: url, json: true},(error,response)=>{
//   if (error){
//     console.log("server is down")
//   } else if (response.body.error){
//     console.log("not able to find locations")
//   } else {
//     const reportDescription = response.body.current.weather_descriptions[0];
//     const reportTemperature = response.body.current.temperature
//     const reportFeelsLike = response.body.current.feelslike
//     console.log(`Description: ${reportDescription}. It is currently ${reportTemperature} degrees out. It feels like ${reportFeelsLike} out`)
//   }
// })

// Practise 2 Geocoding
// Address -> Lat / Long  -> Weather

//*****************************************************/

const command = process.argv;
const inputLocation = command[2];
if (!inputLocation) {
  console.log("Please provide an address");
} else {
  // {latitude, longtitude, location}={} default value is {} 
  geocode(inputLocation, (error, {latitude, longtitude, location}={}) => {
    if (error) {
      return error;
    }
    forecast(latitude, longtitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
