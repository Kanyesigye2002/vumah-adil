
import { Outlet, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import MainNavbar from '../../components/header';
import MainFooter from '../../components/footer/footer';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

export default function MainLayout() {

  const { pathname } = useLocation();
  const isFooterHidden = pathname.startsWith('/chat') || pathname.startsWith('/search') || pathname.startsWith('/booking');

    return (
        <>
            <MainNavbar />
            <Stack sx={{mt: "80px"}}>
                <Outlet />
            </Stack>
          {!isFooterHidden && <MainFooter />}
        </>
    );
}
