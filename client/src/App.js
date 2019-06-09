import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Enter a movie you want to watch."
    }
  };

  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </>
      </Router>
    );
  }
};

export default App;
