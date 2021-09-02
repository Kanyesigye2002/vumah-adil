import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom'


export default function Footer() {
  const location = useLocation();

  return (
    <footer className="footer-main">
      <div
        className="container"
        style={ location.pathname === '/search' ? { maxWidth: '1800px' } : {}}
      >
        <div className="row pt-3 pb-4">
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Company</h5>
              <ul className="pl-0">
                <li><Link to="/about-us">About us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/partnership">Partner with us</Link></li>
                <li><Link to="/tos">Terms & Conditions</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3  mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Become a Host</h5>
              <ul>
                <li><Link to="/host-guide#create-a-listing">Start your business</Link></li>
                <li><Link to="/support">Host support</Link></li>
                <li><Link to="/host-guide#host-rankings-and-performance">Host ranking</Link></li>
                <li><Link to="/host-guide#report-an-issue">Vehicle protection & insurance</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Guest Support</h5>
              <ul>
                <li><Link to="/guest-guide#getting-started-with-vumah">Kickstart your journey</Link></li>
                <li><Link to="/guest-guide#trouble-with-booking">Trouble with booking</Link></li>
                <li><Link to="/guest-guide#guest-fees">Guest fees</Link></li>
                <li><Link to="/guest-guide#account-safety">Account safety</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="footer-grid">
              <h5>Support Centre</h5>
              <ul>
                <li><Link to="/support">Support page</Link></li>
                <li><Link to="/trust">Trust & safety</Link></li>
                <li>Cancellations</li>
                <li><Link to="/covid">Covid-19 guidelines</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
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
