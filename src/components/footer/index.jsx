import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="row pt-3 pb-4">
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Company</h5>
              <ul className="pl-0">
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li>Partner with us</li>
                <li>Terms & conditions</li>
                <li>Privacy policy</li>

              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3  mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Become a Host</h5>
              <ul>
                <li>Start your business</li>
                <li>Host support</li>
                <li>Host ranking</li>
                <li>Vehicle protection & insurance</li>

              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Guest Support</h5>
              <ul>
                <li>Kickstart your journey</li>
                <li>Trouble with booking</li>
                <li>Guest fees</li>
                <li>Account safety</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Support Centre</h5>
              <ul>
                <li>Support page</li>
                <li>Trust & safety</li>
                <li>Cancellations</li>
                <li>Covid-19 guidelines</li>
                <li>FAQs</li>

              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />

        <div className="row">
          <div className="col-md-4">
            <div className="footer-copy-right mb-3 mb-md-0 footer-social-icon d-flex flex-column align-items-md-start align-items-center">
              <p>2021 Vumah. All rights preserved </p>
              <ul className="d-flex mt-2 p-0">
                <li><a href="https://www.facebook.com/vumahltd" className="fb"><i
                  className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/vumahltd " className="twitter"><i
                  className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/vumahltd/ " className="instra"><i
                  className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="footer-social-icon d-flex justify-content-center justify-content-md-end">
              <div className="dark-light-mode-main">
                <label className="m-0">
                  <input className='toggle-checkbox' type='checkbox' onChange={toggleDarkMode} />
                  <div className='toggle-slot'>
                    <div className='sun-icon-wrapper'>
                      <Icon icon="feather-sun" className="sun-icon" />
                    </div>
                    <div className='toggle-button'></div>
                    <div className='moon-icon-wrapper'>
                      <Icon icon="feather-moon" className="moon-icon" />
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  function toggleDarkMode(e) {
    if (e.target.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
