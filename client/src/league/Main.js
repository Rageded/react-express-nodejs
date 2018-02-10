import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
  state = {
    response: '',
    search: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));

    this.callLeague();

  }

  callLeague() {

    let name = 'rageed';

    axios.get('/league/summoner/name/' + name)
    .then(function (response) {
      console.log(response.data.body);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div >
        <h1>Dashboard</h1>

        <section className="row text-center placeholders">
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Label</h4>
            <div className="text-muted">Something else</div>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Label</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Label</h4>
            <span className="text-muted">Something else</span>
          </div>
          <div className="col-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Label</h4>
            <span className="text-muted">Something else</span>
          </div>
        </section>

        <h2>Section title</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>

    );
  }

}