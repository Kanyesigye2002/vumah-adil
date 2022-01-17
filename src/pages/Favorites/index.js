import React from 'react';
import { ArrowBackIos } from '@mui/icons-material';
import {
  Box, Button,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { Link as RouterLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotionContainer, varBounceIn } from '../../components/animate';
import { ComingSoonIllustration } from '../../assets';
import VehicleCard from '../../components/Cards/VehicleCard';

function Index(props) {

  const favorites = []

  return (
    <Container maxWidth='lg'>
      <Grid container justifyContent='flex-start' spacing={2} sx={{py: 5}}>
        <Grid item xs={12} container justifyContent='flex-start' alignContent='center'>
          <Link to='/search' style={{ color: 'inherit', width: '100%', '&:hover': { textDecoration: 'underlined' }}}>
             <Typography>
               <ArrowBackIos sx={{width: '12px', height: '14px', pb: '4px'}}/> Discover more vehicles
             </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h4'>Kanyesigye's Favorites</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent='flex-start'>
          {
            favorites.length < 1 ? <>
              <Container>
                <MotionContainer initial="initial" open>
                  <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>

                    <motion.div variants={varBounceIn}>
                      <ComingSoonIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
                    </motion.div>

                    <motion.div variants={varBounceIn}>
                      <Button to="/search" size="large" variant="contained" component={RouterLink}>
                        Discover Vehicles
                      </Button>
                    </motion.div>
                  </Box>
                </MotionContainer>
              </Container>
            </> : <>
              {favorites.map((item, index) => <Grid key={index} item xs={12} md={6} lg={4}>
                <VehicleCard vehicle={item}/>
              </Grid>)}
            </>
          }
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;