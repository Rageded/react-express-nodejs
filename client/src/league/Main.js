import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {

  constructor() {
    super();

    this.state = {
     matches: []
    };

    //this.callLeague = this.callLeague.bind(this);
  }
  

  componentWillMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));

    this.callLeague();

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
              {this.state.matches}
              
            </tbody>
          </table>
        </div>
      </div>

    );
  }


  callLeague = () => {

    let name = 'rageed';

    axios.get('/league/summoner/name/' + name)
    .then(response => {
      console.log(response);
      this.setState({
        matches: response.data.matches.map(match => {
          return (
            <tr>
              <td>
                {match.match.lane}
              </td>
              <td>
              </td>

            </tr>
          );
        })
      });

    })
    .catch(function (error) {
      console.log(error);
    });


  }



}