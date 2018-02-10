import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

import TopNav from './navigation/TopNav';
import  LeftNav from './navigation/LeftNav';
import Main from './league/Main';
import NotFound from './NotFound';
import Champ from './league/Champ';

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)


export default class App extends Component {
  state = {
    response: ''
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));

  //   this.callLeague();

  // }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  // callLeague() {

  //   axios.get('/league')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }


  render() {
    return (

        <div>

          <main className="col-sm-9  col-md-10  pt-3">
            <div className="container-fluid">
              <div className="row">
                <TopNav/>
                <LeftNav/>
                <Router>
                  <Switch>
                    <Route exact path='/'  component={Main} ></Route>
                    <Route path='/champ'  component={Champ} />
                    <Route path='/schedule' component={Schedule} />
                    <Route component={NotFound} />
                  </Switch>
                </Router>
              </div>
            </div>
          </main>
              



          
         
        </div>

    );
  }
}

//export default App;
