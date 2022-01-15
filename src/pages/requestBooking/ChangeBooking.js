import React, { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import useDroidDialog from '../../hooks/useDroidDialog';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/client';
import { REQUEST_BOOKING_CHANGE } from '../../graphql/Queries';
import { MIconButton } from '../../components/@material-extend';
import { Close } from '@mui/icons-material';

function ChangeBooking({ booking }) {
  const { onClose } = useDroidDialog();

  const orignalStarTime = moment(booking.startTime).format('M/DD/YYYY (hh:mm)');
  const orignalEndTime = moment(booking.endTime).format('M/DD/YYYY (hh:mm)');

  const vehicle = message.booking.vehicleRented;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loadingStatus, setLoadingStatus] = useState({ show: false, status: 'warning', message: 'message' });

  const [preview, setPreview] = useState(false);
  const [fromDate, setFromDate] = useState(moment(booking.startTime).format('M/DD/YYYY (hh:mm)'));
  const [toDate, setToDate] = useState(moment(booking.endTime).format('M/DD/YYYY (hh:mm)'));

  const [changeBooking] = useMutation(REQUEST_BOOKING_CHANGE, {
    variables: { bookingID: booking.id, startTime: fromDate, endTime: toDate }
  });

  const onChangeBooking = () => {
    changeBooking().then((res) => {
      enqueueSnackbar('Booking Change request was sent Successfully', {
        variant: 'success',
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Close />
          </MIconButton>
        )
      });
      onClose();
    });
  };

  const onPreview = () => {
    if (fromDate === orignalStarTime && toDate === orignalEndTime) {
      setLoadingStatus({ show: true, status: 'error', message: 'No change on the time range' });
      return;
    }
    setPreview(true);
  };

  function handleEvent(event, picker) {
    setLoadingStatus({ show: false, status: 'warning', message: 'message' });

    if (!picker.startDate) {
      enqueueSnackbar('the start date can not be past the date today', {
        variant: 'error',
        action: (key) => (
          <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            <Close />
          </MIconButton>
        )
      });
    }

    setFromDate(picker.startDate.format('M/DD/YYYY (hh:mm)'));
    setToDate(picker.endDate.format('M/DD/YYYY (hh:mm)'));
  }

  const getChipColor = (s) => {
    if (s === 'Requested') return 'warning';
    if (s === 'Ongoing') return 'info';
    if (s === 'Completed') return 'success';
    if (s === 'Declined') return 'error';
    if (s === 'Canceled') return 'error';

    return 'warning';
  };

  const dateChange = (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <Stack alignItems="center" spacing={1} sx={{ flexGrow: 1, width: '450px' }}>
          {loadingStatus.show && <Alert severity={loadingStatus.status}>{loadingStatus.message}</Alert>}
          <Paper
            sx={{
              py: 3,
              px: 1,
              mb: 3,
              minHeight: 120,
              bgcolor: 'grey.50012',
              width: '100%'
            }}
          >
            <Stack alignItems="center" direction="column" spacing={0.5} sx={{ pt: 1, width: '100%' }}>
              <Stack alignItems="flex-start" direction="row" spacing={0.5} sx={{ width: '100%', pb: 3 }}>
                <img src={vehicle.images[0]} style={{ width: '80px', borderRadius: '10px' }} alt="Vehicle" />
                <Stack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  direction="row"
                  spacing={0.5}
                  sx={{ width: '100%' }}
                >
                  <Typography variant="subtitle1">
                    {vehicle.make} - ( {vehicle.reg} )
                  </Typography>
                  <Chip variant="outlined" label={`Status: ${booking.status}`} color={getChipColor(booking.status)} />
                </Stack>
              </Stack>
              <Grid container sx={{ pb: 3 }}>
                <Grid item xs={12} sm={5}>
                  <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                    <Typography variant="subtitle2">Check in</Typography>
                    <Typography variant="body2">{moment(booking.startTime).format('ddd MMM yyyy - hh:mm')}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Divider orientation="vertical" flexItem style={{ height: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                    <Typography variant="subtitle2">Check out</Typography>
                    <Typography variant="body2">{moment(booking.endTime).format('ddd MMM yyyy - hh:mm')}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Typography variant="subtitle1" sx={{ my: 1 }}>
              Booking Dates
            </Typography>
            <DateRangePicker
              initialSettings={{
                timePicker: true,
                timePickerIncrement: 15
              }}
              alwaysShowCalendars={true}
              onEvent={handleEvent}
            >
              <div className="banner-search-field">
                <input type="text" name="daterange" value={`${fromDate} - ${toDate}`} onChange={() => {}} />
              </div>
            </DateRangePicker>
            <Stack alignItems="center" sx={{ width: '100%' }}>
              <Button
                variant="contained"
                size="large"
                style={{ marginTop: 24, marginBottom: 8 }}
                sx={{ borderRadius: '100px', color: '#fff', maxWidth: '300px' }}
                onClick={onPreview}
              >
                Preview booking Changes
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );

  const changePreview = (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
        <Stack alignItems="center" spacing={1} sx={{ flexGrow: 1, width: '450px' }}>
          <Paper
            sx={{
              py: 3,
              px: 1,
              mb: 3,
              minHeight: 120,
              bgcolor: 'grey.50012',
              width: '100%'
            }}
          >
            <Stack alignItems="center" direction="column" spacing={0.5} sx={{ pt: 1, width: '100%' }}>
              <Stack alignItems="flex-start" direction="row" spacing={0.5} sx={{ width: '100%', pb: 3 }}>
                <img src={vehicle.images[0]} style={{ width: '80px', borderRadius: '10px' }} alt="Vehicle" />
                <Stack
                  alignItems="flex-start"
                  justifyContent="space-between"
                  direction="row"
                  spacing={0.5}
                  sx={{ width: '100%' }}
                >
                  <Typography variant="subtitle1">
                    {vehicle.make} - ( {vehicle.reg} )
                  </Typography>
                  <Chip variant="outlined" label={`Status: ${booking.status}`} color={getChipColor(booking.status)} />
                </Stack>
              </Stack>
              <Typography variant="subtitle2">New Booking Dates</Typography>
              <Grid container sx={{ pb: 3 }}>
                <Grid item xs={12} sm={5}>
                  <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                    <Typography variant="subtitle2">Check in</Typography>
                    <Typography variant="body2">{fromDate}</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Divider orientation="vertical" flexItem style={{ height: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                    <Typography variant="subtitle2">Check out</Typography>
                    <Typography variant="body2">{toDate}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
            <Card>
              <CardHeader title="Calculated Booking Costs" />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={10}>
                    <Typography variant="body2">Old Booking Cost</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2">£120</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">New Booking Cost</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2">£200</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">Total Cost difference</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2">+£80</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Stack alignItems="center" sx={{ width: '100%' }}>
              <Button
                variant="contained"
                size="large"
                style={{ marginTop: 24, marginBottom: 8 }}
                sx={{ borderRadius: '100px', color: '#fff', maxWidth: '300px' }}
                onClick={onChangeBooking}
              >
                Submit Change Request
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );

  return <>{preview ? changePreview : dateChange}</>;
}

export default ChangeBooking;
