import React  from 'react';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import {
  Alert,
  Box,
  Button, Checkbox,
  FormControl, FormControlLabel,
  InputLabel, MenuItem,
  Paper, Select,
  Stack,
  TextField
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useMutation } from '@apollo/client';
import { CREATE_PAYMENT_CARD } from '../../graphql/Queries';
import countries from '../../layouts/authGuard/countries';
import Scrollbar from '../../components/Scrollbar';

function UpdatePasswordModal(props) {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const NewCardSchema = Yup.object().shape({
    cardName: Yup.string().required('Name is required'),
    cardNumber: Yup.string().required('Card number is required'),
    cardExpired: Yup.string().required('Card expired is required'),
    cardCvv: Yup.string().required('Cvv is required')
  });

  const formik = useFormik({
    initialValues: {
      cardName: 'KANYESIGYE ALLAN',
      cardNumber: '2345 5578 0900 1234',
      cardExpired: '06/22',
      cardCvv: '257',
      billingAddress: {
        id: '',
        address: 'Kampala',
        address2: 'Mbarara',
        city: 'Kampala',
        country: 'Uganda',
        postalCode: '256'
      }
    },
    validationSchema: NewCardSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {

      console.log(values)

      await CreateCard();
      // resetForm();
      setSubmitting(false);
      // alert(JSON.stringify(values, null, 2));
      enqueueSnackbar('Add card success', { variant: 'success' });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const [CreateCard, { loading, data, error }] = useMutation(CREATE_PAYMENT_CARD, {
    variables: { paymentCard: values }
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
            <Stack spacing={2} sx={{ flexGrow: 1, width: '550px' }}>
              {errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit}</Alert>}
              <Scrollbar sx={{ p: 2, height: '500px' }}>
                <Paper
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    py: 3,
                    px: 2,
                    minHeight: 200,
                    bgcolor: 'grey.50012'
                  }}>
                  <Stack spacing={3}>

                    <Stack direction={{ xs: 'column' }} spacing={2}>
                      <TextField
                        fullWidth
                        label='Name on card'
                        {...getFieldProps('cardName')}
                        error={Boolean(touched.cardName && errors.cardName)}
                        helperText={touched.cardName && errors.cardName}
                      />

                      <TextField
                        fullWidth
                        label='Card number'
                        {...getFieldProps('cardNumber')}
                        error={Boolean(touched.cardNumber && errors.cardNumber)}
                        helperText={touched.cardNumber && errors.cardNumber}
                      />
                    </Stack>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <TextField
                        fullWidth
                        label='Expiration date'
                        placeholder='MM/YY'
                        {...getFieldProps('cardExpired')}
                        error={Boolean(touched.cardExpired && errors.cardExpired)}
                        helperText={touched.cardExpired && errors.cardExpired}
                      />

                      <TextField
                        fullWidth
                        label='Cvv'
                        {...getFieldProps('cardCvv')}
                        error={Boolean(touched.cardCvv && errors.cardCvv)}
                        helperText={touched.cardCvv && errors.cardCvv}
                      />
                    </Stack>

                    <Stack direction={{ xs: 'column' }} spacing={2}>

                      <FormControlLabel
                        control={
                          <Checkbox checked={checked} onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }} />
                        }
                        label='Same billing address as original'
                      />

                      {!checked && <>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-label'>Country</InputLabel>
                          <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            label='Country'
                            {...getFieldProps('billingAddress.country')}
                          >
                            {countries.map((country, index) => <MenuItem key={index}
                                                                         value={country.label}>{country.label}</MenuItem>)}
                          </Select>
                        </FormControl>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                          <TextField
                            fullWidth
                            autoComplete='address'
                            type='text'
                            label='Street address 1'
                            {...getFieldProps('billingAddress.address')}
                          />

                          <TextField
                            fullWidth
                            autoComplete='address2'
                            type='text'
                            label='Street address 2'
                            {...getFieldProps('billingAddress.address2')}
                          />
                        </Stack>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                          <TextField
                            fullWidth
                            autoComplete='postalCode'
                            type='number'
                            label='Post Code'
                            {...getFieldProps('billingAddress.postalCode')}
                          />

                          <TextField
                            fullWidth
                            autoComplete='city'
                            type='text'
                            label='City'
                            {...getFieldProps('billingAddress.city')}
                          />
                        </Stack>
                      </>}

                    </Stack>

                    <Stack direction='row' justifyContent='flex-end' spacing={1.5}>
                      <Button type='button' color='inherit' variant='outlined' onClick={() => {
                      }}>
                        Cancel
                      </Button>
                      <Box sx={{ flexGrow: 1 }} />
                      <LoadingButton type='submit' variant='contained' loading={isSubmitting}>
                        Save Card
                      </LoadingButton>
                    </Stack>

                  </Stack>
                </Paper>
              </Scrollbar>
            </Stack>
          </Box>
        </Form>
      </FormikProvider>
    </>
  );
}

export default UpdatePasswordModal;