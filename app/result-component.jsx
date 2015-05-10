var React = require('React')
var _ = require('lodash')

module.exports = React.createClass({
  render: function () {
    var scaleDisplay = _.map(this.props.chords, function (chord) {
      return chord.name
    }, this)
    var suffixDisplay = _.map(this.props.chords, function (chord) {
      return chord.suffix
    }, this)
    var littleChords = {
      boxShadow: '0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)',
      margin: '0 0 1em 1em',
      padding: '1em 0.75em',
      display: 'inline-block'
    }
    var chordDisplay = _.map(['C', 'D', 'E', 'F', 'G', 'A', 'B'], function (n) {
      return <li key={n} style={littleChords}>{n}{suffixDisplay}</li>
    })
    return (
      <span>Try the <span className='accent'>{scaleDisplay}</span> scale.<ul>{chordDisplay}</ul></span>
    )
  }
})
