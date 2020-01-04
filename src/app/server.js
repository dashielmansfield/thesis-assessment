// var express = require('express')
// var app = express()  

// // Allow app to parse the body of requests ('req.body')
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json()) 

// // Configure app to use router for paths matching '/api'
// // var router = require('./routes/router')
// app.use(express.static('public'))
// // app.use('/', router)

// // Start listening for requests on the port specified in config
// var config = require('./config/config') // config file
// var port = config.port || process.env.PORT || 4000
// app.listen(config.port)
// console.log('Listening on port ' + config.port)


const express = require('express');
const app = express();

app.use('/', express.static('public'));

const port = process.env.PORT || 80
app.listen(port, () => console.log('Listening on port' + port))
