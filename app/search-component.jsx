var React = require('React')
var _ = require('lodash')
var SuggestionComponent = require('./suggestion-component.jsx')
var ResultComponent = require('./result-component.jsx')

module.exports = React.createClass({
  getInitialState: function () {
    return {
      focus: false
    }
  },
  focus: function () {
    this.setState({
      focus: true
    })
  },
  getStyle: function (searchMatches) {
    return {
      position: 'absolute',
      top: searchMatches ? '20%' : '50%',
      left: '14.5%',
      marginRight: '14.5%',
      transition: 'top 0.5s',
      fontSize: '3em',
      lineHeight: '1.25em'
    }
  },
  getInputStyle: function () {
    return {
      fontSize: '1em',
      border: '0',
      borderBottom: '#c0392b 5px solid',
      minWidth: '3.5em',
      width: '10%',
      paddingRight: '0.25em',
      outline: 'none',
      paddingLeft: '5px',
      backgroundColor: 'transparent'
    }
  },
  getResultStyle: function () {
    return {
      position: 'absolute',
      top: '50%',
      right: '14.5%',
      fontSize: '3.5em',
      color: 'grey',
      textAlign: 'right'
    }
  },
  getSuggestionStyle: function () {
    return {
      marginTop: '1.15em'
    }
  },
  handleSearchChange: function (e) {
    this.setState({
      search: e.target.value
    })
  },
  setSearch: function (tag) {
    this.setState({
      search: tag
    })
  },
  render: function () {
    var suggestionComponent
    var resultComponent
    var searchMatches = _.some(this.props.chords, function (chord) {
      return _.contains(chord.tags, this.state.search)
    }, this)
    var matchedChords = _.filter(this.props.chords, function (chord) {
      return _.contains(chord.tags, this.state.search)
    }, this)

    if (!searchMatches) {
      suggestionComponent = <SuggestionComponent hidden={!this.state.focus} search={this.state.search} chords={this.props.chords} onTagClick={this.setSearch} />
    }
    if (searchMatches) {
      resultComponent = <ResultComponent hidden={!matchedChords.length} chords={matchedChords} />
    }

    return (
      <div className='searchComponent'>
      <form style={this.getStyle(searchMatches)} onFocus={this.focus}>
        I want to write a <br />
        <input style={this.getInputStyle()}
          type='text' name='feeling' className='accent'
          value={this.state.search}
          onChange={this.handleSearchChange} /> song.
        <div style={this.getSuggestionStyle()}>{suggestionComponent}</div>
      </form>
      <div style={this.getResultStyle()} className='serif'>{resultComponent}</div>
      </div>
    )
  }
})
