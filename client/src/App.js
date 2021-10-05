import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import AddListItem from "./components/addListItem.js"
import itemsList from "./components/itemsList.js"
import deleteItem from "./components/deleteItem.js"

// Just to probe to see if the backend is connected
fetch('http://localhost:5000/list')
.then(response => response.json())
.then(data => console.log(data));

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div id="header">
            <div id="header-text">
              SHOPPING LIST
            </div>
          </div>
          <Switch>
            <Route exact path={["/", "/itemsList"]} component={itemsList} />
            <Route exact path="/delete" component={deleteItem} />
            <Route exact path="/add" component={AddListItem} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;