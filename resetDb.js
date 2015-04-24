var db = require('./db')

db.connect(function () {
  db.removeAllChords(function() {
    db.addAllChords()
  })
})