// require react
var React = require('React')
var SuggestionComponent = require('./suggestion-component.jsx')
var tags = require('./tags')

module.exports = React.createClass({
  tellClicked: function(){
    this.setState({
    })
  },
  getInitialState: function(){
    return {
      focus: false
    }
  },
  focus: function(){
    this.setState({
      focus: true
    })
  },
  getStyle: function(){
    return {
      position: 'absolute',
      top: tags[this.state.search] ? '20%' : '50%',
      left: '5%',
      transition: 'top 0.5s',
      fontSize: '3em',
      lineHeight: '1.25em'
    }
  },
  getInputStyle: function(){
    return {
      fontSize: '1em',
      border: '0',
      borderBottom: '#c0392b 5px solid',
      minWidth: '3em',
      width: '10%',
      paddingRight: '0.25em',
      outline: 'none',
      paddingLeft: '5px'
    }
  },
  handleSearchChange: function(e) {
    this.setState({
      search: e.target.value
    })
  },
  render: function() {
    var suggestionComponent
    if (!tags[this.state.search]) {
      suggestionComponent = <SuggestionComponent hidden={!this.state.focus} search={this.state.search} />
    }
    return (
      <form style={this.getStyle()} onFocus={this.focus}>
        I want to write a <br />
        <input style={this.getInputStyle()} 
          type='text' name='feeling' className='accent' 
          onChange={this.handleSearchChange} /> song.
        {suggestionComponent}
      </form>
    )
  }
})