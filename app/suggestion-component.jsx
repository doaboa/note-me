var React = require('React')
var tags = Object.keys(require('./tags'))

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
    var tagDisplay = tags
      .filter(function(tag){
        if (!this.props.search) return true
        return tag.indexOf(this.props.search) > -1
      }, this)
      .map(function(tag){
        return <span key={tag} style={this.getTagStyle()} >{tag}</span>
      }, this)
    return (
      <div className='accent'>{tagDisplay}</div>
    )
  }
})