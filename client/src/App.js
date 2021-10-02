import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {AddListItem, Item, ItemsList} from "./components"

var listItems;
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
          {listItems}
          <div>
            <Switch>
              <Route exact path={["/", "/itemsList"]} component={ItemsList} />
              <Route exact path="/add" component={AddListItem} />
              <Route path="/item/:id" component={Item} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
