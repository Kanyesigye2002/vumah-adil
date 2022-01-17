import React from 'react';
import dummyData from './dummyData';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Mercedes from '../../assets/img/Mercedes-car.jpg';

function VehiclesList(props) {

  const {selectedVehicleOnMap, setSelectedVehicleOnMap, panelWidth} = props

  return (
    <>
      <div
        className={
          `toggle-double-grid ${
            panelWidth > 1100 ? 'c4' : panelWidth > 900 ? 'c3' : panelWidth > 600 ? 'c2' : 'c1'
          }`
        }
      >
        {dummyData.map((place, index) => <>
          <Link className={selectedVehicleOnMap !== place.id ? 'company-product-list-grid' : 'company-product-list-grid is-active'}
                onClick={(event) => {
                  if (selectedVehicleOnMap !== place.id) {
                    event.preventDefault();
                    setSelectedVehicleOnMap(place.id);
                  }
                }}
                to="/car-listing"
          >
            <div className="company-product-list-img">
              <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} className={'carModal-slider mb-5'} style={{borderRadius: '0', height: '100%'}}>
                <div>
                  <img src={Mercedes} alt="car-modal-img"/>
                </div>
                <div>
                  <img src={Mercedes} alt="car-modal-img"/>
                </div>
                <div>
                  <img src={Mercedes} alt="car-modal-img"/>
                </div>
              </Slider>
            </div>
            <div className="comapany-card-body">
              <h2>{place.name}</h2>
              <ul className="car-grid-tag" style={{paddingLeft: '0'}}>
                <li>ATM</li>
                <li>Electric</li>
                <li>Bluetooth</li>
                <li>+3</li>
              </ul>
              <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                                            <span className="heart-review">
                                                <i className="fas fa-heart" style={{fontWeight: 500}}
                                                   onClick={(event) => {
                                                     event.preventDefault();
                                                     event.stopPropagation();
                                                     if (event.currentTarget.style['font-weight'].toString() === '600') {
                                                       event.currentTarget.style.fontWeight = 500;
                                                     } else {
                                                       event.currentTarget.style.fontWeight = 600;
                                                     }
                                                   }}
                                                />
                                            </span>
                <h2 style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'right'
                }}>
                  <b>
                    £24<span style={{fontWeight: '500'}}>/hr</span>
                    <span
                      style={{fontWeight: '500', marginLeft: '5px'}}>(£100/day)</span>
                  </b>
                  <small style={{
                    opacity: '0.6',
                    marginTop: '3px',
                    fontSize: '13px',
                    textDecoration: 'underline'
                  }}>£653 total</small>
                </h2>
              </div>
            </div>
          </Link>
        </>)}
      </div>
    </>
  );
}

export default VehiclesList;