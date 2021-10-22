/* eslint-disable */
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
    <div className="search-product-list-grid">
      <div className="search-product-list-img">
        <img src={Mercedes} alt="mercedes-car" height={25} width={25} style={{
          borderRadius: '5px'
        }} />
      </div>
      <div className="search-card-body">
        <h2>{place.name}</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ padding: '4px 8px', background: '#ddd', borderRadius: '4px', marginRight: '5px'}}>
            ATM
          </div>
          <div style={{ padding: '4px 8px', background: '#ddd', borderRadius: '4px', marginRight: '5px'}}>
            Electric
          </div>
          <div style={{ padding: '4px 8px', background: '#ddd', borderRadius: '4px', marginRight: '5px'}}>
            +4
          </div>
        </div>
        <hr />
        <div className="search-card-footer d-flex mt-4 pt-2 text-right" style={{width: '100%', justifyContent: 'flex-end'}}>
          <h2 style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            textAlign: 'right'
          }}>
            <b>
              £24<span style={{fontWeight: '500'}}>/hr</span>
              <span style={{fontWeight: '500', marginLeft: '5px'}}>(£100/day)</span>
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
    </div>
  );
}
