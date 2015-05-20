var React = require('React')
var _ = require('lodash')

module.exports = React.createClass({
  displayName: 'Result',
  propTypes: {
    chords: React.PropTypes.array,
    suffix: React.PropTypes.string
  },
  render: function () {
    var scaleDisplay = _.map(this.props.chords, function (chord) {
      return chord.name
    }, this)
    var suffixDisplay = _.map(this.props.chords, function (chord) {
      return chord.suffix
    }, this)
    var chordContainer = {
      display: 'inline-block',
      position: 'relative',
      margin: '0 0 1em 1em'
    }
    var littleChords = {
      boxShadow: '0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)',
      padding: '1em 0.75em'
    }
    var chordDisplay = _.map(['C', 'D', 'E', 'F', 'G', 'A', 'B'], function (n) {
      var coverStyle = {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition: 'opacity .2s ease-in-out',
        color: '#c0392b',
        fontSize: '0.5em',
        padding: '0.5em'
      }
      return (
          <li className='Result-chordContainer' key={n} style={chordContainer}>
            <div style={littleChords}>{n}{suffixDisplay}</div>
            <div className='Result-chordCover' style={coverStyle}>{n}{suffixDisplay}</div>
          </li>
        )
    }, this)

    return (
      <span>Try the <span className='accent'>{scaleDisplay}</span> scale.<ul>{chordDisplay}</ul></span>
    )
  }
})
