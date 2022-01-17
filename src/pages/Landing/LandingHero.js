
// material
import { useTheme } from '@mui/material/styles';
import {
  Link,
  Typography,
  createTheme
} from '@mui/material';

import image1 from '../../assets/img/car1.png';
import image2 from '../../assets/img/motorbike1.png';
import image3 from '../../assets/img/bike1.png';
import * as React from 'react';
import Slider from 'react-slick';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import BannerSlider1 from '../../assets/img/banner-slider-1.jpg';
import BannerSlider2 from '../../assets/img/banner-slider-2.jpg';
import BannerSlider3 from '../../assets/img/banner-slider-3.jpg';
import { useRef, useState } from 'react';
import moment from 'moment';
import SearchBox from './SearchBox';
// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function LandingHero() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [fromDate, setFromDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));
  const [toDate, setToDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));

  const [searchVehicle, setSearchVehicle] = useState(null);

  function dropDownToggle() {
    setDropdownOpen(prevState => !prevState);
  };

  function handleEvent(event, picker) {
    setFromDate(picker.startDate.format('M/DD/YYYY (hh:mm)'));
    setToDate(picker.endDate.format('M/DD/YYYY (hh:mm)'));
  }

  return (
    <>
      <section className="banner-slider-main position-relative">
        <div className="banner-overlay-search" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-sm-6 col-md-3 col-lg-3 mb-3 mb-md-0">
              <div className="banner-search-dropdown dropdown w-100">
                <Dropdown isOpen={dropdownOpen} toggle={dropDownToggle}>
                  <DropdownToggle caret className="btn dropdown-toggle w-100">
                    {
                      searchVehicle === 'car'
                        ? <><i className="fas fa-car-side"
                               style={{marginRight: '5px'}}/> Car</>
                        : searchVehicle === 'motorbike'
                        ? <><i className="fas fa-motorcycle"
                               style={{marginRight: '5px'}}/> Motorbike</>
                        : searchVehicle === 'bicycle'
                          ? <><i className="fas fa-bicycle"
                                 style={{marginRight: '5px'}}/> Bicycle</>
                          : searchVehicle === 'campervan'
                            ? <><i className="fas fa-rv"
                                   style={{marginRight: '5px'}}/> Campervan</>
                            : <>Vehicle</>
                    }
                    <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => setSearchVehicle('car')}><i
                      className="fas fa-car-side"
                      style={{marginRight: '5px'}}/> Car</DropdownItem>
                    <DropdownItem onClick={() => setSearchVehicle('motorbike')}><i
                      className="fas fa-motorcycle"
                      style={{marginRight: '5px'}}/> Motorbike</DropdownItem>
                    <DropdownItem onClick={() => setSearchVehicle('bicycle')}><i
                      className="fas fa-bicycle"
                      style={{marginRight: '5px'}}/> Bicycle</DropdownItem>
                    <DropdownItem onClick={() => setSearchVehicle('campervan')}><i
                      className="fas fa-rv"
                      style={{marginRight: '5px'}}/> Campervan</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 mb-3 mb-md-0">
              <div className="banner-search-field">
                <SearchBox/>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-4 mb-3 mb-sm-0">
              <DateRangePicker
                initialSettings={{
                  timePicker: true,
                  timePickerIncrement: 15
                }}
                alwaysShowCalendars={true}
                onEvent={handleEvent}
              >
                <div className="banner-search-field">
                  <input type="text" name="daterange" value={`${fromDate} - ${toDate}`}
                         onChange={() => {
                         }}/>
                </div>
              </DateRangePicker>
            </div>
            <Link className="col-sm-6 col-md-2 col-lg-1" to="/search">
              <div className="banner-search-icon">
                <input type="submit" value="" className="w-auto"/>
                <i className="fas fa-search"/>
              </div>
            </Link>
          </div>
        </div>

        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5500}
          className='banner-slider-list'
        >
          <div className="banner-slider">
            <img src={BannerSlider1} alt="banner-slider"/>
            <div className="banner-slider-text" data-aos="fade-up">
              <h2>Ready for <span>your</span> next Car <br/> <span>Adventure</span>?</h2>
            </div>
          </div>
          <div className="banner-slider">
            <img src={BannerSlider2} alt="banner-slider"/>
            <div className="banner-slider-text" data-aos="fade-up">
              <h2>Start <span>your</span> Motorcycle <br/> <span>Journey</span>!</h2>
            </div>
          </div>
          <div className="banner-slider">
            <img src={BannerSlider3} alt="banner-slider"/>
            <div className="banner-slider-text" data-aos="fade-up">
              <h2>Thinking about <span>your</span> next <br/>Bike <span>Tour</span>? </h2>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
