import React, { Component } from 'react';
import axios from 'axios';
import './Champ.css';

export default class Champ extends Component {
  state = {
    response: '',
    search: ''
  };

 

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
      <div className="margin-top">
        This is what is up
        <br/>
        <br/>
        whatt
      </div>
    );
  }

}