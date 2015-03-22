var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/note-me'
var db
var collection

module.exports = {
  connect: function (done) {
    MongoClient.connect(url, function (err, database) {
      db = database
      collection = db.collection('chords')
      done()
    })
  },
  getMatchedChords: function (done) {
    collection.find({ tags: { $all: ['sad'] } }).toArray(function(err, docs) {
      console.dir(docs)
    })
  },
  getAllChords: function (done) {
    collection.find({}).toArray(function(err, docs) {
      done(docs)
    })
  },
  addAllChords: function () {
    collection.insert([
      { name : 'Major', tags: ['happy', 'cheerful'], suffix: '' }, 
      { name : 'Minor', tags: ['sad', 'dark'], suffix: 'm' }, 
      { name : 'Seventh', tags: ['funky', 'soulful'], suffix: '7' },
      { name : 'Major Seventh', tags: ['peaceful', 'soft', 'love'], suffix: 'M7' }, 
      { name : 'Minor Seventh', tags: ['moody', 'mellow', 'jazzy'], suffix: 'm7' }, 
      { name : 'Ninth', tags: ['optimistic'], suffix: '9' },
      { name : 'Diminished', tags: ['scary', 'shocking'], suffix: 'º' }, 
      { name : 'Suspended Fourth', tags: ['suspenseful'], suffix: 'sus4' }, 
      { name : 'Minor Ninth', tags: ['creepy', 'ominous'], suffix: '♭9' },
      { name : 'Added Ninth', tags: ['serious'], suffix: 'add9' }
    ], function(err, result) {
      console.log("did")
    })
  },
  removeAllChords: function () {
    collection.remove({}, function() {
      console.log("removed")
    })
  }
}
