import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Container,
  useTheme,
  Stack,
  CardActionArea,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent
} from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../assets/img/logo-main.png';

import useAuth from '../../hooks/useAuth';
import * as React from 'react';
import { Close, Menu, Person } from '@mui/icons-material';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useState } from 'react';
import AddVehicle from '../../pages/earning/AddVehicle';
import LoginForm from '../../layouts/authGuard/LoginForm';
import RegisterForm from '../../layouts/authGuard/RegisterForm';
import HeaderDropDown from './HeaderDropDown';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const theme = useTheme();

  const { pathname } = useLocation();
  const isChat = pathname === '/bookings' || pathname === '/chat';

  return (
    <AppBar
      sx={{
        p: 1,
        bgcolor: theme.palette.mode === 'dark' ? '#28293d' : '#f8f9fa',
        boxShadow: isChat ? theme.customShadows.z1 : theme.customShadows.z8
      }}
    >
      <ToolbarStyle disableGutters sx={{ height: { md: APP_BAR_DESKTOP - 38 } }}>
        <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <RouterLink to="/">
            <img src={Logo} height="70px" alt="logo" />
          </RouterLink>

          <Box sx={{ flexGrow: 1 }} />

          <Button
            color="primary"
            variant="contained"
            size="large"
            omponent={RouterLink}
            to="/landing-page"
            sx={{ borderRadius: '100px', mx: 1, color: 'white', '&:hover': { color: 'white' } }}
          >
            Become a host
          </Button>

          <Button
            color="primary"
            variant="text"
            size="large"
            component={RouterLink}
            to="/about-us"
            sx={{
              borderRadius: '100px',
              mr: 2,
              boxShadow: theme.customShadows.z1,
              color: 'primary',
              '&:hover': { color: 'primary.main' }
            }}
          >
            About Us
          </Button>

          <HeaderDropDown />
        </Container>
      </ToolbarStyle>

      <ToolbarShadowStyle />
    </AppBar>
  );
}
