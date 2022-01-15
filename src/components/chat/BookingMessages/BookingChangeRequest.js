import React from 'react';
import moment from 'moment';
import { Button, Stack, Typography } from '@mui/material';
import DeclineBooking from '../../../pages/requestBooking/DeclineBooking';
import useDroidDialog from '../../../hooks/useDroidDialog';
import useAuth from '../../../hooks/useAuth';

function BookingChangeRequest({ message }) {
  const { user } = useAuth();
  const isMe = message.sender.id === user.id;
  const { onOpen } = useDroidDialog();
  const bookingChangeRequest = message.bookingChangeRequest.booking;
  const booking = message.bookingChangeRequest.booking;
  const vehicle = message.bookingChangeRequest.booking.vehicleRented;

  const senderMessage = () => {
    if (bookingChangeRequest.accept)
      return <Typography variant="body1">Booking Change request was accepted</Typography>;
    if (bookingChangeRequest.declined)
      return <Typography variant="body1">Booking Change request was declined</Typography>;

    return <Typography variant="body1">Booking Change request was sent</Typography>;
  };

  const receiverMessage = () => {
    if (bookingChangeRequest.accept)
      return <Typography variant="body1">Booking Change request was accepted</Typography>;
    if (bookingChangeRequest.declined)
      return <Typography variant="body1">Booking Change request was declined</Typography>;

    return (
      <>
        <Button
          variant="outlined"
          sx={{ borderRadius: '100px' }}
          onClick={() => onOpen('Decline Booking', <DeclineBooking />)}
        >
          Decline
        </Button>
        <Button variant="contained" sx={{ borderRadius: '100px', color: '#fff' }} onClick={() => {}}>
          Accept
        </Button>
      </>
    );
  };

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
                {vehicle.make} - ( {vehicle.reg} )
              </h6>
              <p
                style={{
                  minWidth: '300px',
                  paddingBottom: '0',
                  padding: '5px 20px'
                }}
              >
                Requesting Check-in:
                <span
                  style={{
                    color: '#F67810',
                    marginLeft: '10px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {moment(bookingChangeRequest.startTime).format('ddd MMM yyyy - hh:mm')}
                </span>
              </p>
              <p
                style={{
                  borderBottom: '1px solid grey',
                  minWidth: '300px',
                  padding: '5px 20px'
                }}
              >
                Requesting Return Date:
                <span
                  style={{
                    color: '#F67810',
                    marginLeft: '10px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  {moment(bookingChangeRequest.startTime).format('ddd MMM yyyy - hh:mm')}
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
                  {isMe ? senderMessage() : receiverMessage()}
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingChangeRequest;
