import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';
import classnames from 'classnames';

export default function Support() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <section className="support-main padd-top-60 padd-bottom-60">
      <div className="container">
        <div className="support-search-main text-center mb-5">
          <h2>What do you need help with?</h2>
          <div className="d-flex">
            <div className="support-search-field">
              <input type="search" placeholder="Keywords..." />
              <i className="fas fa-search"></i>
            </div>
            <div className="support-search-btn">
              Search
            </div>
          </div>
        </div>
        <div className="support-tab-main">
          <div className="support-tabs d-flex justify-content-center mb-5">
            <Nav tabs className="border-0">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >
                  Guest
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  Hosts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => { toggle('3'); }}
                >
                  Account Management
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div class="row">
                <div class="col-md-12">
                  <div class="service-header mb-4">
                    <h2>Articles</h2>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/guest-guide#getting-started-with-vumah">
                      <h4 className="link-text-support">Getting Started with Vumah</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/guest-guide#trouble-with-booking">
                      <h4 className="link-text-support">Trouble with your booking</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/guest-guide#guest-fees">
                      <h4 className="link-text-support">Guest Fees</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/guest-guide#breakdown">
                      <h4 className="link-text-support">Breakdown</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/guest-guide#account-safety">
                      <h4 className="link-text-support">Keeping your account safe</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div class="row">
                <div class="col-md-12">
                  <div class="service-header mb-4">
                    <h2>Articles</h2>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#vehicle-not-returned-in-right-state">
                      <h4 className="link-text-support">
                        Would Vumah handle my charges if my vehicle has not been returned in the right state?
                      </h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#create-a-listing">
                      <h4 className="link-text-support">Creating a listing and how to stand out</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#host-rankings-and-performance">
                      <h4 className="link-text-support">Host rankings and performance standards</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#overview-of-fees-credits-bills">
                      <h4 className="link-text-support">Overview of fees, credits, and bills</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#report-an-issue">
                      <h4 className="link-text-support">Report an issue with a renter</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#late-return">
                      <h4 className="link-text-support">What happens if my guest returns the vehicle late?</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#cancel-booking">
                      <h4 className="link-text-support">How do I cancel a booking?</h4>
                    </Link>
                  </div>
                </div>

                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#sales-tax-and-vat">
                      <h4 className="link-text-support">Does Vumah charge hosts with VAT and Sales Tax?</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#how-payments-work">
                      <h4 className="link-text-support">How payments work</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/host-guide#request-to-remove-review">
                      <h4 className="link-text-support">How do I request to remove a review?</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="3">
              <div class="row">
                <div class="col-md-12">
                  <div class="service-header mb-4">
                    <h2 className="link-text-support">Articles</h2>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/account-management-guide#reset-password">
                      <h4 className="link-text-support">Resetting your password</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/account-management-guide#contact-info">
                      <h4 className="link-text-support">Change your contact information</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/account-management-guide#account-safety">
                      <h4 className="link-text-support">Keeping your account safe</h4>
                    </Link>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="more-topic-grid">
                    <Link to="/account-management-guide#account-suspension">
                      <h4 className="link-text-support">Account suspensions and restrictions</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </section>
  );
}
