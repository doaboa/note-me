var path = require('path')
var express = require('express')
var app = express()
var db = require('./db')

// set root
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/chords', function (req, res) {
  db.getAllChords(function (chords) {
    res.json(chords)
  })
})

db.connect(function () {
  var server = app.listen(process.env.PORT || 3000)
  console.log('Server running at http://localhost:3000')
})