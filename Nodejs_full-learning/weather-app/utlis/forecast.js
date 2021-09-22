const request = require("request");
const forecast = (lattitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4adc4535866a9ef0041ebc618c407ba2&query=${longitude},${lattitude}`;
  console.log(url)
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("server is down", undefined);
    } else if (body.error) {
      callback("not able to find locations", undefined);
    } else {
      const reportDescription = body.current.weather_descriptions[0];
      const reportTemperature = body.current.temperature;
      const reportFeelsLike = body.current.feelslike;
      callback(
        undefined, `Description: ${reportDescription}. It is currently ${reportTemperature} degrees out. It feels like ${reportFeelsLike} out`, undefined
      );
    }
  });
};
module.exports = forecast;
