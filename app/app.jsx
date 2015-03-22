var $ = require('jquery')
var React = require('React')
var MainComponent = require('./main-component.jsx')

$.get('/chords').success(function (chords) {
  React.render(
    // component we want to render (or straight html)
    <MainComponent text="dudes" chords={chords}/>,
    document.body
  )
})
