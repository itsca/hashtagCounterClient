import React from 'react';
import {Glyphicon, Modal, Button, FormGroup, FormControl, InputGroup, ListGroup, ListGroupItem, Clearfix} from 'react-bootstrap';
import { observer } from 'mobx-react';

const Search = observer(['searchHistory'], class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchHistory: "",
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

    this.setState({searchResult: {'name': '', 'count': ''}});
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({searchResult: {'name': '#' + hashtagName, 'count': json}});
      this.props.searchHistory.addToHistory({'hashtagName': '#' + hashtagName, 'hashtagCount': json});
    });
  }

  render() {
    return (
      <div className="container" style={{width: '60%'}}>
        <FormGroup>
          <InputGroup>
            <FormControl type="text"
                         placeholder="Search hashtag"
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
          <p>{this.state.searchResult.name}  {this.state.searchResult.count}</p>
        </div>
        <div>
          <h4>Previous Searches:</h4>
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
      </div>
    );
  }
});

export default Search;
