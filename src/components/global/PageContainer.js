import React from 'react';
import '../../styles/global/container.scss'

const PageContainer = props => {
  return (
    <div className="page-container">
      {props.children}
    </div>
  )
}

export default PageContainer;
