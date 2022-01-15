import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Availability from './availability.jsx';
import Earnings from './earnings';
import Listing from './listing';
import Rank from './rank';
import { Container } from '@mui/material';

export default function Earning() {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <section className="padd-top-60 padd-bottom-60">
      <Container maxWidth="1500px">
        <div class="d-lg-flex w-100 overview-main" data-aos="fade-up">
          <Nav pills className="flex-lg-column">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' }) + ' pointer'}
                onClick={() => {
                  toggle('1');
                }}
              >
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' }) + ' pointer'}
                onClick={() => {
                  toggle('2');
                }}
              >
                Earnings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' }) + ' pointer'}
                onClick={() => {
                  toggle('3');
                }}
              >
                Availability
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' }) + ' pointer'}
                onClick={() => {
                  toggle('4');
                }}
              >
                Rank
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Listing />
            </TabPane>
            <TabPane tabId="2">
              <Earnings />
            </TabPane>
            <TabPane tabId="3">
              <Availability />
            </TabPane>
            <TabPane tabId="4">
              <Rank />
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </section>
  );

  function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }
}
