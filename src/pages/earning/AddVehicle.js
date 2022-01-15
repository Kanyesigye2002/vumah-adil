import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  FormControl,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  Stack,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  TextField,
  Typography
} from '@mui/material';
import {
  Bluetooth,
  Check,
  Close,
  DirectionsCar,
  DirectionsCarFilled,
  ElectricBike,
  ElectricCar,
  ElectricCarRounded,
  ElectricRickshaw,
  ElectricScooter,
  GpsFixed,
  HdrAuto,
  Moped,
  PedalBike,
  TwoWheeler,
  Usb
} from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { MIconButton } from '../../components/@material-extend';
import UploadImages from './UploadImages';
import Scrollbar from '../../components/Scrollbar';
import img from '../../assets/img/img.png';
import LocationBox from './LocationBox';
import { UploadImages as UploadFileImages } from '../../utils/UploadImage';
import { GET_VEHICLE_DETAILS, REGISTER_VEHICLE } from '../../graphql/Queries';
import Availability from './AddAvailability';
import AddFeatures from './AddFeatures';
import { LoadingButton } from '@mui/lab';
import CarouselVehicles from '../../components/VehicleCarousel/CarouselVehicles';
import useDroidDialog from '../../hooks/useDroidDialog';

// ----------------------------------------------------------------------

const STEPS = ['Details', 'Location', 'Feature', 'Policy', 'Images', 'Availability'];

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
      {completed ? <Check className="QontoStepIcon-completedIcon" /> : <div className="QontoStepIcon-circle" />}
    </QontoStepIconRoot>
  );
}

// ----------------------------------------------------------------------

function AddVehicle() {
  const { onClose } = useDroidDialog();

  const [activeStep, setActiveStep] = useState(0);
  const [vehicle, setVehicle] = useState({ status: true, data: {} });

  const [files, setFiles] = useState([]);

  const [loadingSetUp, setLoadingSetUp] = useState({ show: false, status: 'warning', message: 'message' });

  const [features, setFeatures] = useState([
    { checked: false, name: 'Bluetooth' },
    { checked: false, name: 'Automatic gearbox' },
    { checked: false, name: 'Autopilot' },
    { checked: false, name: 'USB input' },
    { checked: false, name: 'Electric' },
    { checked: false, name: 'GPS' }
  ]);

  const [map, setMap] = useState({
    address: '',
    city: '',
    area: '',
    state: '',
    placeId: '',
    zoom: 15,
    height: 300,
    mapPosition: {
      lat: 0,
      lng: 0
    },
    markerPosition: {
      lat: 0,
      lng: 0
    }
  });

  const [monday, setMonday] = React.useState({
    timeType: 'All Day',
    dayStart: 'Mon Dec 20 2021 00:00:00',
    dayEnd: 'Mon Dec 20 2021 00:00:00',
    label: 'Monday'
  });
  const [tuesday, setTuesday] = React.useState({
    timeType: 'All Day',
    dayStart: 'Mon Dec 20 2021 00:00:00',
    dayEnd: 'Mon Dec 20 2021 00:00:00',
    label: 'Tuesday'
  });
  const [wednesday, setWednesday] = React.useState({
    timeType: 'All Day',
    dayStart: 'Mon Dec 20 2021 00:00:00',
    dayEnd: 'Mon Dec 20 2021 00:00:00',
    label: 'Wednesday'
  });
  const [thursday, setThursday] = React.useState({
    timeType: 'All Day',
    dayStart: 'Mon Dec 20 2021 00:00:00',
    dayEnd: 'Mon Dec 20 2021 00:00:00',
    label: 'Thursday'
  });
  const [friday, setFriday] = React.useState({
    timeType: 'All Day',
    dayStart: 'Mon Dec 20 2021 00:00:00',
    dayEnd: 'Mon Dec 20 2021 00:00:00',
    label: 'Friday'
  });
  const [saturday, setSaturday] = React.useState({
    timeType: 'All Day',
    dayStart: 'Mon Dec 20 2021 00:00:00',
    dayEnd: 'Mon Dec 20 2021 00:00:00',
    label: 'Saturday'
  });
  const [sunday, setSunday] = React.useState({
    timeType: 'All Day',
    dayStart: 'Mon Dec 20 2021 00:00:00',
    dayEnd: 'Mon Dec 20 2021 00:00:00',
    label: 'Sunday'
  });

  const getVehicleIcon = (name) => {
    let vehicleType = { label: 'Car', name: '2-AXLE-RIGID BODY', icon: <DirectionsCarFilled /> };
    const icons = [
      { label: 'Bicycle', name: 'Bicycle', icon: <PedalBike /> },
      { label: 'Motorbike', name: 'Motorbike', icon: <TwoWheeler /> },
      { label: 'Motorbike', name: '2 WHEEL', icon: <TwoWheeler /> },
      { label: 'Car', name: 'Car', icon: <DirectionsCarFilled /> },
      { label: 'Car', name: '2 AXLE RIGID BODY', icon: <DirectionsCarFilled /> },
      { label: '', name: 'Campervan', icon: <DirectionsCar /> },
      { label: '', name: 'ElectricScooter', icon: <ElectricScooter /> },
      { label: '', name: 'ElectricCar', icon: <ElectricCar /> },
      { label: '', name: 'ElectricBike', icon: <ElectricBike /> },
      { label: '', name: 'ElectricRickshaw', icon: <ElectricRickshaw /> },
      { label: '', name: 'Moped', icon: <Moped /> }
    ];
    icons.map((item) => {
      if (item.name === name) {
        vehicleType = item;
        return item;
      }
    });

    return vehicleType;
  };

  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const RegisterSchema = Yup.object().shape({
    reg: Yup.string().required('reg required')
  });

  //MA68HXM

  const formik = useFormik({
    initialValues: {
      vehicleType: '',
      reg: 'MA68HXM',
      make: '',
      model: '',
      fuelType: '',
      year: '',
      mileage: '',
      hourlyRates: '',
      dailyRates: '',
      description: '',
      freeCancellation: true,
      cancellationPercentage: '',
      cancellationDescription: '',
      images: [],
      availability: [],
      features: [],
      location: {
        address: '',
        city: '',
        area: '',
        state: '',
        placeId: '',
        lat: '',
        lng: ''
      }
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, { setErrors, setSubmitting, setValues }) => {
      try {
        console.log('values: ', values);
        await CreateVehicle();

        setLoadingSetUp({
          show: false,
          status: 'warning',
          message: 'Uploaded Vehicle Data'
        });

        enqueueSnackbar('Vehicle created successfully', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Close />
            </MIconButton>
          )
        });

        if (isMountedRef.current) {
          setSubmitting(false);
        }

        onClose();
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { values, errors, touched, handleSubmit, getFieldProps, isSubmitting, setValues } = formik;

  const [CreateVehicle] = useMutation(REGISTER_VEHICLE, { variables: { vehicle: values } });

  const [VehicleDetailsByReg, { loading }] = useLazyQuery(GET_VEHICLE_DETAILS, { variables: { reg: values.reg } });

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNextDetails = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const getVehicleDetails = () => {
    VehicleDetailsByReg().then((res) => {
      const data = res.data.VehicleDetailsByReg;

      setValues({
        ...values,
        vehicleType: data.WheelPlan,
        // reg: data.Registration,
        make: data.Make,
        model: data.Model,
        fuelType: data.Fuel,
        year: data.Year
      });

      setVehicle({ status: true, data: data });
    });
  };

  const vehicleDetails = (
    <>
      {!vehicle.status ? (
        <>
          <TextField
            fullWidth
            autoComplete="reg"
            sx={{ mt: 10 }}
            type="text"
            label="Registration/License Plate"
            {...getFieldProps('reg')}
            error={Boolean(touched.reg && errors.reg)}
            helperText={touched.reg && errors.reg}
          />

          <LoadingButton
            variant="outlined"
            loading={loading}
            size="large"
            style={{ marginTop: '40px' }}
            onClick={getVehicleDetails}
          >
            Check for Vehicles
          </LoadingButton>
        </>
      ) : (
        <>
          <Stack direction="row" sx={{ my: 1 }} spacing={2}>
            <Box sx={{ maxWidth: '250px', border: '4px solid', borderRadius: '7px' }}>
              <Grid container justifyContent="flex-start" sx={{ bgcolor: '#fbdb00' }}>
                <Grid
                  item
                  xs={2}
                  container
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ height: '50px', bgcolor: '#0f4290' }}
                >
                  <Grid item xs={12} sx={{ p: 0.5 }}>
                    <img src={img} alt="gb" height="10px" />
                  </Grid>
                  <Grid item xs={12} justifyContent="center" alignItems="flex-start" sx={{ height: '40px', p: 0.5 }}>
                    <Typography sx={{ color: 'white' }}>GB</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={10} container justifyContent="center" alignItems="center">
                  <Typography variant="h4">{values.reg}</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ maxWidth: '250px', display: 'flex' }}>
              <Button
                variant="outlined"
                startIcon={getVehicleIcon(values.vehicleType).icon}
                onClick={() => setVehicle({ status: false, data: {} })}
              >
                {getVehicleIcon(values.vehicleType).label} (Change)
              </Button>
            </Box>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Make"
              {...getFieldProps('make')}
              error={Boolean(touched.make && errors.make)}
              helperText={touched.make && errors.make}
            />

            <TextField
              fullWidth
              label="Model"
              {...getFieldProps('model')}
              error={Boolean(touched.model && errors.model)}
              helperText={touched.model && errors.model}
            />
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Fuel Type"
              {...getFieldProps('fuelType')}
              error={Boolean(touched.fuelType && errors.fuelType)}
              helperText={touched.fuelType && errors.fuelType}
            />

            <TextField
              fullWidth
              label="Year"
              {...getFieldProps('year')}
              error={Boolean(touched.year && errors.year)}
              helperText={touched.year && errors.year}
            />
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">Hourly Rates</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                label="Hourly Rates"
                {...getFieldProps('hourlyRates')}
                error={Boolean(touched.hourlyRates && errors.hourlyRates)}
                helperText={touched.hourlyRates && errors.hourlyRates}
                startAdornment={<InputAdornment position="start">£</InputAdornment>}
              />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">Daily Rates</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                label="Daily Rates"
                {...getFieldProps('dailyRates')}
                error={Boolean(touched.dailyRates && errors.dailyRates)}
                helperText={touched.dailyRates && errors.dailyRates}
                startAdornment={<InputAdornment position="start">£</InputAdornment>}
              />
            </FormControl>
          </Stack>

          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Mileage included</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Mileage included"
              {...getFieldProps('mileage')}
              error={Boolean(touched.mileage && errors.mileage)}
              helperText={touched.mileage && errors.mileage}
              endAdornment={<InputAdornment position="end">price(km)</InputAdornment>}
            />
          </FormControl>
        </>
      )}
    </>
  );

  const vehicleDetailsAction = (
    <>
      <Button disabled sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="contained" disabled={!vehicle.status} onClick={handleNextDetails} sx={{ mr: 1 }}>
        Next
      </Button>
    </>
  );

  const handleNextLocation = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const setUpLocation = <>{/*<LocationBox map={map} setMap={setMap} />*/}</>;

  const LocationSetUpAction = (
    <>
      <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="contained" onClick={handleNextLocation} sx={{ mr: 1 }}>
        Next
      </Button>
    </>
  );

  const handleNextFeatures = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const setUpFeatures = (
    <>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        fullWidth
        multiline
        rows={3}
        {...getFieldProps('description')}
        error={Boolean(touched.description && errors.description)}
        helperText={touched.description && errors.description}
      />
      <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
        Select Vehicle Feature
      </Typography>
      <FormGroup>
        <Grid container justifyContent="center" spacing={2}>
          <AddFeatures features={features} setFeatures={setFeatures} />
        </Grid>
      </FormGroup>
    </>
  );

  const accountFeatures = (
    <>
      <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="contained" onClick={handleNextFeatures} sx={{ mr: 1 }}>
        Next
      </Button>
    </>
  );

  const handleNextPolicy = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const setUpPolicy = (
    <>
      <Stack alignItems="center" direction="row" spacing={0.5}>
        <Checkbox
          name="freeCancellation"
          checked={values.freeCancellation}
          {...getFieldProps('freeCancellation')}
          error={Boolean(touched.freeCancellation && errors.freeCancellation)}
          helperText={touched.freeCancellation && errors.freeCancellation}
        />
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          Accept Free cancellation up to 24hrs before the trip start
        </Typography>
      </Stack>
      {values.freeCancellation && (
        <Typography variant="body1" fontWeight="light" sx={{ color: 'text.secondary' }}>
          * When booking a vehicle on the Vumah platform we allow free cancellations up to 24hrs before the trip start
          by default to allow flexibility for our guests. If you choose to cancel for any reason within the 24 hours
          period of the trip start, the guest will be subject to a late cancellation fee and will be refunded the
          remainder that is on hold.
        </Typography>
      )}
      {!values.freeCancellation && (
        <>
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">Cancellation Percentage</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              label="Cancellation Percentage (%)"
              {...getFieldProps('cancellationPercentage')}
              error={Boolean(touched.cancellationPercentage && errors.cancellationPercentage)}
              helperText={touched.cancellationPercentage && errors.cancellationPercentage}
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="Policy Description"
            fullWidth
            multiline
            rows={5}
            {...getFieldProps('cancellationDescription')}
            error={Boolean(touched.cancellationDescription && errors.cancellationDescription)}
            helperText={touched.cancellationDescription && errors.cancellationDescription}
          />{' '}
        </>
      )}
    </>
  );

  const accountPolicy = (
    <>
      <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="contained" onClick={handleNextPolicy} sx={{ mr: 1 }}>
        Next
      </Button>
    </>
  );

  const handleNextUpLoadImages = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const setUpUpLoadImages = (
    <>
      <UploadImages files={files} setFiles={setFiles} />
    </>
  );

  const accountUpLoadImages = (
    <>
      <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="contained" onClick={handleNextUpLoadImages} sx={{ mr: 1 }}>
        Review
      </Button>
    </>
  );

  const setUpAvailability = (
    <>
      <Availability
        monday={monday}
        tuesday={tuesday}
        wednesday={wednesday}
        thursday={thursday}
        friday={friday}
        saturday={saturday}
        sunday={sunday}
        setMonday={setMonday}
        setTuesday={setTuesday}
        setWednesday={setWednesday}
        setThursday={setThursday}
        setFriday={setFriday}
        setSaturday={setSaturday}
        setSunday={setSunday}
      />
    </>
  );

  const handleSetData = async () => {
    setLoadingSetUp({
      show: true,
      status: 'warning',
      message: 'Arranging Vehicle Data'
    });

    const vehicleFeatures = [];
    features.map((feature) => {
      if (feature.checked) vehicleFeatures.push({ name: feature.name });
    });

    const loc = {
      ...values.location,
      address: map.address,
      city: map.city,
      area: map.area,
      state: map.area,
      placeId: map.placeId,
      lat: map.markerPosition.lat,
      lng: map.markerPosition.lng
    };

    setLoadingSetUp({
      show: true,
      status: 'warning',
      message: 'Uploading Vehicle Images'
    });

    const vehicleAvailability = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

    await UploadFileImages(files).then((uploadedFiles) => {
      setValues({
        ...values,
        images: uploadedFiles,
        features: vehicleFeatures,
        availability: vehicleAvailability,
        location: loc
      });

      setLoadingSetUp({
        show: false,
        status: 'success',
        message: 'Message'
      });

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    });
  };

  const accountAvailability = (
    <>
      <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
        Back
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="contained" onClick={handleSetData} sx={{ mr: 1 }}>
        Next
      </Button>
    </>
  );

  const AddVehicle = (
    <>
      <Stack direction="row" sx={{ my: 1 }} spacing={2}>
        <Box sx={{ maxWidth: '250px', border: '4px solid', borderRadius: '7px' }}>
          <Grid container justifyContent="flex-start" sx={{ bgcolor: '#fbdb00' }}>
            <Grid
              item
              xs={2}
              container
              justifyContent="flex-start"
              alignItems="center"
              sx={{ height: '50px', bgcolor: '#0f4290' }}
            >
              <Grid item xs={12} sx={{ p: 0.5 }}>
                <img src={img} alt="gb" height="10px" />
              </Grid>
              <Grid item xs={12} justifyContent="center" alignItems="flex-start" sx={{ height: '40px', p: 0.5 }}>
                <Typography sx={{ color: 'white' }}>GB</Typography>
              </Grid>
            </Grid>
            <Grid item xs={10} container justifyContent="center" alignItems="center">
              <Typography variant="h4">{values.reg}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ maxWidth: '250px', display: 'flex' }}>
          <Button
            variant="outlined"
            startIcon={getVehicleIcon(values.vehicleType).icon}
            onClick={() => setVehicle({ status: false, data: {} })}
          >
            {getVehicleIcon(values.vehicleType).label} (Change)
          </Button>
        </Box>
      </Stack>
      <Card>
        <CardContent style={{ padding: 0 }}>
          <Box sx={{ width: '100%' }}>
            <CarouselVehicles items={files} />
          </Box>
        </CardContent>
      </Card>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ pt: 2 }}>
        <TextField
          fullWidth
          label="Make"
          {...getFieldProps('make')}
          error={Boolean(touched.make && errors.make)}
          helperText={touched.make && errors.make}
        />

        <TextField
          fullWidth
          label="Model"
          {...getFieldProps('model')}
          error={Boolean(touched.model && errors.model)}
          helperText={touched.model && errors.model}
        />
      </Stack>
      <Stack sx={{ pt: 3, pb: 1 }}>
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Create Vehicles
        </LoadingButton>
      </Stack>
    </>
  );

  function getStepContent(step) {
    switch (step) {
      case 0:
        return vehicleDetails;
      case 1:
        return setUpLocation;
      case 2:
        return setUpFeatures;
      case 3:
        return setUpPolicy;
      case 4:
        return setUpUpLoadImages;
      case 5:
        return setUpAvailability;
      default:
        return AddVehicle;
    }
  }

  function getStepActions(step) {
    switch (step) {
      case 0:
        return vehicleDetailsAction;
      case 1:
        return LocationSetUpAction;
      case 2:
        return accountFeatures;
      case 3:
        return accountPolicy;
      case 4:
        return accountUpLoadImages;
      case 5:
        return accountAvailability;
      default:
        return AddVehicle;
    }
  }

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, display: 'flex', overflow: 'hidden' }}>
            <Stack spacing={1} sx={{ flexGrow: 1, width: '550px' }}>
              {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
              {loadingSetUp.show && (
                <Alert severity={loadingSetUp.status}>
                  <CircularProgress />
                  {loadingSetUp.message}
                </Alert>
              )}

              {activeStep === STEPS.length ? (
                <>{AddVehicle}</>
              ) : (
                <>
                  <Scrollbar sx={{ p: 1, height: '510px' }}>
                    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                      {STEPS.map((label) => (
                        <Step key={label}>
                          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    <Paper
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2,
                        minHeight: 300
                      }}
                    >
                      <Stack spacing={3} sx={{ width: '100%' }}>
                        {getStepContent(activeStep)}
                      </Stack>
                    </Paper>
                  </Scrollbar>

                  <Box sx={{ textAlign: 'right', display: 'flex' }}>{getStepActions(activeStep)}</Box>
                </>
              )}
            </Stack>
          </Box>
        </Form>
      </FormikProvider>
    </>
  );
}

export default AddVehicle;
