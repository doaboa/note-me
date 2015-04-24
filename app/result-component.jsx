var React = require('React')
var _ = require('lodash')

module.exports = React.createClass({
  render: function() {
    var scaleDisplay = _.map(this.props.chords, function (chord) {
      return chord.name
    }, this)
    var suffixDisplay = _.map(this.props.chords, function (chord) {
      return chord.suffix
    }, this)
    var chordDisplay = _.map(['C', 'D', 'E', 'F', 'G', 'A', 'B'], function(n) {
      return <span key={n}> {n}{suffixDisplay}</span>
    })
    return (
      <span>Try the <span className='result accent'>{scaleDisplay}</span> scale.<p>{chordDisplay}</p></span>
    )
  }
})
