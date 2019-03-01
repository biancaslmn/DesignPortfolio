import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Body from "./components/body"
import NavBar from "./components/navbar"
import SideBar from './components/sidebar';


class App extends Component {
  render(){
      return(
          <div className="App">
        
        <Router>
              <div>
              <Route path="/" component={NavBar}/>
                 <Body></Body>
           
              </div>
              </Router>
        
          </div>
      )
  }
}
export default App;

