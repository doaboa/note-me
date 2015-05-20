var React = require('React')
var SearchComponent = require('./search-component.jsx')

var redTop = {
  backgroundColor: '#c0392b',
  width: '100%',
  height: '10px',
  position: 'absolute',
  top: 0,
  left: 0,
  color: '#D2CCA1'
}

module.exports = React.createClass({
  displayName: 'Main',
  propTypes: {
    chords: React.PropTypes.array
  },
  render: function () {
    var chords = this.props.chords
    return (
      <div>
        <div style={redTop} />
        <section>
          <SearchComponent chords={chords} />
        </section>
      </div>
    )
  }
})
