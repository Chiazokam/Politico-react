import React, {Component} from 'react';
import '../../styles/home/showcase.scss';
import { Button } from '../global';

class Showcase extends Component {
  render() {
    return (
      <section id="showcase">
        <div className="container">
          <h1>Let's Go Transparent...</h1>
          <p>Let's Go <span>Politico</span></p>
          <Button className="btn btn-index btn-colored">Get Started</Button>
          <Button className="btn btn-index btn-trans">Learn More</Button>  
        </div>
      </section>
    )
  }
}

export default Showcase;
