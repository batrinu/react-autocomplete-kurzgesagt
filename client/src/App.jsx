import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      countryList: ['Albania', 'Colombia', 'Romania', 'Algeria', 'Belgium', 'France', 'Spain', 'Norway', 'Greece']
    }
  }

  componentDidMount() {
    this.searchInput.focus();
  }

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <form id='search-form'>
            <h1>Basic autocomplete example</h1>
            <div className='search-input-container'>
              <input
                type='text'
                placeholder='search'
                id='search-input'
                ref={(input) => { this.searchInput = input; }}
              />
              <label>Search box</label>

            </div>
          </form>
          <ul id='search-results'></ul>
        </main>
      </BrowserRouter>
    )
  }
}



export default App;
