var React = require('React')
var _ = require('lodash')

module.exports = React.createClass({
  getResultStyle: function(){
    return {
      marginLeft: '1em',
      marginTop: '2.5em',
      display: 'inline-block',
      opacity: this.props.hidden ? 0 : 1,
      transition: 'opacity 1s'
    }
  },
  render: function() {
    var scaleDisplay = _.map(this.props.chords, function (chord) {
      return chord.name
    }, this)
    var suffixDisplay = _.map(this.props.chords, function (chord) {
      return chord.suffix
    }, this)
    // console.log(JSON.stringify(chord.name))
    return (
      <span className='result accent'>{scaleDisplay}</span>
    )
  }
})