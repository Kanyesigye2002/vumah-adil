import React, { useEffect } from 'react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
// material
import { Box, Stack } from '@mui/material';



// Vumah Components
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import '../assets/styles/style.css';
import 'aos/dist/aos.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const PageVumah = forwardRef(({ children, title = 'Vumah', ...other }, ref) => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  }));

  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ContentStyle>
        {children}
      </ContentStyle>
    </Box>
  );
});

PageVumah.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default PageVumah;
