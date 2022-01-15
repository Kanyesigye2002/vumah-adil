/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Box, Paper, Stack } from '@mui/material';
import VehicleView from './VehicleView';
import CheckoutPaymentMethods from './CheckoutPaymentMethods';
import CheckoutBillingInfo from './CheckoutBillingInfo';
import { Link, useParams } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/client';
import { CREATE_BOOKING, GET_VEHICLE_BY_ID, SIGNUP } from '../../graphql/Queries';
import LoadingScreen from '../../components/LoadingScreen';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSelector } from '../../redux/store';
import { LoadingButton } from '@mui/lab';
import { MIconButton } from '../../components/@material-extend';
import { Close } from '@mui/icons-material';
import { useSnackbar } from 'notistack';

export default function RequestBooking() {
  const { id } = useParams();

  const dateRange = useSelector((state) => state.VehicleBookingTime);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const PaymentSchema = Yup.object().shape({
    payment: Yup.mixed().required('Payment is required')
  });

  const formik = useFormik({
    initialValues: {
      payment: '',
      card: {
        id: '',
        cardNumber: ''
      },
      vehicleID: id,
      startTime: dateRange.fromDate,
      endTime: dateRange.toDate
    },
    validationSchema: PaymentSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        console.log('booking: ', values);
        await CreateBooking()
          .then((res) => {
            console.log('Vehicle Booking Res: ', res);

            enqueueSnackbar('Booking was successful', {
              variant: 'success',
              action: (key) => (
                <MIconButton size="small" onClick={() => closeSnackbar(key)}>
                  <Close />
                </MIconButton>
              )
            });

            setSubmitting(false);
          })
          .catch((error) => {
            setErrors({ afterSubmit: error.message });
            setSubmitting(false);
          });
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error.message);
      }
    }
  });

  const { values, isSubmitting, handleSubmit } = formik;

  const [vehicle, setVehicle] = useState({});

  const [getVehicle, { loading }] = useLazyQuery(GET_VEHICLE_BY_ID, {
    variables: { id: id }
  });

  const [CreateBooking] = useMutation(CREATE_BOOKING, {
    variables: { bookingRequest: values }
  });

  useEffect(() => {
    if (id !== undefined) {
      getVehicle().then((res) => {
        console.log('Vehicle: ', res.data.VehicleById);
        setVehicle(res.data.VehicleById);
      });
    }
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Box sx={{ py: 5 }}>
              <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={1}
                sx={{ px: 2, justifyContent: 'center' }}
              >
                <Paper
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    pb: 3,
                    px: 2,
                    minHeight: 200
                  }}
                >
                  <Stack direction="column" spacing={1} sx={{ px: 2, textAlign: 'center', maxWidth: '900px' }}>
                    <CheckoutPaymentMethods formik={formik} />
                    <CheckoutBillingInfo />
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ px: 2, pt: 3, textAlign: 'start', alignItems: 'center', maxWidth: '900px' }}
                    >
                      <input type="checkbox" className="pointer margin-right-five" />
                      <label className="mb-0 pointer text-dark-white">
                        I accept the{' '}
                        <Link className="link-text pointer" to="/tos" target="_blank">
                          terms and conditions
                        </Link>{' '}
                        of the platform
                      </label>
                    </Stack>
                    <Stack direction="column" spacing={1} sx={{ px: 2, textAlign: 'start', maxWidth: '900px' }}>
                      <LoadingButton
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                        sx={{ mr: 1, borderRadius: '100px', maxWidth: '250px', color: 'white' }}
                      >
                        Request to book
                      </LoadingButton>
                    </Stack>
                  </Stack>
                </Paper>
                <Paper sx={{ display: 'flex', justifyContent: 'center', pb: 3, px: 0, minHeight: 200 }}>
                  <VehicleView vehicle={vehicle} />
                </Paper>
              </Stack>
            </Box>
          </Form>
        </FormikProvider>
      )}
    </>
  );
}
