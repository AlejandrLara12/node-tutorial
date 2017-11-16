const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true // always parse it as a stirng
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
//console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    //console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      console.log('weatherResults', weatherResults);
      console.log((errorMessage) ? errorMessage : `It's ${weatherResults.temperature} °F apparent temperature is ${weatherResults.apparentTemperature}`);
    });
  }
});

// weather.getWeather(25.4693826,-100.9862197, (errorMessage, results) => {
//   if(errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });