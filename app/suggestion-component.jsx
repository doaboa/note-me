var React = require('React')
var _ = require('lodash')

module.exports = React.createClass({
  getTagStyle: function(){
    return {
      fontSize: '0.5em',
      color: 'rgba(3, 3, 3, 0.45)',
      marginLeft: '1em',
      marginTop: '2.5em',
      display: 'inline-block',
      opacity: this.props.hidden ? 0 : 1,
      transition: 'opacity 1s'
    }
  },
  render: function() {
    var tagDisplay = _.chain(this.props.chords)
      .map(function (chord) {
        return chord.tags
      })
      .flatten()
      .uniq()
      .filter(function(tag){
        if (!this.props.search) return true
        return tag.indexOf(this.props.search) > -1
      }, this)
      .map(function(tag){
        return <span key={tag} style={this.getTagStyle()} >{tag}</span>
      }, this)
      .value()
    return (
      <div className='accent'>{tagDisplay}</div>
    )
  }
})