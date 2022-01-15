import React from 'react';
import moment from 'moment';
import { Button, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import DeclineBooking from '../../../pages/requestBooking/DeclineBooking';
import useDroidDialog from '../../../hooks/useDroidDialog';
import Mercedes from '../../../assets/img/Mercedes-car.jpg';

function BookingCancel({ message }) {
  const cancelBooking = message.cancelBooking;
  const vehicle = message.cancelBooking.booking.vehicleRented;

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
              <Stack alignItems="center" sx={{ pt: 1, width: '100%' }}>
                <Grid container sx={{ pb: 2 }}>
                  <Grid item xs={12} sm={5}>
                    <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                      <Typography variant="body2">Amount Paid</Typography>
                      <Typography variant="h5">£456.0</Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Divider orientation="vertical" flexItem style={{ height: '100%' }} />
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                      <Typography variant="body2">Amount for Refund</Typography>
                      <Typography variant="h5">£456.0</Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
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
                  direction="column"
                  spacing={0.5}
                  sx={{ width: '100%', pt: 1 }}
                >
                  <Typography variant="body1">Booking was canceled</Typography>
                  <Typography variant="body1">Reason: {cancelBooking.reason}</Typography>
                  <Typography variant="body1">Detail: {cancelBooking.description}</Typography>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingCancel;
