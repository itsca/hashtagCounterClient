import React from 'react';
import {Glyphicon, Button, FormGroup, FormControl, InputGroup} from 'react-bootstrap';
import { observer } from 'mobx-react';

const Search = observer(['searchHistory'], class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hashtagSearchValue: "",
      searchResult: {
        'name': '',
        'count': '',
      },
    }
  }

  search() {
    const hashtagName = this.state.hashtagSearchValue;
    const BASE_URL = 'https://glacial-everglades-71483.herokuapp.com/v1/search/';
    const FETCH_URL = BASE_URL + this.state.hashtagSearchValue;

    this.setState({searchResult: {'name': '', 'count': ''}, loading: true});
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({searchResult: {'name': '#' + hashtagName, 'count': json}, loading: false});
      this.props.searchHistory.addToHistory({'hashtagName': '#' + hashtagName, 'hashtagCount': json});
    });
  }

  clearSearchHistory() {
    this.props.searchHistory.deleteHistory();
    this.setState({searchResult: {'name': '', 'count': ''}});
  }

  checkForloaded() {
    if (this.state.loading === true) {
      return (
        <div>
          <Glyphicon glyph="cog" className="loaderIcon"/>
          <p>Searching...</p>
        </div>
      );
    }
  }

  checkForHistory() {
    if (this.props.searchHistory.history[0]) {
      return (
        <div>
          <div className="searchHistoryList">
            {this.props.searchHistory.history.map((search, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    {search.hashtagName + " "}
                    {search.hashtagCount}
                  </li>
                )
              }
            )}
          </div>
          <button className="btn btn-danger"
            onClick={() => this.clearSearchHistory()}>
            Clear History
          </button>
        </div>
      );
    } else {
      return (
        <li className="list-group-item">
          No previous searches
        </li>
      );
    }
  }

  render() {
    return (
      <div className="container" style={{width: '60%'}}>
        <p>Look for the number of hashtag appearances by the name <br/> <i><strong>(without the #)</strong></i>!</p>
        <FormGroup>
          <InputGroup>
            <FormControl type="text"
                         placeholder="Example: nfl"
                         onChange={event => this.setState({hashtagSearchValue: event.target.value})}
                         />
            <InputGroup.Button>
              <Button className="btn-success"
                      onClick={() => {this.search()}}
              >
                Search
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <div className="searchResult">
          {this.checkForloaded()}
          <h4>{this.state.searchResult.name}  {this.state.searchResult.count}</h4>
        </div>
        <div className="previousSearches">
          <h4>Previous Searches:</h4>
          {this.checkForHistory()}
        </div>
      </div>
    );
  }
});

export default Search;
