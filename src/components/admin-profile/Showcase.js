import React, { Component } from 'react';

class Showcase extends Component {
  render() {
    return (
      <div id="main-profile">
        <div className="flex-container">
          <div className="card">
              <a href="/parties/new"><button type="button" className="btn btn-trans">Create a Political Party</button></a>
          </div>  
          <div className="card">
              <a href="/parties"><button type="button" className="btn btn-trans">View Political Parties</button></a>
          </div> 
          <div className="card">
              <a href="/offices/new"><button type="button" className="btn btn-trans">Create a Political Office</button></a>
          </div> 
          <div className="card">
              <a href="#"><button type="button" className="btn btn-trans">View Political Offices</button></a>
          </div> 
        </div>
      </div>
    )
  }
}

export default Showcase;
