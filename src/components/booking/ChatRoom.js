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
  Paper,
  Grid,
  CardContent,
  Card,
  CardHeader
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
import { Close, FilterListRounded } from '@mui/icons-material';
import FaceIcon from '@mui/icons-material/Face';
import CarouselVehiclesView from '../VehicleCarousel/CarouselVehiclesView';
import UpdatePhoneNumberModal from '../../pages/account/UpdatePhoneNumberModal';
import useDroidDialog from '../../hooks/useDroidDialog';
import ChangeBooking from '../../pages/requestBooking/ChangeBooking';
import CancelBooking from '../../pages/requestBooking/CancelBooking';

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

  const [bookingSelected, setBookingSelected] = useState({ bookingSelected: {}, show: false });

  const [openSidebar, setOpenSidebar] = useState(true);
  // const [showInfo, setShowInfo] = useState(true);
  // const [selectUser, setSelectUser] = useState(null);
  // const [showAttachment, setShowAttachment] = useState(true);
  // const [showParticipants, setShowParticipants] = useState(true);

  const [isOpenList, setOpenList] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isOpen, setOpen] = useState(null);

  const handleClickListItem = (event) => {
    setOpenList(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenList(null);
  };

  const OPTIONS = ['All', 'Requests', 'Ongoing', 'Complete', 'Declined'];

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  // const isGroup = participants.length > 1;

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

  // const renderContent = (
  //   <Scrollbar sx={{ p: 1, height: 1 }}>
  //     {isGroup ? (
  //       <ChatRoomGroupParticipant
  //         selectUserId={selectUser}
  //         participants={participants}
  //         isCollapse={showParticipants}
  //         onShowPopupUserInfo={(participantId) => setSelectUser(participantId)}
  //         onCollapse={() => setShowParticipants((prev) => !prev)}
  //       />
  //     ) : (
  //       <div>
  //         <ChatRoomOneParticipant
  //           participants={participants}
  //           isCollapse={showInfo}
  //           onCollapse={() => setShowInfo((prev) => !prev)}
  //         />
  //       </div>
  //     )}
  //     <Divider />
  //
  //     <ChatRoomAttachment
  //       conversation={conversation}
  //       isCollapse={showAttachment}
  //       onCollapse={() => setShowAttachment((prev) => !prev)}
  //     />
  //   </Scrollbar>
  // );

  const bookingDetails = (
    <div className="booking-details-main" id="car-chat-page">
      <div className="add-member-header mb-2">
        <h2 style={{ fontWeight: '600' }}>Booking Details</h2>
      </div>
      <form>
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '5px', padding: '0 0 5px 0' }}>
          <div className="image-with-camera">
            <img src={Mercedes} style={{ width: '120px', borderRadius: '10px' }} />
            <i className="fas fa-camera" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
            <h5 className="my-button" style={{ fontWeight: '600' }}>
              Mercedes Benz 2018
            </h5>
            <p style={{ color: '#f67810', marginBottom: '10px', fontWeight: '500' }}>HL8 HXM</p>
          </div>
        </div>
        <hr />
        <p className="my-button" style={{ padding: '0 0 5px 0' }}>
          Checked in: <span style={{ color: '#f67810', fontWeight: '500' }}>10 April 2021 - 06:30AM</span>
        </p>
        <p className="my-button" style={{ padding: '0 0 10px 0' }}>
          Return Date: <span style={{ color: '#f67810', fontWeight: '500' }}>14 April 2021 - 07:00PM</span>
        </p>
        <p className="my-button" style={{ padding: '0 0 10px 0' }}>
          Booked for: <span style={{ color: '#f67810', fontWeight: '500' }}>5 days</span>
        </p>

        <div className="add-member-header mb-1 mt-1">
          <h2 style={{ fontWeight: '600' }}>Payment Details</h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', width: '200px' }}>
          <p className="my-button" style={{ padding: '0 30px 0 0' }}>
            Amount:{' '}
            <span style={{ color: '#f67810', fontWeight: '500', width: '70px', display: 'inline-block' }}>£25.99</span>
          </p>
          <p className="my-button" style={{ padding: '0 30px 0 0' }}>
            Fees:{' '}
            <span style={{ color: '#f67810', fontWeight: '500', width: '70px', display: 'inline-block' }}>-£7</span>
          </p>
          <hr style={{ width: '200px', marginTop: '5px', marginBottom: '5px' }} />
          <p className="my-button" style={{ padding: '5px 30px 15px 0', fontWeight: '600' }}>
            Total:{' '}
            <span style={{ color: '#f67810', fontWeight: '600', width: '70px', display: 'inline-block' }}>£18.99</span>
          </p>
        </div>

        <div className="mt-auto text-center">
          <button className="common-btn" type="button">
            Request Extra-Time
          </button>
          <button
            className="btn btn-light my-button"
            style={{ textDecoration: 'underline', marginLeft: '10px' }}
            type="button"
          >
            Break Down
          </button>
        </div>

        <div className="mt-auto text-center">
          <Button variant="outlined" size="large" fullWidth sx={{ my: 2 }}>
            Cancel Booking
          </Button>
        </div>
      </form>
    </div>
  );

  const getChipColor = (s) => {
    if (s === 'Requested') return 'warning';
    if (s === 'Ongoing') return 'info';
    if (s === 'Completed') return 'success';
    if (s === 'Declined') return 'error';
    if (s === 'Canceled') return 'error';

    return 'warning';
  };

  const createBooking = (status) => {
    return (
      <>
        <CardActionArea
          sx={{ px: 1, borderRadius: '8px', py: 1, border: '1px', borderStyle: 'solid', borderColor: 'primary.main' }}
          onClick={() => {
            setBookingSelected({ bookingSelected: {}, show: true });
          }}
        >
          <Stack alignItems="center" direction="row" spacing={0.5} sx={{ width: '100%' }}>
            <img src={Mercedes} style={{ width: '80px', borderRadius: '10px' }} alt="Vehicle" />
            <Stack alignItems="flex-start" direction="column" spacing={0.5} sx={{ width: '100%' }}>
              <Stack
                alignItems="center"
                justifyContent="space-between"
                direction="row"
                spacing={0.5}
                sx={{ width: '100%' }}
              >
                <Typography variant="subtitle1">Sinis (Maked)</Typography>
                <Chip variant="outlined" label={`status: ${status}`} color={getChipColor(status)} />
              </Stack>
              <Stack
                alignItems="center"
                justifyContent="space-between"
                direction="row"
                spacing={0.5}
                sx={{ width: '100%' }}
              >
                <Typography variant="body2">1/10/22(01:29)</Typography>
                <Typography variant="body2">-</Typography>
                <Typography variant="body2">6/10/22(01:29)</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardActionArea>
      </>
    );
  };

  const bookingsView = (
    <>
      <Stack alignItems="center" direction="column" spacing={0.5} sx={{ p: 3 }}>
        <Stack alignItems="center" justifyContent="space-between" direction="row" spacing={0.5} sx={{ width: '100%' }}>
          <Typography variant="h6">Bookings</Typography>
          <>
            <Tooltip title="Filter list">
              <Button variant="outlined" onClick={handleClickListItem} endIcon={<FilterListRounded />}>
                <ListItemText primary="" secondary={OPTIONS[selectedIndex]} />
              </Button>
            </Tooltip>
            <Menu keepMounted id="lock-menu" anchorEl={isOpenList} onClose={handleClose} open={Boolean(isOpenList)}>
              {OPTIONS.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </>
        </Stack>
        <Stack alignItems="center" direction="column" spacing={0.5} sx={{ pt: 3, width: '100%' }}>
          {createBooking('Completed')}
          {createBooking('Declined')}
          {createBooking('Ongoing')}
          {createBooking('Requested')}
        </Stack>
      </Stack>
    </>
  );

  const bookingDetailsView = (
    <>
      <Stack alignItems="center" direction="column" spacing={0.5} sx={{ p: 3 }}>
        <Stack alignItems="center" justifyContent="space-between" direction="row" spacing={0.5} sx={{ width: '100%' }}>
          <Typography variant="h6">Booking Details</Typography>
          <Tooltip title="Close window">
            <IconButton
              onClick={() => {
                setBookingSelected({ bookingSelected: {}, show: false });
              }}
            >
              <Close />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack alignItems="center" direction="column" spacing={0.5} sx={{ pt: 1, width: '100%' }}>
          {/*<Card sx={{ maxWidth: '360px' }}>*/}
          {/*  <CardContent style={{ padding: 0 }}>*/}
          {/*    <Box sx={{ width: '100%' }}>*/}
          {/*      <CarouselVehiclesView />*/}
          {/*    </Box>*/}
          {/*  </CardContent>*/}
          {/*</Card>*/}
          {/*<Stack*/}
          {/*  alignItems="center"*/}
          {/*  justifyContent="space-between"*/}
          {/*  direction="row"*/}
          {/*  spacing={0.5}*/}
          {/*  sx={{ width: '100%', py: 1 }}*/}
          {/*>*/}
          {/*  <Typography variant="subtitle1">Sinis (Maked)</Typography>*/}
          {/*  <Chip variant="outlined" label="Status: Ongoing" color="info" />*/}
          {/*</Stack>*/}
          <Stack alignItems="flex-start" direction="row" spacing={0.5} sx={{ width: '100%', pb: 3 }}>
            <img src={Mercedes} style={{ width: '80px', borderRadius: '10px' }} alt="Vehicle" />
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              direction="row"
              spacing={0.5}
              sx={{ width: '100%' }}
            >
              <Typography variant="subtitle1">Sinis (Maked)</Typography>
              <Chip variant="outlined" label="Status: Requested" color="warning" />
            </Stack>
          </Stack>
          <Grid container sx={{ pb: 3 }}>
            <Grid item xs={12} sm={5}>
              <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                <Typography variant="subtitle2">Check in</Typography>
                <Typography variant="body2">Wed Jan 2022 - 01:29</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Divider orientation="vertical" flexItem style={{ height: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Stack alignItems="flex-start" direction="column" spacing={0.5}>
                <Typography variant="subtitle2">Check out</Typography>
                <Typography variant="body2">Wed Jan 2022 - 01:29</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Card>
            <CardHeader title="Booking Costs" />
            <CardContent>
              <Grid container spacing={1}>
                {/*<Grid item xs={12}>*/}
                {/*  <Typography variant="subtitle1">Total Booking Cost</Typography>*/}
                {/*</Grid>*/}
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
              onClick={() => onOpen('Cancel Booking', <CancelBooking />)}
            >
              Cancel Booking
            </Button>
            <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ borderRadius: '100px', color: '#fff' }}
              onClick={() => onOpen('Change Booking details', <ChangeBooking />)}
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
          {bookingSelected.show ? bookingDetailsView : bookingsView}
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
          {bookingSelected.show ? bookingDetailsView : bookingsView}
        </Drawer>
      </MHidden>
    </Box>
  );
}
