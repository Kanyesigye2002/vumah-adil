import React from 'react';
import { ArrowBackIos } from '@mui/icons-material';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link as RouterLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotionContainer, varBounceIn } from '../../components/animate';
import { ComingSoonIllustration } from '../../assets';
import VehicleCard from '../../components/Cards/VehicleCard';
import { useQuery } from '@apollo/client';
import { GET_USER_FAVORITES } from '../../graphql/Queries';
import LoadingScreen from '../../components/LoadingScreen';

function Favotites() {
  const { loading, error, data } = useQuery(GET_USER_FAVORITES);

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="flex-start" spacing={2} sx={{ py: 5 }}>
        <Grid item xs={12} container justifyContent="flex-start" alignContent="center">
          <Link to="/search" style={{ color: 'inherit', width: '100%', '&:hover': { textDecoration: 'underlined' } }}>
            <Typography>
              <ArrowBackIos sx={{ width: '12px', height: '14px', pb: '4px' }} /> Discover more vehicles
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Kanyesigye's Favorites</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="flex-start">
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {data !== undefined ? (
                <>
                  {data.GetUserFavorites !== undefined ? (
                    <>
                      {data.GetUserFavorites.length < 1 ? (
                        <>
                          <Container>
                            <MotionContainer initial="initial" open>
                              <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                                <motion.div variants={varBounceIn}>
                                  <Typography variant="body1">
                                    There are no Vehicles for display in favorites
                                  </Typography>
                                </motion.div>

                                <motion.div variants={varBounceIn}>
                                  <Button to="/search" size="large" variant="contained" component={RouterLink}>
                                    Discover Vehicles
                                  </Button>
                                </motion.div>
                              </Box>
                            </MotionContainer>
                          </Container>
                        </>
                      ) : (
                        <>
                          {data.GetUserFavorites.map((item, index) => (
                            <Grid key={index} spacing={2} item xs={12} sm={6} md={4} lg={4} xl={3}>
                              <VehicleCard vehicle={item} />
                            </Grid>
                          ))}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Container>
                        <MotionContainer initial="initial" open>
                          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                            <motion.div variants={varBounceIn}>
                              <Typography variant="body1">There are no Vehicles for display in favorites</Typography>
                            </motion.div>

                            <motion.div variants={varBounceIn}>
                              <Button to="/search" size="large" variant="contained" component={RouterLink}>
                                Discover Vehicles
                              </Button>
                            </motion.div>
                          </Box>
                        </MotionContainer>
                      </Container>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Container>
                    <MotionContainer initial="initial" open>
                      <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
                        <motion.div variants={varBounceIn}>
                          <Typography variant="body1">There are no Vehicles for display in favorites</Typography>
                        </motion.div>

                        <motion.div variants={varBounceIn}>
                          <Button to="/search" size="large" variant="contained" component={RouterLink}>
                            Discover Vehicles
                          </Button>
                        </motion.div>
                      </Box>
                    </MotionContainer>
                  </Container>
                </>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Favotites;
