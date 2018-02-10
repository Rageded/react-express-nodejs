import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Link } from "react-router-dom";




export default class LeftNav extends Component {
  state = {
    response: ''
  };



  render() {
    return (
      <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
        
        <ul className="nav nav-pills flex-column">
          <li className="nav-item"><a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a></li>
          <li className="nav-item"><a className="nav-link" href="/champ#">Champ</a></li>
          <li className="nav-item"><a className="nav-link" href="/schedule#">schedule</a></li>
        </ul>


      </nav>
    );
  }
};