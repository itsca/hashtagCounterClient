import React from 'react';
import Search from './search.jsx';
import stores from '../stores/index.js';
import { Provider } from 'mobx-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1 style={{'fontSize': '1em'}}>#HashtagCounter</h1>
        </div>
        <div className="container" style={{'textAlign': 'center'}}>
          <p>Look for the number of hashtags by the name <i><strong>(whithout the #)</strong></i>!</p>
          <Provider searchHistory={stores.searchHistory}>
            <Search />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
