// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')

// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, 'public/views')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

// your code here...

// listening port
app.listen(3000, function (e) {
  if (e) throw e
})
