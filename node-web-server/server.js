const express = require('express');

let app = express();

//middlewear
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => { // request, response
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Ricardo',
    likes: [12, 'hockey']
  });
});

app.get('/about', (req, res) => { // request, response
  res.send('<h2>About Page</h2>');
});

app.get('/bad', (req, res) => { // request, response
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000);
