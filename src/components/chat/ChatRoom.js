import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Drawer,
  Divider,
  Button,
  IconButton,
  useMediaQuery,
  Stack,
  Typography,
  Tooltip,
  ListItemText,
  Menu,
  MenuItem,
  CardActionArea,
  Chip,
  Grid,
  CardContent,
  Card,
  CardHeader,
  Tab,
  Tabs
} from '@mui/material';
// components
import { MHidden } from '../@material-extend';
//
import ChatRoomAttachment from './ChatRoomAttachment';
import ChatRoomOneParticipant from './ChatRoomOneParticipant';
import ChatRoomGroupParticipant from './ChatRoomGroupParticipant';
import Scrollbar from '../Scrollbar';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import Face from '../../assets/img/face.jpg';
import { Close, FilterListRounded, VpnKey } from '@mui/icons-material';
import FaceIcon from '@mui/icons-material/Face';
import CarouselVehiclesView from '../VehicleCarousel/CarouselVehiclesView';
import UpdatePhoneNumberModal from '../../pages/account/UpdatePhoneNumberModal';
import useDroidDialog from '../../hooks/useDroidDialog';
import ChangeBooking from '../../pages/requestBooking/ChangeBooking';
import CancelBooking from '../../pages/requestBooking/CancelBooking';
import { capitalCase } from 'change-case';
import bellFill from '@iconify/icons-eva/bell-fill';
import moment from 'moment';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 400;

const ToggleButtonStyle = styled((props) => <IconButton disableRipple {...props} />)(({ theme }) => ({
  right: 0,
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  top: theme.spacing(1),
  boxShadow: theme.customShadows.z8,
  backgroundColor: theme.palette.background.paper,
  border: `solid 1px ${theme.palette.divider}`,
  borderRight: 0,
  borderRadius: `12px 0 0 12px`,
  transition: theme.transitions.create('all'),
  '&:hover': {
    backgroundColor: theme.palette.background.neutral
  }
}));

// ----------------------------------------------------------------------

export default function ChatRoom({ contact }) {
  const { onOpen } = useDroidDialog();
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState('Booking Details');

  const [openSidebar, setOpenSidebar] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    if (isMobile) {
      return handleCloseSidebar();
    }
    return handleOpenSidebar();
  }, [isMobile]);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const handleToggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const getChipColor = (s) => {
    if (s === 'Requested') return 'warning';
    if (s === 'Ongoing') return 'info';
    if (s === 'Completed') return 'success';
    if (s === 'Declined') return 'error';
    if (s === 'Canceled') return 'error';

    return 'warning';
  };

  const createBooking = (booking) => {
    return (
      <>
        <CardActionArea
          sx={{ px: 1, borderRadius: '8px', py: 1, border: '1px', borderStyle: 'solid', borderColor: 'primary.main' }}
          onClick={() => {}}
        >
          <Stack alignItems="center" direction="row" spacing={0.5} sx={{ width: '100%' }}>
            <img src={booking.vehicleRented.images[0]} style={{ width: '80px', borderRadius: '10px' }} alt="Vehicle" />
            <Stack alignItems="flex-start" direction="column" spacing={0.5} sx={{ width: '100%' }}>
              <Stack
                alignItems="center"
                justifyContent="space-between"
                direction="row"
                spacing={0.5}
                sx={{ width: '100%' }}
              >
                <Typography variant="subtitle1">
                  {booking.vehicleRented.make} - ( {booking.vehicleRented.reg} )
                </Typography>
                <Chip variant="outlined" label={`status: ${booking.status}`} color={getChipColor(booking.status)} />
              </Stack>
              <Stack
                alignItems="center"
                justifyContent="space-between"
                direction="row"
                spacing={0.5}
                sx={{ width: '100%' }}
              >
                <Typography variant="body2">{moment(booking.endTime).format('dd/MM/yy(hh:mm)')}</Typography>
                <Typography variant="body2">-</Typography>
                <Typography variant="body2">{moment(booking.endTime).format('dd/MM/yy(hh:mm)')}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardActionArea>
      </>
    );
  };

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const bookingsView = (
    <>
      <Stack alignItems="center" direction="column" spacing={0.5} sx={{ p: 2 }}>
        <Stack alignItems="center" direction="column" spacing={1} sx={{ width: '100%' }}>
          {contact.bookings.map((booking, index) => createBooking(booking))}
        </Stack>
      </Stack>
    </>
  );

  const bookingDetailsView = (booking) => (
    <>
      <Stack alignItems="center" direction="column" spacing={0.5} sx={{ p: 3 }}>
        <Stack alignItems="center" direction="column" spacing={0.5} sx={{ pt: 1, width: '100%' }}>
          <Stack alignItems="flex-start" direction="row" spacing={0.5} sx={{ width: '100%', pb: 3 }}>
            <img src={booking.vehicleRented.images[0]} style={{ width: '80px', borderRadius: '10px' }} alt="Vehicle" />
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              direction="row"
              spacing={0.5}
              sx={{ width: '100%' }}
            >
              <Typography variant="subtitle1">
                {booking.vehicleRented.make} - ( {booking.vehicleRented.reg} )
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
          <Card>
            <CardHeader title="Booking Costs" />
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={10}>
                  <Typography variant="body2">Vehicle Cost</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="subtitle2">£120</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body2">Service Cost</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="subtitle2">£20</Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="body2">Total Cost</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="subtitle2">£140</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            spacing={0.5}
            sx={{ width: '100%', pt: 3 }}
          >
            <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{ borderRadius: '100px' }}
              onClick={() => onOpen('Cancel Booking', <CancelBooking booking={booking} />)}
            >
              Cancel Booking
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ borderRadius: '100px', color: '#fff' }}
              onClick={() => onOpen('Change Booking details', <ChangeBooking booking={booking} />)}
            >
              Change Booking
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <ToggleButtonStyle
        onClick={handleToggleSidebar}
        sx={{
          ...(openSidebar && !isMobile && { right: DRAWER_WIDTH })
        }}
      >
        <Icon width={16} height={16} icon={openSidebar ? arrowIosForwardFill : arrowIosBackFill} />
      </ToggleButtonStyle>

      <MHidden width="lgUp">
        <Drawer
          anchor="right"
          ModalProps={{ keepMounted: true }}
          open={openSidebar}
          onClose={handleCloseSidebar}
          sx={{
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH
            }
          }}
        >
          <Stack spacing={2} sx={{ pt: 4 }}>
            <Box sx={{ px: 2 }}>
              <Tabs
                value={currentTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={handleChangeTab}
              >
                <Tab disableRipple label={capitalCase('Booking Details')} value="Booking Details" />
                <Tab disableRipple label={capitalCase('Bookings List')} value="Bookings List" />
              </Tabs>
            </Box>
            {currentTab === 'Booking Details'
              ? bookingDetailsView(contact.bookings[contact.bookings.length - 1])
              : bookingsView}
          </Stack>
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open={openSidebar}
          anchor="right"
          variant="persistent"
          sx={{
            height: 1,
            width: DRAWER_WIDTH,
            transition: theme.transitions.create('width'),
            ...(!openSidebar && { width: '0px' }),
            '& .MuiDrawer-paper': {
              position: 'static',
              width: DRAWER_WIDTH
            }
          }}
        >
          <Stack spacing={2} sx={{ pt: 4 }}>
            <Box sx={{ px: 2 }}>
              <Tabs
                value={currentTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={handleChangeTab}
              >
                <Tab disableRipple label={capitalCase('Booking Details')} value="Booking Details" />
                <Tab disableRipple label={capitalCase('Bookings List')} value="Bookings List" />
              </Tabs>
            </Box>
            {currentTab === 'Booking Details'
              ? bookingDetailsView(contact.bookings[contact.bookings.length - 1])
              : bookingsView}
          </Stack>
        </Drawer>
      </MHidden>
    </Box>
  );
}
