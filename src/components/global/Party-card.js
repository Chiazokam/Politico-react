import React from 'react';

const Card = (props) => (
  <div className="card-party">
    <div className="party-main">
        <p><span className="title-span">Party Name</span> {props.name}</p>
        <p><span className="title-span">Head Quarters</span> {props.headquarters}</p>
        {props.edit}
        {props.delete}
    </div> 
    <div className="party-logo"><img src={props.logourl} />
    </div> 
  </div> 
)

export default Card;
