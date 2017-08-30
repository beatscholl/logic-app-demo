import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

// tslint:disable-next-line:no-any
class App extends React.Component<any, any> {
  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    this.state = {value: ''};
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // tslint:disable-next-line:no-any
  handleSubmit(event: any) {
    alert('submit button clicked');
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            call logic app
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
