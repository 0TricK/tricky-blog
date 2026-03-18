const http = require('http');
const express = require('express');

//defines where server is hosted
const app = express();
app.listen(3000);

app.get('/', (req, res) => {

    res.send('Hello')

});
