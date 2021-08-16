import React from 'react';
import Mercedes from '../../../assets/img/Mercedes-car.jpg';

export default function InfoWindow(props) {
  const { place } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 0,
    left: 0,
    width: 220,
    height: '240px',
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };

  return (
    <div style={infoWindowStyle}>
      <div className="search-product-list-grid">
        <div className="search-product-list-img">
          <img src={Mercedes} alt="mercedes-car" height={25} width={25} />
        </div>
        <div className="search-card-body">
          <h2>{place.name}</h2>
          <div className="search-card-footer d-flex justify-content-between mt-4 pt-2">
            <h2>{place.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
