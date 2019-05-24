import React, { Component } from 'react';

class Back extends Component {
  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this);
  }
  goBack () {
    this.props.history.goBack();
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.goBack}
      </div>
    )
  }
}

export default Back;
