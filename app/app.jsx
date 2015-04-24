var $ = require('jquery')
var React = require('React')
var MainComponent = require('./main-component.jsx')

$.get('/chords').success(function (chords) {
  React.render(
    <MainComponent chords={chords}/>,
    document.body
  )
})
