import React from 'react';
import '../../styles/global/footer.scss';

const Footer = () => {
  return (
      <footer className="home-footer">
        <div className="container">
          <div className="footer-text">
            <div className="footer-contact">
              <a className="footer-header">Contact Us</a>
              <a className="footer-contact-text"><i className="fas fa-phone"></i>07032425466</a>
              <a className="footer-contact-text"><i className="fas fa-home"></i>12B Folawiyo Bankole, Street</a>
            </div>
          </div>
            <p>P<span className="brandname-span">olitico</span>, copyright &copy; 2019</p>
        </div>
      </footer>
    )
}

export default Footer;
