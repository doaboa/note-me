var React = require('React')
// name and source component -- sep jsx file for each
var MainComponent = require('./main-component.jsx')

React.render(
  // component we want to render (or straight html)
  <MainComponent text="dudes"/>,
  // dom node to mount component to (ie document.getElementById('blah'))
  document.body
)
