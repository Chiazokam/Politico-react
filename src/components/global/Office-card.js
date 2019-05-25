import React from 'react';

const OfficeCard = (props) => (
  <div className="card-party vote-card-party">
    <div className="office-main">
      <p><span className="title-span">Office of the {props.name}</span></p>   
    </div> 
    <div className="office-vote office-vote-flex">
      <div className="candidate"><p><span className="title-span">{props.type}</span></p>
      </div>
    </div> 
  </div>
)

export default OfficeCard;
