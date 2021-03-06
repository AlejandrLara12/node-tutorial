const request = require('request');

let geocodeAddress = (address, callback) => { 
    let encodedAddress = encodeURIComponent(address);
    //console.log(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        console.log(`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`);
        if(error) {
            callback('Unable to connect to Google servers');
        } else if( body.status == 'ZERO_RESULTS'){
            callback('Unable to find that address.');
        } else if( body.status == 'OK') {
            //console.log('body: ', JSON.stringify(body, undefined, 2));
            // console.log(`Address: ${body.results[0].formatted_address}`);
            // console.log(`latitude: ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

let test = () => { console.log('Test function'); };
module.exports = {
    test,
    geocodeAddress
};

// module.exports = {
//     test: test,
//     geocodeAddress: geocodeAddress
// };