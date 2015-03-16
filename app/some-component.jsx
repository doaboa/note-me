// require react
var React = require('React')

// css
var divStyle = {
  color: 'blue',
  backgroundColor: 'yellow'
};

// module.exports to make accessible via require one component per file for cleanliness
module.exports = React.createClass({
  // function to call and change states
  tellClicked: function(){
    this.setState({
      text: 'good job'
    });
  },
  // set initial state/variables to call in component
  getInitialState: function(){
    return {
      text: 'click me'
    }
  },
  render: function() {
    return (
      <div className="commentList">
        <h1 style={divStyle}>Howdy, {this.props.text}.</h1>
        <p onClick={this.tellClicked}>{this.state.text}</p>
      </div>
    )
  }
})