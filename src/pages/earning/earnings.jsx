import React, { useState } from 'react';
import classnames from 'classnames';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import { TabContent, TabPane, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, Collapse, Tooltip, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Popover, PopoverBody } from 'reactstrap';
import CustomerReview from '../../assets/img/customer-review-img-1.png';

export default function Earnings() {
  const [activeTab, setActiveTab] = useState('1');
  const [showAddBankDetailsModal, setShowAddBankDetailsModal] = useState(false);

  const modalCloseBtn = <button type="button" className="btn close p-0" onClick={() => {
    setShowAddBankDetailsModal(false)
  }}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  function toggleAddBankDetailsModal(e) {
    if (e) e.preventDefault();
    setShowAddBankDetailsModal(!showAddBankDetailsModal);
  };

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
                          <a href="#" className="text-underline" onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
                          <a href="#" className="text-underline" onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
                          <a href="#" className="text-underline" onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
                          <a href="#" className="text-underline"  onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
                          <a href="#" className="text-underline"  onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
                          <a href="#" className="text-underline"  onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
                          <a href="#" className="text-underline" onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
                          <a href="#" className="text-underline" onClick={toggleAddBankDetailsModal}>Booking Details</a>
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
        <Modal isOpen={showAddBankDetailsModal} toggle={toggleAddBankDetailsModal} className='bank-detail-popup'>
          <ModalHeader toggle={toggleAddBankDetailsModal} close={modalCloseBtn}></ModalHeader>
          <ModalBody style={{ padding: '0' }}>
            <div className="add-member-header text-center mb-5">
              <h2 style={{ fontWeight: '600' }}>Booking Details</h2>
            </div>
            <form>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', padding: '0 30px 10px 30px' }}>
                <img src={Mercedes} style={{ width: '120px', borderRadius: '10px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
                  <h5 style={{ fontWeight: '600' }}>Mercedes Benz 2018</h5>
                  <p style={{ color: '#f67810', marginBottom: '10px', fontWeight: '500' }}>HL8 HXM</p>
                  <p style={{ display: 'flex', alignItems: 'center' }}>
                    Booked by
                    <img src={CustomerReview} alt="rated-person" style={{ width: '30px', marginLeft: '10px', marginRight: '5px' }} />
                    Thomas H.
                  </p>
                </div>
              </div>
              <hr />
              <p style={{ padding: '0 30px 10px 30px' }}>
                Checked in: <span style={{ color: '#f67810', fontWeight: '500' }}>10 April 2021 - 06:30AM</span>
              </p>
              <p style={{ padding: '0 30px 10px 30px' }}>
                Return Date: <span style={{ color: '#f67810', fontWeight: '500' }}>14 April 2021 - 07:00PM</span>
              </p>
              <p style={{ padding: '0 30px 30px 30px' }}>
                Booked for: <span style={{ color: '#f67810', fontWeight: '500' }}>5 days</span>
              </p>

              <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', width: '200px', marginLeft: 'auto' }}>
                <p style={{ padding: '0 30px 0 30px' }}>
                  Amount: <span style={{ color: '#f67810', fontWeight: '500', width: '70px', display: 'inline-block' }}>£25.99</span>
                </p>
                <p style={{ padding: '0 30px 0 30px' }}>
                  Fees: <span style={{ color: '#f67810', fontWeight: '500', width: '70px', display: 'inline-block' }}>-£7</span>
                </p>
                <hr style={{width: '200px', marginTop: '5px', marginBottom: '5px'}} />
                <p style={{ padding: '5px 30px 15px 30px', fontWeight: '600' }}>
                  Total: <span style={{ color: '#f67810', fontWeight: '600', width: '70px', display: 'inline-block' }}>£18.99</span>
                </p>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );

  function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }
}
