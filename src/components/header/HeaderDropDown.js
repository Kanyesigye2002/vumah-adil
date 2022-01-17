import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import LoginForm from '../../layouts/authGuard/LoginForm';
import RegisterForm from '../../layouts/authGuard/RegisterForm';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import { Menu, Person } from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import { useTheme } from '@mui/material/styles';
import useDroidDialog from '../../hooks/useDroidDialog';

function HeaderDropDown() {

  const { onOpen } = useDroidDialog();

  const { isAuthenticated, logout } = useAuth();
  const theme = useTheme();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropDown() {
    setDropdownOpen(prevState => !prevState);
  };


  const securedLinks = [
    { to: '/public-review', name: 'Profile' },
    { to: '/account', name: 'Account' },
    { to: '/notifications', name: 'Notifications' },
    { to: '/earning', name: 'Earnings' },
    { to: '/chat', name: 'Messages' },
    { to: '/chat', name: 'Bookings' },
    { to: 'favorites', name: 'Favourites' }
  ];

  return (
    <div className='header-nav d-flex align-items-center justify-content-center justify-content-md-end mb-2 mb-md-0'>
      <div className='d-flex align-items-center' onClick={toggleDropDown}>
        <div className='header-menu-btn'>
          <Dropdown isOpen={dropdownOpen} toggle={() => {
          }}>
            <DropdownToggle caret style={{ background: 'transparent' }}>
              <i className='fa fa-bars' />
            </DropdownToggle>
            <DropdownMenu className='dropdown-menu'>
              {!isAuthenticated ? <>
                <DropdownItem onClick={() => onOpen('', <><LoginForm /></>)}
                >
                  Login
                </DropdownItem>
                <DropdownItem onClick={() => onOpen('Set Up an account', <><RegisterForm /></>)}>
                  Sign Up
                </DropdownItem>
              </> : <>

                {securedLinks.map((item, index) =>
                  <DropdownItem style={{ display: 'flex' }} key={index}>
                    <Link to={item.to} style={{ color: 'inherit', width: '100%' }}>{item.name}</Link>
                  </DropdownItem>
                )}

              </>}
              <DropdownItem divider />

              <DropdownItem style={{ display: 'flex' }}><Link to='/support#1' style={{
                color: 'inherit',
                width: '100%'
              }}>Help</Link></DropdownItem>


              {isAuthenticated &&
              <>
                <DropdownItem style={{ display: 'flex' }} className='header-ads-manager'>
                  Ads Manager
                  <span className='header-coming-soon'>coming soon</span>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem style={{ display: 'flex' }}>
                  <Link
                    to='/'
                    onClick={() => {
                      logout();
                    }}
                    style={{
                      color: 'inherit',
                      width: '100%'
                    }}
                  >
                    Logout
                  </Link>
                </DropdownItem>

              </>
              }

            </DropdownMenu>
          </Dropdown>
        </div>

        <Button color='primary' variant='text' size='large' sx={{
          width: '95px',
          borderRadius: '100px',
          display: 'flex',
          p: '5px ',
          mr: 1,
          justifyContent:"space-around",
          boxShadow: theme.customShadows.z8,
          color: 'primary',
          '&:hover': { color: 'primary.main' }
        }}>
          <Menu color='primary' sx={{ fontWeight: 900 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '100px',
              backgroundColor: 'primary.main',
              '&:hover': {
                opacity: [0.9, 0.8, 0.7]
              }
            }}
          >
            <Person sx={{ color: 'black', fontWeight: 900 }} />
          </Box>
        </Button>
      </div>
    </div>

  );
}

export default HeaderDropDown;