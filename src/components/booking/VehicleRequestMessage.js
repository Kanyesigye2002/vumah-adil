import React from 'react';
import Face from '../../assets/img/face.jpg';
import moment from 'moment';

function VehicleRequestMessage({ message }) {
  const booking = message.booking;
  const vehicle = message.booking.vehicleRented;

  return (
    <>
      <div className="row">
        <div className="col-md-8 mb-3">
          <div className=" chat-box left_pnnel d-flex">
            <div
              className="chat-bubble chat-bubble--left p-0 my-button"
              style={{ borderRadius: '10px', border: '1px solid grey' }}
            >
              <h6
                style={{
                  borderBottom: '1px solid grey',
                  minWidth: '400px',
                  padding: '10px 20px'
                }}
                className="my-button"
              >
                {vehicle.make} - ( {vehicle.model} )
              </h6>
              <p
                style={{
                  minWidth: '300px',
                  paddingBottom: '0',
                  padding: '5px 20px'
                }}
              >
                Check-in:
                <span
                  style={{
                    color: '#F67810',
                    marginLeft: '10px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {moment(booking.startTime).format('ddd MMM yyyy - hh:mm')}
                </span>
              </p>
              <p
                style={{
                  borderBottom: '1px solid grey',
                  minWidth: '300px',
                  padding: '5px 20px'
                }}
              >
                Return Date:
                <span
                  style={{
                    color: '#F67810',
                    marginLeft: '10px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {moment(booking.startTime).format('ddd MMM yyyy - hh:mm')}
                </span>
              </p>
              <div
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  textAlign: 'right',
                  width: '100%',
                  padding: '5px 10px'
                }}
              >
                <button
                  className="btn btn-light my-button"
                  style={{ textDecoration: 'underline', paddingLeft: 0, marginLeft: 'auto' }}
                >
                  Decline
                </button>
                <button className="btn common-btn my-button" style={{ padding: '6px 20px' }}>
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleRequestMessage;
