const yargs = require('yargs');
const axios = require('axios');

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
  .then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
      throw new Error('Unable to find that address.');
    }
    //console.log(JSON.stringify(response.data, undefined,2));
    console.log(response.data.results[0].formatted_address);
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherUrl = `https://api.darksky.net/forecast/48865be6755a85dcac5b5300db92d572/${lat},${lng}`;
    
    return axios.get(weatherUrl);
  })
  .then((response) => {
    // console.log(response);
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}°F. Feels like ${apparentTemperature}°F.`);
  })
  .catch((e) => {
    if(e.code === 'ENOTFOUND'){
      console.log('Unable to connect to API servers');
    } else {
      console.log(e.message);
    }
  });
