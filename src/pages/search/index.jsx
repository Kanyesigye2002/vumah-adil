import React, { useState } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Menu, Dropdown } from 'antd';
import GoogleMap from './map';
import SplitPane from "react-split-pane";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from 'moment';
import Mercedes from '../../assets/img/Mercedes-car.jpg';

export default function Search() {
  const [selectedVehicle, setSelectedVehicle] = useState('Vehicle');
	const [selectedFilter, setSelectedFilter] = useState('Filter');
  const [selectedVehicleOnMap, setSelectedVehicleOnMap] = useState(null);
  const [fromDate, setFromDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));
  const [toDate, setToDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => handleSelectedVehicleChange('Car')}>
        <i className="fas fa-car-side"></i>&nbsp;&nbsp;Car
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={() => handleSelectedVehicleChange('Motorbike')}>
        <i className="fas fa-motorcycle"></i>&nbsp;&nbsp;Motorbike
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" onClick={() => handleSelectedVehicleChange('Bicycle')}>
        <i className="fas fa-bicycle"></i>&nbsp;&nbsp;Bicycle
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={() => handleSelectedVehicleChange('Campervan')}>
        <i className="fas fa-rv"></i>&nbsp;&nbsp;Campervan
      </Menu.Item>
    </Menu>
  );

  const filter = (
		<Menu>
			<Menu.Item key="0" onClick={() => handleSelectedFilterChange('Filter')}>
				Filter
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="1" onClick={() => handleSelectedFilterChange('Filter')}>
				Filter
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="2" onClick={() => handleSelectedFilterChange('Filter')}>
				Filter
			</Menu.Item>
	</Menu>
  );
  return (
    <section className="search-main-header position-relative padd-bottom-60 padd-top-60">
      <div className="container">
        <div className="banner-overlay-search position-static mb-4 w-100" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-sm-6 col-md-3 col-lg-2 mb-3 mb-md-0">
              <div className="banner-search-dropdown">
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {selectedVehicle} <i className="fas fa-caret-down"></i>
                  </a>
                </Dropdown>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-5 mb-3 mb-md-0">
              <div className="banner-search-field">
                <input type="search" placeholder="Search for a city or a postcode" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4 mb-3 mb-sm-0">
              <DateRangePicker
                initialSettings={{
                  timePicker: true
                }}
                alwaysShowCalendars={true}
                onEvent={handleEvent}
              >
                <div class="banner-search-field">
                  <input type="text" name="daterange" value={`${fromDate} - ${toDate}`} />
                </div>
              </DateRangePicker>
            </div>
            <div className="col-sm-6 col-md-2 col-lg-1">
              <div className="banner-search-icon">
                <input type="submit" value="" className="w-auto" />
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="map-toggle-main open">
          <SplitPane split="vertical" className="search-page-split-pane" defaultSize="65%">
            <div className="search-left">
              <div className="row mb-3 align-items-center">
                <div className="col-md-4">
                  <div className="search-filter-grid contact-form-field w-100">
                    {/* <div className="select-outer pr-0 filter-field">
                      <i className="fas fa-sort-alt"></i>
                      <select>
                        <option>Filter</option>
                        <option>Filter</option>
                        <option>Filter</option>
                      </select>
                    </div> */}
										<div className="filter-search-dropdown banner-search-dropdown">
												{/* <i className="fas fa-sort-alt"></i> */}
												<Dropdown overlay={filter} trigger={['click']}>
													<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
														{selectedFilter} <i className="fas fa-caret-down"></i>
													</a>
												</Dropdown>
											</div>
                  </div>
                </div>
                <div className="col-md-4">
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
              </div>
              <div className="search-filter-grid contact-form-field field-label padding-left-ten mb-5">
                <p className="mb-2 text-dark-white">Price</p>
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
              <div className="toggle-double-grid">
                <div className="company-product-list-grid">
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
                </div>
                <div className="company-product-list-grid">
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
                </div>
                <div className="company-product-list-grid">
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
                </div>
                <div className="company-product-list-grid">
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
                </div>
              </div>
            </div>
            <div className="search-filter-map">
              <div className="vumah-search-map">
                <GoogleMap selectedVehicleOnMap={selectedVehicleOnMap} onClickMapImage={onClickMapImage} />
              </div>
            </div>
          </SplitPane>
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
