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
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import moment from 'moment';
import { useMutation } from '@apollo/client';
import { CANCEL_BOOKING } from '../../graphql/Queries';
import useDroidDialog from '../../hooks/useDroidDialog';
import { useSnackbar } from 'notistack';
import { MIconButton } from '../../components/@material-extend';
import { Close } from '@mui/icons-material';

function CancelBooking({ booking }) {
  const { onClose } = useDroidDialog();

  const vehicle = message.booking.vehicleRented;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loadingStatus, setLoadingStatus] = useState({ show: false, status: 'warning', message: 'message' });

  const [preview, setPreview] = useState(false);
  const [reason, setReason] = useState('');
  const [desc, setDesc] = useState('');

  const [cancelBooking] = useMutation(CANCEL_BOOKING, {
    variables: { bookingID: booking.id, reason: reason, description: desc }
  });

  const onCancelBooking = () => {
    cancelBooking().then((res) => {
      enqueueSnackbar('Booking request was canceled Successfully', {
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

  const handleReasonChange = (e) => {
    setLoadingStatus({ show: false, status: 'warning', message: 'message' });
    setReason(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setLoadingStatus({ show: false, status: 'warning', message: 'message' });
    setDesc(e.target.value);
  };

  const onPreview = () => {
    if (reason === '') {
      setLoadingStatus({ show: true, status: 'error', message: 'Please select Reason for canceling' });
      return;
    }
    if (desc.length < 20) {
      setLoadingStatus({ show: true, status: 'error', message: 'Description must contain atleast 20 characters' });
      return;
    }

    setPreview(true);
  };

  const reasons = [
    'Guest is attempting to pay outside Vumah',
    'Different person showed up to collect the vehicle',
    'No response from the guest',
    'Technical issues',
    'Inappropriate behaviour',
    'Other(please explain in the description)'
  ];

  const getChipColor = (s) => {
    if (s === 'Requested') return 'warning';
    if (s === 'Ongoing') return 'info';
    if (s === 'Completed') return 'success';
    if (s === 'Declined') return 'error';
    if (s === 'Canceled') return 'error';

    return 'warning';
  };

  const cancelView = (
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

            <FormControl fullWidth sx={{ my: 1 }}>
              <InputLabel>Select Reason</InputLabel>
              <Select id={'reason'} value={reason} label="Select Reason" onChange={handleReasonChange}>
                {reasons.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Please Describe situation"
              value={desc}
              onChange={handleDescriptionChange}
              fullWidth
              multiline
              rows={3}
            />
            <Stack alignItems="center" sx={{ width: '100%' }}>
              <Button
                variant="contained"
                size="large"
                style={{ marginTop: 24, marginBottom: 8 }}
                sx={{ borderRadius: '100px', color: '#fff', maxWidth: '300px' }}
                onClick={onPreview}
              >
                Preview Cancellation
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );

  const refundPreview = (
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
              <Grid container sx={{ pb: 3 }}>
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
            <Card>
              <CardHeader title="Booking Refund" />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={10}>
                    <Typography variant="body2">Total paid</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2">£120</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">Total consumed</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2">£0</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body2">Total Refund</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle2">£120</Typography>
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
                onClick={onCancelBooking}
              >
                Cancel Booking
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </>
  );

  return <>{preview ? refundPreview : cancelView}</>;
}

export default CancelBooking;
