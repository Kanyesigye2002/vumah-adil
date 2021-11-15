import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, TabContent, TabPane, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { Menu, Dropdown as AntDDropdown } from 'antd';
import Chart from "chart.js/auto";
import ImageUploader from "react-images-upload";
import classnames from 'classnames';
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from 'moment';
import CarListing from '../car-listing';
import WaveGraph from '../../assets/img/graph-wave.png';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import * as _ from 'lodash';
import { Line, Doughnut } from 'react-chartjs-2';

import RUG from "react-upload-gallery";
import "react-upload-gallery/dist/style.css";


export default function Listing() {
  const chartElementRef = useRef(null);
  const [showAddListingModal, setShowAddListingModal] = useState(false);
  const [toggleListingActiveTab, setToggleListingActiveTab] = useState('1');
  const [showListingContent, setShowListingContent] = useState(true);
  const [showCarListingModal, setShowCarListingModal] = useState(false);

  const [showTotalEarnings, setShowTotalEarnings] = useState(true);

  const [selectedRows, setSelectedRows] = useState([]);
  const [allRowsSelected, setAllRowsSelected] = useState(false);

  const [vehicleType, setVehicleType] = useState('');
  const [pictures, setPictures] = useState([]);

  const [available, setAvailable] = useState(true);

  const [availabilityDay, setAvailabilityDay] = useState({
    'monday': 'allDay',
    'tuesday': 'allDay',
    'wednesday': 'allDay',
    'thursday': 'allDay',
    'friday': 'allDay',
    'saturday': 'allDay',
    'sunday': 'allDay',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [chartInstance, setChartInstance] = useState(null);
  const [statisticsFilter, setStatisticsFilter] = useState([true, true]);

  const [fromDate, setFromDate] = useState(moment(Date.now() - 1000 * 60 * 60 * 24 * 365).format('M/DD/YYYY'));
  const [toDate, setToDate] = useState(moment().format('M/DD/YYYY'));

  const modalCloseBtn = <button type="button" className="btn close p-0" onClick={toggleAddListingModal}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  const carListingCloseBtn = <button type="button" className="btn close p-0" onClick={toggleCarListingModal}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  const dataObject = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Booking',
        data: [ 3, 2, 4, 5, 6, 12, 24, 32, 45, 89, 72, 99 ],
        fill: false,
        backgroundColor: '#444444',
        borderColor: '#999999aa'
      }, {
        label: 'Earning',
        data: [ 6, 3, 2, 4, 10, 24, 38, 45, 65, 79, 87, 92 ],
        fill: false,
        backgroundColor: '#f67810',
        borderColor: '#f678104f'
      }
    ],
  };

  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(dataObject);

  useEffect(() => {
    let object = JSON.parse(JSON.stringify(dataObject));
    const newObj = [];

    if (statisticsFilter[0]) {
      newObj.push(object.datasets[0]);
    }

    if (statisticsFilter[1]) {
      newObj.push(object.datasets[1]);
    }

    object.datasets = newObj;
    setData(object);

    /*
    if (darkMode === document.body.classList.contains('dark-theme')) {
      return;
    }

    setDarkMode(document.body.classList.contains('dark-theme'));

    if (document.body.classList.contains('dark-theme')) {
      dataObject.datasets[0].backgroundColor = '#ff0000';
      dataObject.datasets[0].borderColor = '#ff0000';

      dataObject.datasets[1].backgroundColor = '#ff0000';
      dataObject.datasets[1].borderColor = '#ff0000';
    } else {
      dataObject.datasets[0].backgroundColor = '#444444';
      dataObject.datasets[0].borderColor = '#999999aa';

      dataObject.datasets[1].backgroundColor = '#f67810';
      dataObject.datasets[1].borderColor = '#f678104f';
    }

    setData(dataObject);
    */
  }, [statisticsFilter]);

  const options = {
    hover: {
      mode: 'nearest',
      intersect: false
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            return value + '%';
          }
        }
      }
    }
  };

  const data2Object = {
    labels: ['Car', 'Motorbike', 'Bicycle', 'Campervan'],
    datasets: [
      {
        label: 'Booking',
        data: [ 2000, 1500, 2000, 1000 ],
        fill: false,
        backgroundColor: [
          '#36a2eb',
          '#f67810',
          '#66f759',
          '#faf287'
        ]
      }
    ],
  };

  const [data2, setData2] = useState(data2Object);

  const options2 = {
    hover: {
      mode: 'nearest',
      intersect: false
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem, data) => {
            if (showTotalEarnings) {
              return ` ${ tooltipItem.label }: £${ tooltipItem.raw }`;
            } else {
              return ` ${ tooltipItem.label }: ${ tooltipItem.raw } trips`;
            }
          }
        }
      }
    },
    scales: {
      y: { display: false },
    },
  };

  useEffect(() => {
    if (showTotalEarnings) {
      data2Object.datasets[0].data = [ 2000, 1500, 2000, 1000 ];
    } else {
      data2Object.datasets[0].data = [ 200, 150, 110, 50 ];
    }

    setData2(data2Object);
  }, [showTotalEarnings]);

  /*
  function renderChart() {
    if (!showListingContent) {
      if (chartInstance) {
        try {
          chartInstance.destroy();
        } catch(e) {}
      }

      const myChartRef = chartElementRef.current.getContext("2d");
      const instance = new Chart(myChartRef, {
        type: 'doughnut',
        data: {
          labels: ['Car', 'Motorbike', 'Bicycle', 'Campervan'],
          datasets: [{
            data: [1000, 1000, 1000, 1000],
            backgroundColor: [
              '#f67810',
              '#aa7548',
              '#e39554',
              '#b75b10'
            ],
            hoverOffset: 4
          }]
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },
          
        }
      });

      setChartInstance(instance);
    }
  }

  useEffect(() => {
    renderChart();
  }, [showListingContent]);

  useEffect(() => {
    renderChart();
  }, [showTotalEarnings]);
  */

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => onVehicleTypeChange('Car')}>
        <i className="fas fa-car-side"></i>&nbsp;&nbsp;Car
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={() => onVehicleTypeChange('Motorbike')}>
        <i className="fas fa-motorcycle"></i>&nbsp;&nbsp;Motorbike
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={() => onVehicleTypeChange('Bicycle')}>
        <i className="fas fa-bicycle"></i>&nbsp;&nbsp;Bicycle
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={() => onVehicleTypeChange('Campervan')}>
        <i className="fas fa-rv"></i>&nbsp;&nbsp;Campervan
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="statistic-graph mb-4">
        <div className="row mb-3">
          <div className="col-sm-4 ">
            <div
              className="statistic-header pl-sm-4 d-flex justify-content-center justify-content-sm-start mb-3 mb-sm-0">
              <h2 className="m-0">Statistics</h2>
            </div>
          </div>
          <div className="col-sm-8 justify-content-center justify-content-sm-start">
            <div className="d-flex justify-content-center justify-content-sm-end margin-right-ten align-items-center">
              <div style={{position: 'relative'}}>
                <DateRangePicker
                  initialSettings={{
                    timePicker: false,
                    opens: 'left',
                    endDate: toDate,
                    startDate: fromDate,
                    maxDate: moment()
                  }}
                  alwaysShowCalendars={true}
                  onEvent={handleEvent}
                >
                  <div class="contact-form-field field-label">
                    <input type="text" name="daterange" value={`${fromDate} - ${toDate}`} style={{borderColor: '#f67810', height: '30px', textAlign: 'center', paddingLeft: '10px', paddingRight: '10px'}} />
                  </div>
                </DateRangePicker>
              </div>
              <div className="select-outer">
                <div className="banner-search-dropdown">
                  <Dropdown isOpen={filterDropdownOpen} toggle={toggleFilterDropDown}>
                    <DropdownToggle className="margin-right-ten">
                      {
                        (statisticsFilter[0] && statisticsFilter[1])
                          ? 'All'
                          : (statisticsFilter[0])
                            ? 'Bookings'
                            : (statisticsFilter[1])
                              ? 'Earnings'
                              : 'Nothing'
                      }
                    </DropdownToggle>
                    <DropdownMenu className="vumah-dropdown-menu">
                      <DropdownItem className="vechiles" onMouseUp={() => {
                        setStatisticsFilter([!(statisticsFilter[0]), statisticsFilter[1]]);
                        setFilterDropdownOpen(true);

                        setTimeout(() => {
                          setFilterDropdownOpen(true);
                        }, 10);

                        setTimeout(() => {
                          setFilterDropdownOpen(true);
                        }, 25);

                        setTimeout(() => {
                          setFilterDropdownOpen(true);
                        }, 50);

                        setTimeout(() => {
                          setFilterDropdownOpen(true);
                        }, 100);
                      }} style={{display: 'flex'}}>
                        <div className="contact-form-field checkbox-field" style={{width: 'unset'}}>
                          <input className="styled-checkbox" id="bbb1" type="checkbox" checked={statisticsFilter[0]} />
                          <label for="bbb1" />
                        </div>
                        Bookings
                      </DropdownItem>
                      <DropdownItem className="vechiles" onMouseUp={
                        () => {
                          setStatisticsFilter([statisticsFilter[0], !(statisticsFilter[1])]);
                          setFilterDropdownOpen(true);

                          setTimeout(() => {
                            setFilterDropdownOpen(true);
                          }, 10);
  
                          setTimeout(() => {
                            setFilterDropdownOpen(true);
                          }, 25);
  
                          setTimeout(() => {
                            setFilterDropdownOpen(true);
                          }, 50);
  
                          setTimeout(() => {
                            setFilterDropdownOpen(true);
                          }, 100);
                        }
                      } style={{display: 'flex'}}>
                        <div className="contact-form-field checkbox-field" style={{width: 'unset'}}>
                          <input className="styled-checkbox" id="bbb2" type="checkbox" checked={statisticsFilter[1]} />
                          <label for="bbb2" />
                        </div>
                        Earnings
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              {/*
                <div className="w-50">
                  <DateRangePicker
                    initialSettings={{
                      timePicker: true
                    }}
                    alwaysShowCalendars={true}
                    onEvent={handleEvent}
                  >
                    <div class="banner-search-field">
                      <input type="text" className="dark-input" name="daterange" value={`${fromDate} - ${toDate}`} />
                    </div>
                  </DateRangePicker>
                </div>
              */}
            </div>
          </div>
        </div>
        <div className="graph-wave">
          {/*<img src={WaveGraph} alt="graph-wave" width="100%" />*/}
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="custom-table-main">
        <div className="table-caption mb-4">
          <div className="row align-items-center">
            <div className="col-4 col-md-6">
              {showListingContent && <button className="add-icon p-0" onClick={toggleAddListingModal}>
                <i className="fas fa-plus"></i>
              </button>}
              {!showListingContent && <>
                {showTotalEarnings
                  ? <button className="common-btn Summary-btn margin-right-five" onClick={toggleShowTotalEarnings}>Total Trips</button>
                  : <button className="common-btn Summary-btn" onClick={toggleShowTotalEarnings}>Total Earnings</button>
                }
              </>}
            </div>
            <div className="col-8 col-md-6 text-right-align">
              {showListingContent && <button className="common-btn Summary-btn ml-3" onClick={toggleShowSummaryContent}>Summary</button>}
              {!showListingContent && <button className="common-btn1 Listing-btn ml-3" onClick={toggleShowSummaryContent}>Listings</button>}
            </div>
          </div>
        </div>
        {showListingContent && <table className="table summy-table" cellpedding="0" cellspacing="0">
          <thead>
            <tr>
              <th scope="col">
                <div className="contact-form-field checkbox-field">
                  <input type="checkbox" id="t4" name="" className="styled-checkbox" onChange={handleOnHeaderSelectionChange} />
                  <label for="t4"></label>
                </div>
              </th>
              <th scope="col">Status</th>
              <th scope="col">Images</th>
              <th scope="col">Vehicle name</th>
              <th scope="col">Rate</th>
              <th scope="col">Availability</th>
              <th scope="col">License plate</th>
              <th scope="col">Trips</th>
              <th scope="col">Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="contact-form-field checkbox-field">
                  <input type="checkbox" id="l1" name="" className="styled-checkbox" checked={allRowsSelected || selectedRows.includes('1')} onChange={() => handleRowSelection('1')} />
                  <label for="l1"></label>
                </div>
              </th>
              <td>
                <label className="switch dark-bg-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <div className="bookingVechile-img">
                  <img src={Mercedes} alt="car" />
                </div>
              </td>
              <td>BMW</td>
              <td>
                £600/hour
                £600/day
              </td>
              <td>Booked</td>
              <td>BD51 SMR</td>
              <td>5</td>
              <td>£600</td>
            </tr>
            <tr>
              <th scope="row">
                <div className="contact-form-field checkbox-field">
                  <input type="checkbox" id="l2" name="" className="styled-checkbox" checked={allRowsSelected || selectedRows.includes('2')} onChange={() => handleRowSelection('2')} />
                  <label for="l2"></label>
                </div>
              </th>
              <td>
                <label className="switch dark-bg-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <div className="bookingVechile-img">
                  <img src={Mercedes} alt="car" />
                </div>
              </td>
              <td>BMW</td>
              <td>
                £600/hour
                £600/day
              </td>
              <td>Booked</td>
              <td>BD51 SMR</td>
              <td>5</td>
              <td>£600</td>
            </tr>
            <tr>
              <th scope="row">
                <div className="contact-form-field  checkbox-field">
                  <input type="checkbox" id="l3" name="" className="styled-checkbox" checked={allRowsSelected || selectedRows.includes('3')} onChange={() => handleRowSelection('3')} />
                  <label for="l3"></label>
                </div>
              </th>
              <td>
                <label className="switch dark-bg-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td className="text-warning">
                <div className="bookingVechile-img">
                  <img src={Mercedes} alt="car" />
                </div>
              </td>
              <td>BMW</td>
              <td>
                £600/hour
                £600/day
              </td>
              <td>Booked</td>
              <td>BD51 SMR</td>
              <td>5</td>
              <td>£600</td>
            </tr>
            <tr>
              <th scope="row">
                <div className="contact-form-field  checkbox-field">
                  <input type="checkbox" id="l4" name="" className="styled-checkbox" checked={allRowsSelected || selectedRows.includes('4')} onChange={() => handleRowSelection('4')} />
                  <label for="l4"></label>
                </div>
              </th>
              <td>
                <label className="switch dark-bg-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </td>
              <td>
                <div className="bookingVechile-img">
                  <img src={Mercedes} alt="car" />
                </div>
              </td>
              <td>BMW</td>
              <td>
                £600/hour
                £600/day
              </td>
              <td>Booked</td>
              <td>BD51 SMR</td>
              <td>5</td>
              <td>£600</td>
            </tr>
          </tbody>
        </table>}
        {!showListingContent && <>
          <div className="summary-pie-cart">
            <Doughnut data={data2} options={options2} />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="car-pie-chart margin-left-thirty">
              <div className="box" />
              <p className="text-dark-white">Car</p>
            </div>

            <div className="motorbike-pie-chart margin-left-thirty">
              <div className="box" />
              <p className="text-dark-white">Motorbike</p>
            </div>

            <div className="bicycle-pie-chart margin-left-thirty">
              <div className="box" />
              <p className="text-dark-white">Bicycle</p>
            </div>

            <div className="campervan-pie-chart margin-left-thirty">
              <div className="box" />
              <p className="text-dark-white">Campervan</p>
            </div>
          </div>
          <div class="summery-content mt-4 text-center-align">
            {
              showTotalEarnings
              ? <p class="total-earn">Total Earnings: £6500</p>
              : <p class="total-Trip">Total Trips: 510</p>
            }
          </div>
        </>}
      </div>

      {/* <!-- add listing modal --> */}
      <Modal isOpen={showAddListingModal} toggle={toggleAddListingModal} className='add-listing-main add-listing-main-width'>
        <ModalHeader toggle={toggleAddListingModal} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="signUp-steps">
            <TabContent activeTab={toggleListingActiveTab}>
              <TabPane tabId="1">
                <div className="add-listing-list ad-list-onetab">
                  <div className="d-flex justify-content-end">
                    <a className="save-draft-text margin-bottom-minus-25" onClick={(e)=>{
                      e.currentTarget.style.color = 'red';
                      e.currentTarget.innerText = 'Saved Draft';
                    }}>
                      Save Draft
                    </a>
                  </div>
                  <h2 className="mb-5 text-center">New Vehicle Listing</h2>
                  <div className="row">
                    <div className="col-md-12 contact-form-field mb-3">
                      <AntDDropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                          <input placeholder="Vehicle Type" value={vehicleType} />
                        </a>
                      </AntDDropdown>
                      {/* <Dropdown isOpen={dropdownOpen} toggle={toggleDropDown} color="link">
                        <DropdownToggle className="w-100">
                          <input placeholder="Vehicle Type" value={vehicleType} />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu">
                          <DropdownItem onClick={() => onVehicleTypeChange('Car')}>
                            <i className="fas fa-car-side"></i>&nbsp;&nbsp;Car
                          </DropdownItem>
                          <DropdownItem onClick={() => onVehicleTypeChange('Motorbike')}>
                            <i className="fas fa-motorcycle"></i>&nbsp;&nbsp;Motorbike
                          </DropdownItem>
                          <DropdownItem onClick={() => onVehicleTypeChange('Bicycle')}>
                            <i className="fas fa-bicycle"></i>&nbsp;&nbsp;Bicycle
                          </DropdownItem>
                          <DropdownItem onClick={() => onVehicleTypeChange('Campervan')}>
                            <i className="fas fa-rv"></i>&nbsp;&nbsp;Campervan
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown> */}
                    </div>
                    {vehicleType !== 'Bicycle' && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Registration/License Plate" />
                      </div>
                    </div>}
                    {(vehicleType === 'Bicycle' || vehicleType === 'Motorbike') && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Bike type" />
                      </div>
                    </div>}
                    {vehicleType !== 'Bicycle' && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Make" />
                      </div>
                    </div>}
                    {vehicleType !== 'Bicycle' && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Model" />
                      </div>
                    </div>}
                    {vehicleType === 'Car' && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Body Type" />
                      </div>
                    </div>}
                    {vehicleType !== 'Bicycle' && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Fuel Type" />
                      </div>
                    </div>}
                    {vehicleType !== 'Bicycle' && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Gearbox" />
                      </div>
                    </div>}

                    <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Pick up location/address" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <div className="input-group mb-3">
                          <div className="input-group-append">
                            <span className="input-group-text h-100" id="hourly-rate">
                              £
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="Hourly Rate" aria-label="Hourly Rate" aria-describedby="hourly-rate" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <div className="input-group mb-3">
                          <div className="input-group-append">
                            <span className="input-group-text h-100" id="daily-rate">
                              £
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="Daily Rate" aria-label="Daily Rate" aria-describedby="daily-rate" />
                        </div>
                      </div>
                    </div>
                    {vehicleType !== 'Bicycle' && <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <input type="text" placeholder="Mileage included in price (km)" />
                      </div>
                    </div>}
                    {/* <div className="col-md-12">
                      <div
                        className="cd-switch d-flex justify-content-center align-items-center mb-3">
                        <div className="switch-field">
                          <input type="radio" id="radio-atm" name="switch-l" value="ATM" checked />
                          <label for="radio-atm">ATM</label>
                          <input type="radio" id="radio-Electric" name="switch-l" value="Electric" />
                          <label for="radio-Electric">Electric</label>
                          <input type="radio" id="radio-Bluetooth" name="switch-l" value="Bluetooth" />
                          <label for="radio-Bluetooth">Bluetooth</label>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="contact-form-field submit-contact text-center mt-4">
                    <input type="Submit" value="Next" className="list-next-btn" onClick={() => toggleAddListingTabs('2')} />
                  </div>
                </div>
              </TabPane>

              <TabPane tabId="2">
                <div className="add-listing-list">
                  <div className="d-flex justify-content-end">
                    <a className="save-draft-text margin-bottom-minus-25" onClick={(e)=>{
                      e.currentTarget.style.color = 'red';
                      e.currentTarget.innerText = 'Saved Draft';
                    }}>
                      Save Draft
                    </a>
                  </div>
                  <h2 className="mb-3 text-center">Add Images</h2>
                    <RUG
                      action="http://example.com/upload"
                      initialState={[
                        {
                          name: "Item 1",
                          size: "232kb",
                          source:
                            "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4050&q=80"
                        },
                        {
                          name: "Item 2",
                          size: "23kb",
                          source:
                            "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80"
                        },
                        {
                          name: "Item 3",
                          size: "222kb",
                          source:
                            "https://images.unsplash.com/photo-1541837283948-d4242eda4585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1835&q=80"
                        }
                      ]}
                    />


                  {/*
                  <ImageUploader
                    withIcon={true}
                    withPreview={true}
                    onChange={onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    label='Max file size: 5mb, accepted: jpg, gif, png'
                  />
                  */}
                  {vehicleType === 'Car' && <>
                    <h2 className="mt-5 mb-4 text-center">Features</h2>
                    <div className="row mb-5">
                      <div className="col-md-9">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="automatic-gearbox" name="automatic-gearbox" className="styled-checkbox" />
                          <label for="automatic-gearbox">
                            <i className="fas fa-asterisk margin-right-five"></i>
                            Automatic gearbox
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="contact-form-field checkbox-field text-right-xl-align">
                          <input type="checkbox" id="autopilot" name="autopilot" className="styled-checkbox car-listing-checkbox" />
                          <label for="autopilot">
                            <i className="far fa-steering-wheel margin-right-five"></i>
                            Autopilot
                          </label>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="usb-input" name="usb-input" className="styled-checkbox" />
                          <label for="usb-input">
                            <i className="fab fa-usb margin-right-five"></i>
                            USB input
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="contact-form-field checkbox-field margin-left-xl-ten">
                          <input type="checkbox" id="electric" name="electric" className="styled-checkbox" />
                          <label for="electric">
                            <i className="fas fa-bolt margin-right-five"></i>
                            Electric
                          </label>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="gps" name="gps" className="styled-checkbox" />
                          <label for="gps">
                            <i className="fas fa-map-marker-alt margin-right-five"></i>
                            GPS
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="contact-form-field checkbox-field text-right-xl-align">
                          <input type="checkbox" id="bluetooth" name="bluetooth" className="styled-checkbox car-listing-checkbox" />
                          <label for="bluetooth">
                            <i className="fab fa-bluetooth-b margin-right-five"></i>
                            Bluetooth
                          </label>
                        </div>
                      </div>
                    </div>
                  </>}

                  {vehicleType === 'Campervan' && <>
                    <h2 className="mt-5 mb-4 text-center">Facilities</h2>
                    <div className="row mb-5">
                      <div className="col-md-7">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="toilet" name="toilet" className="styled-checkbox" />
                          <label for="toilet">Toilet</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="contact-form-field checkbox-field margin-left-xl-fourty-one">
                          <input type="checkbox" id="shower" name="shower" className="styled-checkbox" />
                          <label for="shower">Shower</label>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="kitchen-unit" name="kitchen-unit" className="styled-checkbox" />
                          <label for="kitchen-unit">Kitchen Unit</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="contact-form-field checkbox-field margin-left-xl-fourty-one">
                          <input type="checkbox" id="hot-water" name="hot-water" className="styled-checkbox" />
                          <label for="hot-water">Hot Water</label>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="heating" name="heating" className="styled-checkbox" />
                          <label for="heating">Heating</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="contact-form-field checkbox-field text-right-xl-align">
                          <input type="checkbox" id="suitable-for-tall-people" name="suitable-for-tall-people" className="styled-checkbox campervan-listing-checkbox" />
                          <label for="suitable-for-tall-people">Suitable for tall people</label>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="bicycle-rack" name="bicycle-rack" className="styled-checkbox" />
                          <label for="bicycle-rack">Bicycle Rack</label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="contact-form-field checkbox-field margin-left-xl-fourty-one">
                          <input type="checkbox" id="ac-in-cabin" name="ac-in-cabin" className="styled-checkbox" />
                          <label for="ac-in-cabin">A/C in cabin</label>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="contact-form-field checkbox-field">
                          <input type="checkbox" id="ac-in-cabin" name="ac-in-cabin" className="styled-checkbox" />
                          <label for="ac-in-motorhome-compartment">A/C in motorhome compartment</label>
                        </div>
                      </div>
                    </div>
                  </>}
                  <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="contact-form-field mb-3">
                        <textarea placeholder="Description"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="contact-form-field submit-contact text-center mt-4">
                    <input type="Submit" value="Next" className="list-next-btn" onClick={() => toggleAddListingTabs('3')} />
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="add-listing-list">
                  <div className="d-flex justify-content-end">
                    <a className="save-draft-text margin-bottom-minus-25" onClick={(e)=>{
                      e.currentTarget.style.color = 'red';
                      e.currentTarget.innerText = 'Saved Draft';
                    }}>
                      Save Draft
                    </a>
                  </div>
                  <h2 className="mb-5 text-center">Add Listing</h2>
                  <div className="cd-switch d-flex align-items-center mb-4">
                    <h2 className="m-0">I am always available</h2>
                    <div className="switch-field ml-4">
                      <input type="radio" id="radio-one" name="switch-one" value={true} checked={available} onChange={() => onChangeAvailability('yes')} />
                      <label for="radio-one">Yes</label>
                      <input type="radio" id="radio-two" name="switch-one" value={false} checked={!available} onChange={() => onChangeAvailability('no')} />
                      <label for="radio-two">No</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Monday</label>
                        <div className="contact-form-field mb-3">
                          <div className="select-outer">
                            <select id="paragraphSpaceOPtion" value={availabilityDay['monday']} name="monday" onChange={onSelectionchange}>
                              <option disabled={true}>Select Option</option>
                              <option className="option-1" value="customHours">Custom Hours</option>
                              <option className="option-1" value="allDay">All Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {availabilityDay['monday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>From</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                    {availabilityDay['monday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Until</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Tuesday</label>
                        <div className="contact-form-field mb-3">
                          <div className="select-outer">
                            <select id="paragraphSpaceOPtion" value={availabilityDay['tuesday']} name="tuesday" onChange={onSelectionchange}>
                              <option disabled={true}>Select Option</option>
                              <option className="option-1" value="customHours">Custom Hours</option>
                              <option className="option-1" value="allDay">All Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {availabilityDay['tuesday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>From</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                    {availabilityDay['tuesday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Until</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Wednessday</label>
                        <div className="contact-form-field mb-3">
                          <div className="select-outer">
                            <select id="paragraphSpaceOPtion" value={availabilityDay['wednesday']} name="wednesday" onChange={onSelectionchange}>
                              <option disabled={true}>Select Option</option>
                              <option className="option-1" value="customHours">Custom Hours</option>
                              <option className="option-1" value="allDay">All Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {availabilityDay['wednesday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>From</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                    {availabilityDay['wednesday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Until</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Thursday</label>
                        <div className="contact-form-field mb-3">
                          <div className="select-outer">
                            <select id="paragraphSpaceOPtion" value={availabilityDay['thursday']} name="thursday" onChange={onSelectionchange}>
                              <option disabled={true}>Select Option</option>
                              <option className="option-1" value="customHours">Custom Hours</option>
                              <option className="option-1" value="allDay">All Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {availabilityDay['thursday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>From</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                    {availabilityDay['thursday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Until</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Friday</label>
                        <div className="contact-form-field mb-3">
                          <div className="select-outer">
                            <select id="paragraphSpaceOPtion" value={availabilityDay['friday']} name="friday" onChange={onSelectionchange}>
                              <option disabled={true}>Select Option</option>
                              <option className="option-1" value="customHours">Custom Hours</option>
                              <option className="option-1" value="allDay">All Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {availabilityDay['friday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>From</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                    {availabilityDay['friday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Until</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Saturday</label>
                        <div className="contact-form-field mb-3">
                          <div className="select-outer">
                            <select id="paragraphSpaceOPtion" value={availabilityDay['saturday']} name="saturday" onChange={onSelectionchange}>
                              <option disabled={true}>Select Option</option>
                              <option className="option-1" value="customHours">Custom Hours</option>
                              <option className="option-1" value="allDay">All Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {availabilityDay['saturday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>From</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                    {availabilityDay['saturday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Until</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Sunday</label>
                        <div className="contact-form-field mb-3">
                          <div className="select-outer">
                            <select id="paragraphSpaceOPtion" value={availabilityDay['sunday']} name="saturday" onChange={onSelectionchange}>
                              <option disabled={true}>Select Option</option>
                              <option className="option-1" value="customHours">Custom Hours</option>
                              <option className="option-1" value="allDay">All Day</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {availabilityDay['sunday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>From</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                    {availabilityDay['sunday'] === 'customHours' && <div className="col-md-4">
                      <div className="contact-form-field mb-3">
                        <label>Until</label>
                        <input type="time" className="content" />
                      </div>
                    </div>}
                  </div>
                  <p className="imp-note">* During unavailable hours the listing will be automatically paused</p>

                  <div className="d-flex justify-content-between">
                    <div className="contact-form-field submit-contact text-center mt-4">
                      <input type="Submit" value="Preview" className="list-submit-btn" onClick={toggleCarListingModal} />
                    </div>
                    <div className="contact-form-field submit-contact text-center mt-4">
                      <input type="Submit" value="Submit" className="list-submit-btn" />
                    </div>
                  </div>
                </div>
              </TabPane>
            </TabContent>
            <Nav tabs className="d-flex justify-content-center border-none mt-4">
              <NavItem>
                <NavLink
                  className={classnames({ active: toggleListingActiveTab === '1' }) + ' pointer'}
                  onClick={() => toggleAddListingTabs('1')}
                />
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: toggleListingActiveTab === '2' }) + ' pointer'}
                  onClick={() => toggleAddListingTabs('2')}
                />
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: toggleListingActiveTab === '3' }) + ' pointer'}
                  onClick={() => toggleAddListingTabs('3')}
                />
              </NavItem>
            </Nav>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- add listing modal --> */}


      {/* <!-- show car listing modal --> */}
      <Modal isOpen={showCarListingModal} toggle={toggleCarListingModal} className='add-listing-main add-listing-main-width'>
        <ModalHeader toggle={toggleCarListingModal} close={carListingCloseBtn}></ModalHeader>
        <ModalBody>
          <CarListing hideSimilarCar sliderClassName="carPreview-slider" />
        </ModalBody>
      </Modal>
      {/* <!-- show car listing modal --> */}
    </>
  );

  function toggleAddListingModal(e) {
    if (e) e.preventDefault();
    setShowAddListingModal(!showAddListingModal);
  };

  function toggleAddListingTabs(tab) {
    if (toggleListingActiveTab !== tab) setToggleListingActiveTab(tab);
  };

  function toggleShowSummaryContent(e) {
    if (e) e.preventDefault();
    setShowListingContent(!showListingContent);
  };

  function handleOnHeaderSelectionChange() {
    setAllRowsSelected(!allRowsSelected);
  };

  function handleRowSelection(id) {
    let clonedSelectedRows = _.clone(selectedRows);
    if (clonedSelectedRows.includes(id)) {
      clonedSelectedRows = _.filter(clonedSelectedRows, x => x !== id);
    } else {
      clonedSelectedRows.push(id);
    };

    setSelectedRows(clonedSelectedRows);
  };

  function onVehicleTypeChange(value) {
    setVehicleType(value);
  };

  function onDrop(picture) {
    setPictures([...pictures, picture]);
  };

  function onChangeAvailability(btnName) {
    if (btnName === 'yes') {
      setAvailabilityDay({
        'monday': 'allDay',
        'tuesday': 'allDay',
        'wednesday': 'allDay',
        'thursday': 'allDay',
        'friday': 'allDay',
        'saturday': 'allDay',
        'sunday': 'allDay',
      });
    } else {
      setAvailabilityDay({
        'monday': 'customHours',
        'tuesday': 'customHours',
        'wednesday': 'customHours',
        'thursday': 'customHours',
        'friday': 'customHours',
        'saturday': 'customHours',
        'sunday': 'customHours',
      });
    };
    setAvailable(!available);
  };

  function onSelectionchange(e) {
    const { name, value } = e.target;
    setAvailabilityDay({
      ...availabilityDay,
      [name]: value
    })
  };

  function toggleCarListingModal() {
    setShowCarListingModal(!showCarListingModal);
  };

  function toggleDropDown() {
    setDropdownOpen(prevState => !prevState);
  };

  function toggleShowTotalEarnings() {
    setShowTotalEarnings(!showTotalEarnings);
  };

  function toggleFilterDropDown() {
    setFilterDropdownOpen(prevState => !prevState);
  }

  function handleEvent(event, picker) {
    setFromDate(picker.startDate.format('M/DD/YYYY'));
    setToDate(picker.endDate.format('M/DD/YYYY'));
  };
}
