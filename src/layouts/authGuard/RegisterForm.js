import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Step,
  Paper,
  Button,
  Stepper,
  StepLabel,
  Typography,
  StepConnector,
  stepConnectorClasses,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  MenuItem,
  FormLabel, Grid, Stack, Alert, TextField, FormHelperText, Select, InputLabel, InputAdornment, IconButton
} from '@mui/material';
import { BusinessCenter, Close, Person, Check, Visibility, VisibilityOff } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { MIconButton } from '../../components/@material-extend';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';
import countries from './countries';
import CompanyCheck from '../../redux/services/CompanyCheck';
import Scrollbar from '../../components/Scrollbar';
import { SIGNUP } from '../../graphql/Queries';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { motion } from 'framer-motion';
import { varBounceIn, varFadeInDown } from '../../components/animate';
import { MailIllustration } from '../../assets';

// ----------------------------------------------------------------------

const STEPS = ['Account Type', 'Account Details', 'Set up Location'];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.success.main
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.success.main
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderRadius: 1,
    borderTopWidth: 3,
    borderColor: theme.palette.divider
  }
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  height: 22,
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.disabled,
  ...(ownerState.active && {
    color: theme.palette.success.main
  }),
  '& .QontoStepIcon-completedIcon': {
    zIndex: 1,
    fontSize: 18,
    color: theme.palette.success.main
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  }
}));

function QontoStepIcon({ active, completed }) {
  return (
    <QontoStepIconRoot ownerState={{ active }}>
      {completed ? <Check className='QontoStepIcon-completedIcon' /> : <div className='QontoStepIcon-circle' />}
    </QontoStepIconRoot>
  );
}

export default function RegisterForm() {

  const [dataValues, setDataValues] = useState(0);

  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    address: Yup.string().required('Address required'),
    address2: Yup.string(),
    city: Yup.string().required('City required'),
    country: Yup.string().required('Country required'),
    postalCode: Yup.string().required('Post Code required'),
    birthDay: Yup.string().required('Date of Birth required'),
    businessName: isBusiness ? Yup.string().required('Business name required') : Yup.string(),
    phoneNumber: Yup.string().required('Phone Number required'),
    gender: Yup.string().required('Gender required'),
    title: Yup.string().required('Title required'),
    isBusiness: Yup.string().required('Account Type required')
  });

  const formik = useFormik({
    initialValues: {
      address: '',
      address2: '',
      city: '',
      country: '',
      postalCode: '',
      birthDay: new Date(),
      businessName: '',
      phoneNumber: '',
      gender: '',
      title: '',
      isBusiness: false,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await CreateUser().then(res => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);

          enqueueSnackbar('Register success', {
            variant: 'success',
            action: (key) => (
              <MIconButton size='small' onClick={() => closeSnackbar(key)}>
                <Close />
              </MIconButton>
            )
          });
          if (isMountedRef.current) {
            setSubmitting(false);
          }
        }).catch(error => {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        })
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const [CreateUser, { loading, data, error }] = useMutation(SIGNUP, {
    variables: { user: values }
  });

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleShowPassword1 = () => {
    setShowPassword1((show) => !show);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const selectAccountType = <>
    <FormControl
      sx={{ m: 3 }}
      component='fieldset'
      error={errors.isBusiness}
      variant='standard'
    >
      <FormLabel component='legend' sx={{
        margin: '0',
        fontWeight: '700',
        lineHeight: '1.5',
        fontSize: '1.25rem',
        fontFamily: 'Public Sans,sans-serif',
        textAlign: 'center'
      }}>Choose Account Type</FormLabel>
      <RadioGroup
        aria-label='Account Type'
        {...getFieldProps('isBusiness')}
      >
        <Grid container justifyContent='flex-start'>
          <Grid item xs={12}>
            <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, my: 1 }}>
              <FormControlLabel value={true} control={<Radio />} label='' sx={{ mb: 0, mr: 0 }} />
              <BusinessCenter sx={{ width: '30px', height: '30px' }} />
              <Typography textAlign='center' style={{ margin: 8 }}>
                Business
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, my: 1 }}>
              <FormControlLabel value={false} control={<Radio />} label='' sx={{ mb: 0, mr: 0 }} />
              <Person sx={{ width: '30px', height: '30px' }} />
              <Typography textAlign='center' style={{ margin: 8 }}>
                Personal
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </RadioGroup>
      <FormHelperText>{touched.isBusiness && errors.isBusiness}</FormHelperText>
    </FormControl>
  </>;

  const handleNextAccountType = () => {

    setIsBusiness(values.isBusiness);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const accountTypeAction = <>
    <Button disabled sx={{ mr: 1 }}>
      Back
    </Button>
    <Box sx={{ flexGrow: 1 }} />
    <Button variant='contained' onClick={handleNextAccountType} sx={{ mr: 1 }}>
      Next
    </Button>
  </>;

  const setUpAccountDetails = <>

    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <TextField
        fullWidth
        label='First Name'
        {...getFieldProps('firstName')}
        error={Boolean(touched.firstName && errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />

      <TextField
        fullWidth
        label='Last Name'
        {...getFieldProps('lastName')}
        error={Boolean(touched.lastName && errors.lastName)}
        helperText={touched.lastName && errors.lastName}
      />
    </Stack>

    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Title</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Title'
          {...getFieldProps('title')}
        >
          <MenuItem value='Mr'>Mr</MenuItem>
          <MenuItem value='Mrs'>Mrs</MenuItem>
          <MenuItem value='Miss'>Miss</MenuItem>
          <MenuItem value='Ms'>Ms</MenuItem>
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Gender'
          {...getFieldProps('gender')}
        >
          <MenuItem value='Male'>Male</MenuItem>
          <MenuItem value='Female'>Female</MenuItem>
          <MenuItem value='Other'>Other</MenuItem>
        </Select>
      </FormControl>
    </Stack>

    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label='Date of Birth'
          {...getFieldProps('birthDay')}
          error={Boolean(touched.birthDay && errors.birthDay)}
          helperText={touched.birthDay && errors.birthDay}
          fullWidth
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField
        fullWidth
        autoComplete='phoneNumber'
        type='text'
        label={isBusiness === 'true' ? 'Business Phone No.' : 'Personal Phone No.'}
        {...getFieldProps('phoneNumber')}
        error={Boolean(touched.phoneNumber && errors.phoneNumber)}
        helperText={touched.phoneNumber && errors.phoneNumber}
      />

    </Stack>

    {isBusiness === 'true' ? '' : ''}

    {isBusiness === 'true' ? <>
      <TextField
        fullWidth
        autoComplete='businessName'
        type='text'
        label='Business Name'
        {...getFieldProps('businessName')}
        error={Boolean(touched.businessName && errors.businessName)}
        helperText={touched.businessName && errors.businessName}
      />
    </> : <></>}

    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

      <TextField
        fullWidth
        autoComplete='email'
        type='email'
        label={isBusiness === 'true' ? 'Business   email' : 'Email address'}
        {...getFieldProps('email')}
        error={Boolean(touched.email && errors.email)}
        helperText={touched.email && errors.email}
      />
  <TextField
        fullWidth
        autoComplete='confirm-email'
        type='email'
        label={isBusiness === 'true' ? 'Confirm Business   email' : 'Confirm Email address'}
        {...getFieldProps('email1')}
        error={Boolean(touched.email && errors.email)}
        helperText={touched.email && errors.email}
      />
      </Stack>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <TextField
        fullWidth
        autoComplete='current-password'
        type={showPassword ? 'text' : 'password'}
        label='Password'
        {...getFieldProps('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleShowPassword} edge='end'>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
        error={Boolean(touched.password && errors.password)}
        helperText={touched.password && errors.password}
      />
       <TextField
        fullWidth
        autoComplete='confirm-password'
        type={showPassword ? 'text' : 'password'}
        label='Confirm Password'
        {...getFieldProps('password1')}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleShowPassword1} edge='end'>
                {showPassword1 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
        error={Boolean(touched.password && errors.password)}
        helperText={touched.password && errors.password}
      />
    </Stack>

  </>;

  const handleNextAccountDetails = async () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const accountSetUpAction = <>
    <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
      Back
    </Button>
    <Box sx={{ flexGrow: 1 }} />
    <Button variant='contained' onClick={handleNextAccountDetails} sx={{ mr: 1 }}>
      Next
    </Button>
  </>;

  const setUpAccountLocation = <>

    <TextField
      fullWidth
      autoComplete='address'
      type='text'
      label={isBusiness === 'true' ? 'Business St. Address 1' : 'Street Address 1'}
      {...getFieldProps('address')}
      error={Boolean(touched.address && errors.address)}
      helperText={touched.address && errors.address}
    />

    <TextField
      fullWidth
      autoComplete='address2'
      type='text'
      label={isBusiness === 'true' ? 'Business St. Address 2' : 'Street Address 2'}
      {...getFieldProps('address2')}
      error={Boolean(touched.address2 && errors.address2)}
      helperText={touched.address2 && errors.address2}
    />

    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Country</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Country'
          {...getFieldProps('country')}
        >
          {countries.map((country, index) => <MenuItem key={index}
                                                       value={country.label}>{country.label}</MenuItem>)}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        autoComplete='city'
        type='text'
        label='City'
        {...getFieldProps('city')}
        error={Boolean(touched.city && errors.city)}
        helperText={touched.city && errors.city}
      />

    </Stack>

    <TextField
      fullWidth
      autoComplete='postalCode'
      type='number'
      label='Post Code'
      {...getFieldProps('postalCode')}
      error={Boolean(touched.postalCode && errors.postalCode)}
      helperText={touched.postalCode && errors.postalCode}
    />

  </>;

  const handleNextAccountLocation = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const accountLocationAction = <>
    <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
      Back
    </Button>
    <Box sx={{ flexGrow: 1 }} />
    <LoadingButton type='submit' variant='contained' loading={isSubmitting} sx={{ mr: 1 }}>
      Register
    </LoadingButton>
  </>;

  const SignUp = <>SignUp</>;

  function getStepContent(step) {
    switch (step) {
      case 0:
        return selectAccountType;
      case 1:
        return setUpAccountDetails;
      case 2:
        return setUpAccountLocation;
      default:
        return SignUp;
    }
  }

  function getStepActions(step) {
    switch (step) {
      case 0:
        return accountTypeAction;
      case 1:
        return accountSetUpAction;
      case 2:
        return accountLocationAction;
      default:
        return SignUp;
    }
  }

  return (
    <>
      {/*<Typography variant='h4' textAlign='center' sx={{ my: 5 }}>Sign Up your account</Typography>*/}

      <FormikProvider value={formik}>
        <Form autoComplete='off' noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
            <Stack spacing={2} sx={{ flexGrow: 1, width: '550px' }}>

              {activeStep === STEPS.length ? (
                <>

                  <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                    {STEPS.map((label) => (
                      <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <Box sx={{ mb: 1 }} />

                  <Stack direction='column' spacing={2}>

                    <Paper
                      sx={{
                        p: 3,
                        my: 3,
                        minHeight: 120,
                        bgcolor: 'grey.50012'
                      }}
                    >
                      <Stack spacing={3} sx={{ px: 4, justifyContent: 'center', textAlign: 'center' }}>
                        <Alert severity='success'>Email Sent</Alert>

                        <motion.div variants={varBounceIn}>
                          <MailIllustration sx={{ height: 100, my: { xs: 1, sm: 1 } }} />
                        </motion.div>

                        <motion.div variants={varFadeInDown}>
                          <Paper sx={{ p: 1 }}>
                            <Typography variant='body1'>
                              An email has been sent for verification
                            </Typography>
                          </Paper>
                        </motion.div>

                        <motion.div variants={varBounceIn}>
                          <Button
                            size='large'
                            variant='contained'
                            sx={{ m: 1 }}>
                            Check your email
                          </Button>
                        </motion.div>
                      </Stack>
                    </Paper>

                    <Button color='inherit' onClick={handleReset} sx={{ mr: 1 }}>
                      Close
                    </Button>

                  </Stack>
                </>
              ) : (
                <>
                  <Scrollbar sx={{ p: 1, height: '500px' }}>
                    {errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit}</Alert>}

                    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                      {STEPS.map((label) => (
                        <Step key={label}>
                          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    <Box sx={{ mb: 3 }} />

                    <Paper sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      py: 3,
                      px: 2,
                      minHeight: 200,
                      bgcolor: 'grey.50012'
                    }}>
                      <Stack spacing={2} sx={{ width: '100%' }}>
                        {getStepContent(activeStep)}
                      </Stack>
                    </Paper>
                  </Scrollbar>

                  <Box sx={{ textAlign: 'right', display: 'flex' }}>
                    {getStepActions(activeStep)}
                  </Box>
                </>
              )}
            </Stack>
          </Box>
        </Form>
      </FormikProvider>
    </>
  );
}
