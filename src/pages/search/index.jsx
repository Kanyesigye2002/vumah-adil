import React, { useState, useRef } from 'react';
import GoogleMap from './map';
import SplitPane from "react-split-pane";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from 'moment';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, TabContent, TabPane, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Search() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Vehicle');
	const [selectedFilter, setSelectedFilter] = useState('Filter');
  const [selectedVehicleOnMap, setSelectedVehicleOnMap] = useState(null);
  const [fromDate, setFromDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));
  const [toDate, setToDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));

  const [showFilters, setShowFilters] = useState(false);

  function dropDownToggle() {
    setDropdownOpen(prevState => !prevState);
  };

  function dropDownToggle2() {
    setDropdownOpen2(prevState => !prevState);
  };

  return (
    <section className="search-main-header position-relative">
      <div
        className="container"
        style={{ maxWidth: '1800px' }}
      >
        <div className="map-toggle-main open">
          <div className="search-left">
            <div className="row mb-3 align-items-center">
              <div className="col-md-2">
                <Dropdown isOpen={dropdownOpen} toggle={dropDownToggle}>
                  <DropdownToggle caret className="btn btn-light dropdown-toggle">
                    Vehicle<span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><i className="fas fa-car-side"></i>&nbsp;&nbsp;Car</DropdownItem>
                    <DropdownItem><i className="fas fa-motorcycle"></i>&nbsp;&nbsp;Motorbike</DropdownItem>
                    <DropdownItem><i className="fas fa-bicycle"></i>&nbsp;&nbsp;Bicycle</DropdownItem>
                    <DropdownItem><i className="fas fa-rv"></i>&nbsp;&nbsp;Campervan</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="col-md-4">
                <div className="banner-search-field">
                  <input
                    type="search"
                    placeholder="Search for a city or a postcode"
                  />
                </div>
              </div>

              <div className="col-md-3">
                {
                  showFilters
                    ? (
                      <button className="btn btn-light" onClick={
                        () => setShowFilters(!(showFilters))
                      }>
                        Hide Filters
                        <i className="fas fa-chevron-up" style={{ marginLeft: '10px'}}></i>
                      </button>
                    ) : (
                      <button className="btn btn-light" onClick={
                        () => setShowFilters(!(showFilters))
                      }>
                        Show Filters
                        <i className="fas fa-chevron-down" style={{ marginLeft: '10px'}}></i>
                      </button>
                    )
                }
              </div>

              <div className="col-md-3">
                <div className="search-filter-grid contact-form-field w-100">
                  <div className="select-outer pl-0 sortBy-field ">
                    <i className="fas fa-sort-alt"></i>
                    <select>
                      <option>Sort by</option>
                      <option>Sort by</option>
                      <option>Sort by</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {
              showFilters && (
                <div className="d-flex flex-wrap mb-4">
                  {selectedVehicle !== 'Bicycle' && <div className="search-filter-grid contact-form-field">
                    <div className="select-outer">
                      <select>
                        <option>Make</option>
                        <option>Make</option>
                        <option>Make</option>
                      </select>
                    </div>
                  </div>}

                  {selectedVehicle !== 'Bicycle' && <div className="search-filter-grid contact-form-field ">
                    <div className="select-outer">
                      <select>
                        <option>Model</option>
                        <option>Model</option>
                        <option>Model</option>
                      </select>
                    </div>
                  </div>}

                  {selectedVehicle !== 'Bicycle' && <div className="search-filter-grid contact-form-field ">
                    <div className="select-outer">
                      <select>
                        <option>Gearbox</option>
                        <option>Gearbox</option>
                        <option>Gearbox</option>
                      </select>
                    </div>
                  </div>}

                  {selectedVehicle !== 'Bicycle' && selectedVehicle !== 'Campervan' && selectedVehicle !== 'Motorbike' && <div className="search-filter-grid contact-form-field ">
                    <div className="select-outer">
                      <select>
                        <option>Body type</option>
                        <option>Body type</option>
                        <option>Body type</option>
                      </select>
                    </div>
                  </div>}

                  {selectedVehicle === 'Campervan' && <div className="search-filter-grid contact-form-field ">
                    <div className="select-outer">
                      <select>
                        <option>Facilities</option>
                        <option>Facilities</option>
                        <option>Facilities</option>
                      </select>
                    </div>
                  </div>}

                  {selectedVehicle !== 'Bicycle' && <div className="search-filter-grid contact-form-field ">
                    <div className="select-outer">
                      <select>
                        <option>Fuel type</option>
                        <option>Fuel type</option>
                        <option>Fuel type</option>
                      </select>
                    </div>
                  </div>}

                  {(selectedVehicle === 'Bicycle' || selectedVehicle === 'Motorbike') && <div className="search-filter-grid contact-form-field ">
                    <div className="select-outer">
                      <select>
                        <option>Bike type</option>
                        <option>Bike type</option>
                        <option>Bike type</option>
                      </select>
                    </div>
                  </div>}

                  <Dropdown isOpen={dropdownOpen2} toggle={dropDownToggle2}>
                    <DropdownToggle caret className="btn btn-light dropdown-toggle">
                      Price<span className="caret"></span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className="search-filter-grid contact-form-field field-label padding-left-ten py-1 px-3">
                        <div className="d-flex align-items-center text-dark-white">
                          <span className="margin-right-five"> Hourly:</span>
                          £<input className="margin-right-five primary-input" />
                          <span className="margin-right-five">to</span>
                          £<input className="primary-input" />
                        </div>
                        <div className="d-flex align-items-center mt-3 text-dark-white">
                          <span className="margin-right-five"> Daily:</span>
                          £<input className="margin-right-five primary-input" />
                          <span className="margin-right-five">to</span>
                          £<input className="primary-input" />
                        </div>
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              )
            }

            <div className="toggle-double-grid">
              <Link
                className={selectedVehicleOnMap !== '1' ? 'company-product-list-grid' : 'company-product-list-grid is-active'}
                onMouseEnter={
                  () => setSelectedVehicleOnMap('1')
                }
                onMouseLeave={
                  () => setSelectedVehicleOnMap(null)
                }
                to="/car-listing"
              >
                <div className="company-product-list-img">
                  <img src={Mercedes} alt="mercedes-car" />
                </div>
                <div className="comapany-card-body">
                  <h2>Mercedes-Benz S-class 2018</h2>
                  <ul className="car-grid-tag">
                    <li>ATM </li>
                    <li>Electric</li>
                    <li>Bluetooth</li>
                    <li>+3</li>
                  </ul>
                  <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                    <span className="heart-review"><i className="fas fa-heart"></i></span>
                    <h2>100/day(£24/hr)</h2>
                  </div>
                </div>
              </Link>

              <Link
                className={selectedVehicleOnMap !== '2' ? 'company-product-list-grid' : 'company-product-list-grid is-active'}
                onMouseEnter={
                  () => setSelectedVehicleOnMap('2')
                }
                onMouseLeave={
                  () => setSelectedVehicleOnMap(null)
                }
                to="/car-listing"
              >
                <div className="company-product-list-img">
                  <img src={Mercedes} alt="mercedes-car" />
                </div>
                <div className="comapany-card-body">
                  <h2>Mercedes-Benz S-class 2018</h2>
                  <ul className="car-grid-tag">
                    <li>ATM </li>
                    <li>Electric</li>
                    <li>Bluetooth</li>
                    <li>+3</li>
                  </ul>
                  <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                    <span className="heart-review"><i className="fas fa-heart"></i></span>
                    <h2>100/day(£24/hr)</h2>
                  </div>
                </div>
              </Link>

              <Link
                className={selectedVehicleOnMap !== '3' ? 'company-product-list-grid' : 'company-product-list-grid is-active'}
                onMouseEnter={
                  () => setSelectedVehicleOnMap('3')
                }
                onMouseLeave={
                  () => setSelectedVehicleOnMap(null)
                }
                to="/car-listing"
              >
                <div className="company-product-list-img">
                  <img src={Mercedes} alt="mercedes-car" />
                </div>
                <div className="comapany-card-body">
                  <h2>Mercedes-Benz S-class 2018</h2>
                  <ul className="car-grid-tag">
                    <li>ATM </li>
                    <li>Electric</li>
                    <li>Bluetooth</li>
                    <li>+3</li>
                  </ul>
                  <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                    <span className="heart-review"><i className="fas fa-heart"></i></span>
                    <h2>100/day(£24/hr)</h2>
                  </div>
                </div>
              </Link>

              <Link
                className={selectedVehicleOnMap !== '4' ? 'company-product-list-grid' : 'company-product-list-grid is-active'}
                onMouseEnter={
                  () => setSelectedVehicleOnMap('4')
                }
                onMouseLeave={
                  () => setSelectedVehicleOnMap(null)
                }
                to="/car-listing"
              >
                <div className="company-product-list-img">
                  <img src={Mercedes} alt="mercedes-car" />
                </div>
                <div className="comapany-card-body">
                  <h2>Mercedes-Benz S-class 2018</h2>
                  <ul className="car-grid-tag">
                    <li>ATM </li>
                    <li>Electric</li>
                    <li>Bluetooth</li>
                    <li>+3</li>
                  </ul>
                  <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                    <span className="heart-review"><i className="fas fa-heart"></i></span>
                    <h2>100/day(£24/hr)</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="search-filter-map">
            <GoogleMap selectedVehicleOnMap={selectedVehicleOnMap} onClickMapImage={onClickMapImage} />
          </div>
        </div>
      </div>
    </section>
  );

  function onClickMapImage(key) {
    if (selectedVehicleOnMap === key) {
      setSelectedVehicleOnMap(null);
      return;
    }

    setSelectedVehicleOnMap(key);
  };

  function handleSelectedVehicleChange(value) {
    setSelectedVehicle(value);
  };

	function handleSelectedFilterChange(value) {
    setSelectedFilter(value);
  };


  function handleEvent(event, picker) {
    setFromDate(picker.startDate.format('M/DD/YYYY (hh:mm)'));
    setToDate(picker.endDate.format('M/DD/YYYY (hh:mm)'));
  };
}
