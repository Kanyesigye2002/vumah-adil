import React, { useState, useRef, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import CarListing from '../car-listing';
import WaveGraph from '../../assets/img/graph-wave.png';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import * as _ from 'lodash';
import { Line, Doughnut } from 'react-chartjs-2';

import SortingSelecting from './vehicleListing';

import 'react-upload-gallery/dist/style.css';
import AddVehicle from './AddVehicle';
import useDroidDialog from '../../hooks/useDroidDialog';
import { Card } from '@mui/material';
import UpdatePasswordModal from '../account/UpdatePasswordModal';
import { useQuery } from '@apollo/client';
import { GET_USER_VEHICLES } from '../../graphql/Queries';
import LoadingScreen from '../../components/LoadingScreen';

export default function Listing() {
  const { onOpen } = useDroidDialog();

  const [showListingContent, setShowListingContent] = useState(true);
  const [showCarListingModal, setShowCarListingModal] = useState(false);

  const [showTotalEarnings, setShowTotalEarnings] = useState(true);

  const [selectedRows, setSelectedRows] = useState([]);
  const [allRowsSelected, setAllRowsSelected] = useState(false);

  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [statisticsFilter, setStatisticsFilter] = useState([true, true]);

  const [fromDate, setFromDate] = useState(moment(Date.now() - 1000 * 60 * 60 * 24 * 365).format('M/DD/YYYY'));
  const [toDate, setToDate] = useState(moment().format('M/DD/YYYY'));

  const carListingCloseBtn = (
    <button
      type="button"
      className="btn close p-0"
      onClick={() =>
        onOpen(
          'Update Password',
          <>
            <UpdatePasswordModal />
          </>
        )
      }
    >
      <span aria-hidden="true">
        <i className="fas fa-times-circle fa-lg" />
      </span>
    </button>
  );

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
        data: [3, 2, 4, 5, 6, 12, 24, 32, 45, 89, 72, 99],
        fill: false,
        backgroundColor: '#444444',
        borderColor: '#999999aa'
      },
      {
        label: 'Earning',
        data: [6, 3, 2, 4, 10, 24, 38, 45, 65, 79, 87, 92],
        fill: false,
        backgroundColor: '#f67810',
        borderColor: '#f678104f'
      }
    ]
  };

  const [chatData, setChatData] = useState(dataObject);

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
    setChatData(object);

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
          callback: function (value, index, values) {
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
        data: [2000, 1500, 2000, 1000],
        fill: false,
        backgroundColor: ['#36a2eb', '#f67810', '#66f759', '#faf287']
      }
    ]
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
              return ` ${tooltipItem.label}: £${tooltipItem.raw}`;
            } else {
              return ` ${tooltipItem.label}: ${tooltipItem.raw} trips`;
            }
          }
        }
      }
    },
    scales: {
      y: { display: false }
    }
  };

  useEffect(() => {
    if (showTotalEarnings) {
      data2Object.datasets[0].data = [2000, 1500, 2000, 1000];
    } else {
      data2Object.datasets[0].data = [200, 150, 110, 50];
    }

    setData2(data2Object);
  }, [showTotalEarnings]);

  return (
    <>
      <div className="statistic-graph mb-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 800 }}>
          <div className="row mb-3">
            <div className="col-sm-4 ">
              <div className="statistic-header pl-sm-4 d-flex justify-content-center justify-content-sm-start mb-3 mb-sm-0">
                <h2 className="m-0">Statistics</h2>
              </div>
            </div>
            <div className="col-sm-8 justify-content-center justify-content-sm-start">
              <div className="d-flex justify-content-center justify-content-sm-end margin-right-ten align-items-center">
                <div style={{ position: 'relative' }}>
                  <DateRangePicker
                    initialSettings={{
                      timePicker: false,
                      opens: 'left',
                      endDate: toDate,
                      startDate: fromDate,
                      maxDate: moment()
                    }}
                    onChange={() => {}}
                    alwaysShowCalendars={true}
                    onEvent={handleEvent}
                  >
                    <div className="contact-form-field field-label">
                      <input
                        type="text"
                        name="daterange"
                        value={`${fromDate} - ${toDate}`}
                        style={{
                          borderColor: '#f67810',
                          height: '30px',
                          textAlign: 'center',
                          paddingLeft: '10px',
                          paddingRight: '10px'
                        }}
                      />
                    </div>
                  </DateRangePicker>
                </div>
                <div className="select-outer">
                  <div className="banner-search-dropdown">
                    <Dropdown isOpen={filterDropdownOpen} toggle={toggleFilterDropDown}>
                      <DropdownToggle className="margin-right-ten">
                        {statisticsFilter[0] && statisticsFilter[1]
                          ? 'All'
                          : statisticsFilter[0]
                          ? 'Bookings'
                          : statisticsFilter[1]
                          ? 'Earnings'
                          : 'Nothing'}
                      </DropdownToggle>
                      <DropdownMenu className="vumah-dropdown-menu">
                        <DropdownItem
                          className="vechiles"
                          onMouseUp={() => {
                            setStatisticsFilter([!statisticsFilter[0], statisticsFilter[1]]);
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
                          }}
                          style={{ display: 'flex' }}
                        >
                          <div className="contact-form-field checkbox-field" style={{ width: 'unset' }}>
                            <input
                              className="styled-checkbox"
                              id="bbb1"
                              type="checkbox"
                              checked={statisticsFilter[0]}
                              onChange={() => {}}
                            />
                            <label htmlFor="bbb1" />
                          </div>
                          Bookings
                        </DropdownItem>
                        <DropdownItem
                          className="vechiles"
                          onMouseUp={() => {
                            setStatisticsFilter([statisticsFilter[0], !statisticsFilter[1]]);
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
                          }}
                          style={{ display: 'flex' }}
                        >
                          <div className="contact-form-field checkbox-field" style={{ width: 'unset' }}>
                            <input
                              className="styled-checkbox"
                              id="bbb2"
                              type="checkbox"
                              checked={statisticsFilter[1]}
                              onChange={() => {}}
                            />
                            <label htmlFor="bbb2" />
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
            <Line data={chatData} options={options} />
          </div>
        </div>
      </div>
      <div className="custom-table-main">
        <div className="table-caption mb-4">
          <div className="row align-items-center">
            <div className="col-4 col-md-6">
              {showListingContent && (
                <button className="add-icon p-0" onClick={() => onOpen('Add Vehicle', <AddVehicle />)}>
                  <i className="fas fa-plus" />
                </button>
              )}
              {!showListingContent && (
                <>
                  {showTotalEarnings ? (
                    <button className="common-btn Summary-btn margin-right-five" onClick={toggleShowTotalEarnings}>
                      Total Trips
                    </button>
                  ) : (
                    <button className="common-btn Summary-btn" onClick={toggleShowTotalEarnings}>
                      Total Earnings
                    </button>
                  )}
                </>
              )}
            </div>
            <div className="col-8 col-md-6 text-right-align">
              {showListingContent && (
                <button className="common-btn Summary-btn ml-3" onClick={toggleShowSummaryContent}>
                  Summary
                </button>
              )}
              {!showListingContent && (
                <button className="common-btn1 Listing-btn ml-3" onClick={toggleShowSummaryContent}>
                  Listings
                </button>
              )}
            </div>
          </div>
        </div>

        {showListingContent ? (
          <Card style={{ marginBottom: 30 }}>
            <SortingSelecting />
          </Card>
        ) : (
          <>
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
              {showTotalEarnings ? (
                <p class="total-earn">Total Earnings: £6500</p>
              ) : (
                <p class="total-Trip">Total Trips: 510</p>
              )}
            </div>
          </>
        )}
      </div>

      {/* <!-- show car listing modal --> */}
      <Modal
        isOpen={showCarListingModal}
        toggle={toggleCarListingModal}
        className="add-listing-main add-listing-main-width"
      >
        <ModalHeader toggle={toggleCarListingModal} close={carListingCloseBtn}></ModalHeader>
        <ModalBody>
          <CarListing hideSimilarCar sliderClassName="carPreview-slider" />
        </ModalBody>
      </Modal>
      {/* <!-- show car listing modal --> */}
    </>
  );

  function toggleShowSummaryContent(e) {
    if (e) e.preventDefault();
    setShowListingContent(!showListingContent);
  }

  function toggleCarListingModal() {
    setShowCarListingModal(!showCarListingModal);
  }

  function toggleShowTotalEarnings() {
    setShowTotalEarnings(!showTotalEarnings);
  }

  function toggleFilterDropDown() {
    setFilterDropdownOpen((prevState) => !prevState);
  }

  function handleEvent(event, picker) {
    setFromDate(picker.startDate.format('M/DD/YYYY'));
    setToDate(picker.endDate.format('M/DD/YYYY'));
  }
}
