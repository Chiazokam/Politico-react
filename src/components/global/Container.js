import React from 'react';
import '../../styles/global/container.scss'

const Container = props => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

export default Container;
