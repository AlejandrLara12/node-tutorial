const request = require('request');


// request({
//     url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//     json: true
// }, (error, response, body) => {
//     if(error) {
//         callback('Unable to connect to Google servers');
//     } else if( body.status === 'ZERO_RESULTS'){
//         callback('Unable to find that address.');
//     } else if( body.status === 'OK') {
//         //console.log('body: ', JSON.stringify(body, undefined, 2));
//         // console.log(`Address: ${body.results[0].formatted_address}`);
//         // console.log(`latitude: ${body.results[0].geometry.location.lat}`);
//         // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//         callback(undefined, {
//             address: body.results[0].formatted_address,
//             latitude: body.results[0].geometry.location.lat,
//             longitude: body.results[0].geometry.location.lng
//         });
//     }
// });

request({
    url: `https://api.darksky.net/forecast/48865be6755a85dcac5b5300db92d572/25.4693826,-100.9862197`,
    json: true
}, (error, response, body) => {
    if(error) {
        console.log('Unable to connect to darksky.net servers.');
    } else if (response.statusCode === 200 ) {
        console.log(JSON.stringify(body.currently.temperature, undefined, 2));
        // console.log(response);
        // console.log(JSON.stringify(response, undefined, 2));
    } else {
        console.log('Unable to fetch weather.');
    }
});