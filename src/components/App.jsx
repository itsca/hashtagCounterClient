import React from 'react';
import Search from './search.jsx';

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
          <h1 style={{'font-size': '1em'}}>#HashtagCounter</h1>
        </div>
        <div className="container" style={{'text-align': 'center'}}>
          <p>Look for the number of hashtags by the name <i><strong>(whithout the #)</strong></i>!</p>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
