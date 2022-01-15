import React from 'react';
import moment from 'moment';
import { Button, Stack, Typography } from '@mui/material';
import DeclineBooking from '../../../pages/requestBooking/DeclineBooking';
import useDroidDialog from '../../../hooks/useDroidDialog';

function BookingAccepted({ message }) {
  const { onOpen } = useDroidDialog();
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
                <Stack
                  alignItems="center"
                  justifyContent="flex-end"
                  direction="row"
                  spacing={0.5}
                  sx={{ width: '100%', pt: 1 }}
                >
                  <Typography variant="body1">Booking request was accepted</Typography>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingAccepted;
