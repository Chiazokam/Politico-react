import React, {Component} from 'react';
import '../../styles/home/showcase.scss';
import { Button } from '../global';
import { Link } from 'react-router-dom';

class Showcase extends Component {
  render() {
    return (
      <section id="showcase">
        <div className="container">
          <h1>Let's Go Transparent...</h1>
          <p>Let's Go <span>Politico</span></p>
          <Link to='/signup'><Button className="btn btn-index btn-colored">Get Started</Button></Link>
          <Link to='/about'><Button className="btn btn-index btn-trans">Learn More</Button></Link>
        </div>
      </section>
    )
  }
}

export default Showcase;
