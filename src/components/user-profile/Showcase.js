import React, { Component } from 'react';

class Showcase extends Component {
  render() {
    return (
      <div id="main-profile">
        <div className="flex-container">
        <div className="card">
            <a href="viewParties.html"><button type="button" className="btn btn-trans">View All Parties</button></a>
        </div>  
        <div className="card">
            <a href="viewOffices.html"><button type="button" className="btn btn-trans">View Offices</button></a>
        </div> 
        <div className="card">
            <a href="viewVotes.html"><button type="button" className="btn btn-trans">View Votes</button></a>
        </div> 
        <div className="card">
            <a href="viewResults.html"><button type="button" className="btn btn-trans">View Results</button></a>
        </div> 
        </div>
      </div>
    )
  }
}

export default Showcase;
