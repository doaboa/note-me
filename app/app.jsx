var React = require('React')
// name and source component -- sep jsx file for each
var SomeComponent = require('./some-component.jsx')

React.render(
  // component we want to render (or straight html)
  <SomeComponent text="dudes"/>,
  // dom node to mount component to (ie document.getElementById('blah'))
  document.body
)

