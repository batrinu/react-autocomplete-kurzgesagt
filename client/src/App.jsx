import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countryList: ['Albania', 'Colombia', 'Romania', 'Algeria', 'Belgium', 'France', 'Spain', 'Norway', 'Greece'],
      matches: []
    }
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.getMatches = this.getMatches.bind(this)
  }

  handleSearchInputChange(event) {
    if(event.target.value.length > 0) {
      let matches = this.getMatches(event.target.value)
      this.setState({
        matches: matches
      })
    }
  }

  getMatches(inputText) {
    let matchList = []
    for(var i = 0; i< this.state.countryList.length; i++) {
      if (this.state.countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
        matchList.push(this.state.countryList[i])
      }
    }
    return matchList
  }

  displayMatches() {

  }

  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    const { matches } = this.state
    const listItems = matches.map((match)=>{
      return <li>{match}</li>
    })
    return (
      <BrowserRouter>
        <main className="container">
          <form id='search-form'>
            <h1 className='Title'>Basic autocomplete example</h1>
            <div className='Input'>
              <input
                type='text'
                placeholder='search'
                className='Input-text'
                ref={(input) => { this.searchInput = input; }}
                onChange = {this.handleSearchInputChange}
              />
              <label className='Input-label'>Search box</label>

            </div>
          </form>
          <ul id='search-results'>{listItems}</ul>
        </main>
      </BrowserRouter>
    )
  }
}



export default App;
