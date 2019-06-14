import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Header from "./components/Header";

import Home from "./pages/Home";

const App = () => {
  const [theme, setTheme] = useState({
    colorNav: "blue darken-1",
    colorBackground: "white"
  });
  
  return (
    <Router>
      <>
        <Header colorNav={theme.colorNav} />

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
