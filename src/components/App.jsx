import React from 'react';
import Search from './search.jsx';
import stores from '../stores/index.js';
import { Provider } from 'mobx-react';
import {Alert} from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1 style={{'fontSize': '1em'}}>#TwitterHashtagCounter</h1>
        </div>
        <div className="container" style={{'textAlign': 'center'}}>
          <Provider searchHistory={stores.searchHistory}>
            <Search />
          </Provider>
        </div>
        <footer className="main-footer">
          <hr/>
          <div className="container">
            <Alert bsStyle="warning">
              <strong>Disclaimer: </strong>
               Twitter's API rate limitations can easily be broken by hashtags with lots of appearances like #gameofthrones with around (25000 +),
               this would render the app useless for a period of time,
               do to this, the maximum number of appearances shown are 5000 per search.
            </Alert>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
