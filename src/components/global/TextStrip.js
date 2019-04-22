import React from 'react';
import '../../styles/global/textStrip.scss';

const TextStrip = props => {
  return (
    <React.Fragment>
      <div className="strip-mend">
        <p>{props.children}</p>
      </div>
    </React.Fragment>
    )
}

export default TextStrip;
