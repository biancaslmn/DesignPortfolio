import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Body from "./components/body"
import NavBar from "./components/navbar"
import SideBar from './components/sidebar';
import Jumbotron from "./components/jumbotron";
import JumbotronTwo from "./components/about";
import Carousel from "./components/review"
import FormPage from './components/contact';
import Footer from './components/footer';

//import { Card } from 'reactstrap';
//import { CardGroup } from 'reactstrap';
//import PortfolioCard from "./components/card"


class App extends Component {
  render(){
      return(
          <div className="App">
        
        
        <Router>
              <div>
              <Route path="/" component={NavBar}/>
             
              <Body></Body>
              <Carousel></Carousel>
             
              <JumbotronTwo></JumbotronTwo>
              <Jumbotron></Jumbotron>
              <FormPage></FormPage>
              <Footer></Footer>
              </div>
              </Router>
              
          </div>
      )
  }
}
export default App;

