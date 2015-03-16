var React = require('React')
var SearchComponent = require('./search-component.jsx')
var ResultComponent = require('./result-component.jsx')

var redTop = {
  backgroundColor: '#c0392b',
  width: '100%',
  height: '10px',
  position: 'absolute',
  top: 0,
  left: 0
};

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div style={redTop} />
        <section>
          <SearchComponent />
        </section>
      </div>
    )
  }
})