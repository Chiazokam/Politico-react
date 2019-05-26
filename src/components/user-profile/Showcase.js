import React, { Component } from 'react';

class Showcase extends Component {
  render() {
    return (
      <div id="main-profile">
      <h2 className='profile-text'>View Election Records</h2>
        <div className="flex-container">
          <div className="card">
              <a href="/parties"><button type="button" className="btn btn-trans">View All Political Parties</button></a>
          </div>  
          <div className="card">
              <a href="/offices"><button type="button" className="btn btn-trans">View Political Offices</button></a>
          </div> 
          <div className="card">
              <a href="#"><button type="button" className="btn btn-trans">View All your Votes</button></a>
          </div> 
          <div className="card">
              <a href="#"><button type="button" className="btn btn-trans">View Election Results</button></a>
          </div> 
        </div>
      </div>
    )
  }
}

export default Showcase;
