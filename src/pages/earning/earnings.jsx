import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Mercedes from '../../assets/img/Mercedes-car.jpg';

export default function Earnings() {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <>
      <div className="earning-main">
        <div className="row mb-3">
          <div className="col-sm-4">
            <div className="overview-header  text-sm-left mb-3 mb-sm-0">
              <h2 className="m-0">Earnings</h2>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="total-earning text-center d-flex  justify-content-sm-end pr-2">
              <p className="margin-right-ten">Total Earnings</p>
              <h2 className="m-0">£18000</h2>
            </div>
          </div>
        </div>

        <Nav tabs className="border-0 mb-4">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' }) + ' pointer'}
              onClick={() => { toggle('1'); }}
            >
              Payment on Hold
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' }) + ' pointer'}
              onClick={() => { toggle('2'); }}
            >
              Payments Processed
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="w-100 p-0" activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="custom-table-main">
              <table className="table" cellpedding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th scope="col" className="text-left-align">Bookings</th>
                    <th scope="col">Date/Time</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Fees</th>
                    <th scope="col">Net</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p className="mb-0">On Hold</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00 AM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p className="mb-0">On Hold</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00 PM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p className="mb-0">On Hold</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00 AM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p className="mb-0">On Hold</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00 PM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="custom-table-main">
              <table className="table" cellpedding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th scope="col" className="text-left-align">Bookings</th>
                    <th scope="col">Date/Time</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Fees</th>
                    <th scope="col">Net</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p>Processed</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00 PM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p>Processed</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00 PM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p>Processed</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00PM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="booking-vechile-outer d-flex">
                        <div className="bookingVechile-img margin-right-ten">
                          <img src={Mercedes} alt="car" />
                        </div>
                        <div className="bookingVechile-detail">
                          <h2 className="text-dark-white">BMW</h2>
                          <p>Processed</p>
                          <a href="#" className="text-underline">Booking Details</a>
                        </div>
                      </div>
                    </th>
                    <td>18/05/20 <br /> 4:00PM</td>
                    <td>£25.99</td>
                    <td>-£12</td>
                    <td>£78.17</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </>
  );

  function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }
}
