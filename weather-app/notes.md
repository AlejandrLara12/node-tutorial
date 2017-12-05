# Callback functions & APIs
required 'request' module

# update npm
`npm i -g npm`

# Pretty Printing Objs
console.log('body: ', JSON.stringify(body, undefined, 2));


# What's Makes up an HTTP Request?
Codes
404: page not found
500: server crashed
200: all good

# Encoding User Input
api: 'http://maps.googleapis.com/maps/api/geocode/json?address=matias%20de%20galvez%20380%20virreyes%20obrera'
encodeURIComponenc('this is cool')
decodeURIComponenc('this%20is%20cool')


# Callback Error


# Wiring up weather Search
Dark Sky API key: 48865be6755a85dcac5b5300db92d572
url: darksky.net
url example: https://api.darksky.net/forecast/48865be6755a85dcac5b5300db92d572/25.4693826,-100.9862197

responce                    has a lot of properties, has properties
                            .statusCode: 200, 404
                            .statusMessage: 'OK'
body                        is just a shortcut, like response.body        



# Chaining callbacks together

# Intro to ES6 promises
when resolved or rejected is like a return

# Advanced Promises
We can have ordered promesis, one depending on another one.
When we stack them, we are able to use multiples 'then' 
'then' has two parameters, then(ifResolved,ifRejected)
but if the first 'then' is rejected, the second 'then' will be resolved,
to avoid that, we have te funciton 'catch' that will be triggered with any 
rejected action of any 'then'