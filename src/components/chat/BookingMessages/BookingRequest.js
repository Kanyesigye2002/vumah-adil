import React from 'react';
import moment from 'moment';
import { Button, Stack, Typography } from '@mui/material';
import DeclineBooking from '../../../pages/requestBooking/DeclineBooking';
import useDroidDialog from '../../../hooks/useDroidDialog';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/client';
import { ACCEPT_BOOKING, ACCEPT_BOOKING_CHANGE } from '../../../graphql/Queries';
import { MIconButton } from '../../@material-extend';
import { Close } from '@mui/icons-material';
import useAuth from '../../../hooks/useAuth';

function BookingRequest({ message }) {
  const { onOpen } = useDroidDialog();
  const { user } = useAuth();
  const isMe = message.sender.id === user.id;

  const bookingChangeRequest = message.bookingChangeRequest;
  const booking = message.bookingChangeRequest.booking;
  const vehicle = message.bookingChangeRequest.booking.vehicleRented;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [AcceptBookingRequest] = useMutation(ACCEPT_BOOKING_CHANGE, {
    variables: { bookingID: bookingChangeRequest.id }
  });

  const onAccept = () => {
    AcceptBookingRequest().then((res) => {
      enqueueSnackbar('Booking request was accepted Successfully', {
        variant: 'success',
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Close />
          </MIconButton>
        )
      });
    });
  };

  const getBookingActions = () => {
    if (bookingChangeRequest.isAccepted) return <Typography variant="body2">Booking was accepted</Typography>;
    if (bookingChangeRequest.isDeclined) return <Typography variant="body2">Booking was declined</Typography>;

    if (isMe) {
      return <Typography variant="body2">Booking request was accepted</Typography>;
    } else {
      return (
        <>
          <Button
            variant="outlined"
            sx={{ borderRadius: '100px' }}
            onClick={() => onOpen('Decline Booking', <DeclineBooking booking={booking} />)}
          >
            Decline
          </Button>
          <Button variant="contained" sx={{ borderRadius: '100px', color: '#fff' }} onClick={onAccept}>
            Accept
          </Button>
        </>
      );
    }
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
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: 'center', justifyContent: 'flex-end', width: '100%', pt: 1 }}
                >
                  {getBookingActions()}
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingRequest;
