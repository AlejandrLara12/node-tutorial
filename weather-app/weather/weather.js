const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/48865be6755a85dcac5b5300db92d572/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        console.log(`https://api.darksky.net/forecast/48865be6755a85dcac5b5300db92d572/${lat},${lng}`);
        if(error) {
            callback('Unable to connect to darksky.net servers.');
        } else if (response.statusCode === 200 ) {
            callback(undefined, body.currently);
            // console.log(response);
            // console.log(JSON.stringify(response, undefined, 2));
        } else {
            callback('Unable to fetch weather.');
        }
    });
};

module.exports = {
    getWeather
};