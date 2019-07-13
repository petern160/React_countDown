import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div> Countdown to December 25, 2019</div>
        <div>
          <div>14 days</div>
          <div>30 hours</div>
          <div>15 minutes</div>
          <div>20 seconds</div>
        </div>
        <div>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
