import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Logo from '../../assets/img/logo-main.png';
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [signUpActiveTab, setSignUpActiveTab] = useState('1');

  const modalCloseBtn = <button type="button" className="btn close p-0" onClick={closeAllModal}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  return (
    <>
      <header className="header-main">
        <div
          className="container"
          style={ location.pathname === '/search' ? { maxWidth: '1800px' } : {}}
        >
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="header-logo text-md-left text-center mb-4 mb-md-0">
                <Link to="/"><img src={Logo} alt="logo" /></Link>
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="header-nav d-flex align-items-center justify-content-center justify-content-md-end mb-2 mb-md-0">
                <ul className="header-menu-list d-flex mb-0">
                  <li><Link to="/landing-page" className="become-host">Become a host</Link></li>
                  <li><Link to="/about-us" className="about-us">About Us</Link></li>
                </ul>
                <div className="header-icon-pair d-flex align-items-center">
                  <div className="header-menu-btn">
                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown}>
                      <DropdownToggle caret>
                        <i className="fa fa-bars"></i>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu">
                        <DropdownItem onClick={toggleLoginModal}>Login</DropdownItem>
                        <DropdownItem onClick={toggleSignupModal}>Sign Up</DropdownItem>
                        <DropdownItem>Profile</DropdownItem>
                        <DropdownItem>Notifications</DropdownItem>
                        <DropdownItem>Messages</DropdownItem>
                        <DropdownItem>Bookings</DropdownItem>
                        <DropdownItem>Saved</DropdownItem>
                        <DropdownItem divider />

                        <DropdownItem>Vechile Listings</DropdownItem>
                        <DropdownItem disabled>Ads Manager</DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem>Account</DropdownItem>
                        <DropdownItem>Help</DropdownItem>
                        <DropdownItem>Logout</DropdownItem>

                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="header-profile">
                    <div className="header-profile-img">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- login modal --> */}
      <Modal isOpen={showLoginModal} toggle={toggleLoginModal} className='loginPopupMain add-listing-main'>
        <ModalHeader toggle={toggleLoginModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner">
            <form>
              <div className="login-logo">
                <img src={Logo} alt="logo" />
              </div>
              <h2>Welcome back! Please login to your Account</h2>
              <div className="contact-form-field mb-3">
                <input type="email" placeholder="Enter Email Address" />
              </div>
              <div className="contact-form-field mb-4">
                <input type="password" placeholder="Password" />
              </div>
              <div className="contact-form-field submit-contact text-center p-2">
                <input type="Submit" value="Login" onClick={toggleLoginModal} />
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- login modal --> */}

      {/* <!-- Sign up modal --> */}
      <Modal isOpen={showSignupModal} toggle={toggleSignupModal} className='loginPopupMain signup-popup add-listing-main'>
        <ModalHeader toggle={toggleSignupModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner signUp-steps">
            <TabContent activeTab={signUpActiveTab}>
              <TabPane tabId="1">
                <div className="login-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <h2>Sign Up to your account</h2>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Enter name" />
                </div>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Last name" />
                </div>
                <button className="common-btn text-uppercase mt-4 btnNext" onClick={() => toggleSignUpTabs('2')}>Next</button>
              </TabPane>
              <TabPane tabId="2">
                <div className="login-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <h2>Sign Up to your account</h2>
                <div className="contact-form-field mb-3 radio-field">
                  <input type="radio" id="test1" name="radio-group" checked={true} />
                  <label for="test1"><i className="fas fa-briefcase"></i> Business</label>
                </div>
                <div className="contact-form-field mb-3  radio-field">
                  <input type="radio" id="test2" name="radio-group" />
                  <label for="test2"><i className="fas fa-user"></i>Individual</label>
                </div>
                <button className="common-btn text-uppercase mt-4 btnNext" onClick={() => toggleSignUpTabs('3')}>Next</button>
              </TabPane>
              <TabPane tabId="3">
                <div className="login-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <h2>Sign Up to your account</h2>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Legal business name" />
                </div>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Business phone number" />
                </div>
                <button className="common-btn text-uppercase mt-4 btnNext" onClick={() => toggleSignUpTabs('4')}>Next</button>
              </TabPane>
              <TabPane tabId="4">
                <div className="login-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <h2>Sign Up to your account</h2>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Street address" />
                </div>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Street address2" />
                </div>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="City" />
                </div>
                <div className="contact-form-field mb-3">
                  <div className="select-outer">
                    <select>
                      <option disabled selected hidden>Country(optional)</option>
                      <option>Indian</option>
                      <option>USA</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Post Code" />
                </div>
                <button className="common-btn text-uppercase mt-4 btnNext" onClick={() => toggleSignUpTabs('5')}>Next</button>
              </TabPane>
              <TabPane tabId="5">
                <div className="login-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <h2>Sign Up to your account</h2>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Full Legal Name" />
                </div>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Full Address" />
                </div>
                <div className="contact-form-field mb-3">
                  <input type="text" placeholder="Business Name" />
                </div>
                <div className="contact-form-field mb-3">
                  <input type="email" placeholder="Email" />
                </div>
                <button className="common-btn text-uppercase mt-4 btnNext" onClick={() => toggleSignUpTabs('6')}>Next</button>
              </TabPane>
              <TabPane tabId="6">
                <div className="login-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <h2>Sign Up to your account</h2>
                <div className="contact-form-field mb-3">
                  <div className="select-outer">
                    <select>
                      <option disabled selected hidden>Title</option>
                      <option>Title 1</option>
                      <option>Title 2</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form-field mb-4">
                  <div className="select-outer">
                    <select>
                      <option disabled selected hidden>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="contact-form-field  checkbox-field">
                  <input type="checkbox" id="t3" name="" className="styled-checkbox" />
                  <label for="t3">I accept <a href="#terms-condition" data-toggle="modal">terms &
                    conditions</a></label>
                </div>
                <div className="contact-form-field submit-contact text-center mt-4">
                  <input type="Submit" value="Submit" onClick={toggleSignupModal} />
                </div>
              </TabPane>
            </TabContent>
            <Nav tabs className="mt-4 justify-content-center border-0">
              <NavItem>
                <NavLink
                  className={classnames({ active: signUpActiveTab === '1' }) + ' pointer'}
                  onClick={() => { toggleSignUpTabs('1'); }}
                >
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: signUpActiveTab === '2' }) + ' pointer'}
                  onClick={() => { toggleSignUpTabs('2'); }}
                >
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: signUpActiveTab === '3' }) + ' pointer'}
                  onClick={() => { toggleSignUpTabs('3'); }}
                >
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: signUpActiveTab === '4' }) + ' pointer'}
                  onClick={() => { toggleSignUpTabs('4'); }}
                >
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: signUpActiveTab === '5' }) + ' pointer'}
                  onClick={() => { toggleSignUpTabs('5'); }}
                >
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: signUpActiveTab === '6' }) + ' pointer'}
                  onClick={() => { toggleSignUpTabs('6'); }}
                >
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- sign up modal --> */}
    </>
  );

  function toggleDropDown() {
    setDropdownOpen(prevState => !prevState);
  };

  function toggleLoginModal(e) {
    if (e) e.preventDefault();
    setShowLoginModal(!showLoginModal);
  };

  function toggleSignupModal(e) {
    if (e) e.preventDefault();
    setShowSignupModal(!showSignupModal);
  };

  function closeAllModal() {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  function toggleSignUpTabs(tab) {
    if (signUpActiveTab !== tab) setSignUpActiveTab(tab);
  };
}
