var React = require('React')

module.exports = React.createClass({
  displayName: 'Footer',
  getFooterStyle: function () {
    return {
      color: 'rgba(210, 204, 161, 1)',
      textAlign: 'right',
      marginTop: '1em'
    }
  },
  render: function () {
    return (
      <div style={this.getFooterStyle()}>An app for new songwriters by Doa</div>
    )
  }
})
