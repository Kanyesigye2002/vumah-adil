import React from 'react';
import { Box, Card, CardActions, CardContent, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import CarouselVehicles from '../../pages/Favorites/CarouselVehicles';
import { FavoriteBorder, Share } from '@mui/icons-material';

function VehicleCard(props) {

  const feature = ['ATM', 'Electric', 'Bluetooth', 'Bluetooth', 'Bluetooth'];

  return (
    <>
      <Card>
        <CardContent sx={{p: 0}}>
          <CarouselVehicles />
        </CardContent>
        <CardActions disablespacing sx={{px: 3}}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              my: 2,
              marginRight: 'auto'
            }}
          >
            <Grid container justifyContent='flex-start'>
              <Grid item xs={12}>
                <Typography variant='h5' sx={{ mx: 0.5 }}>
                  Mercedes-Benz S-class 2017
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack direction='row' spacing={1} sx={{mt: 1}}>
                  {feature.map((item, index) => {
                    if (index < 3)
                      return <Chip key={index} label={item}/>
                    else if (index > 3)
                      return <div  key={index}/>
                    else
                      return <Chip key={index} label={`+${(feature.length-3)}`}/>
                  })}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </CardActions>
        <CardActions disablespacing sx={{px: 3}}>
          <IconButton aria-label='add to favourites'>
            <FavoriteBorder />
          </IconButton>
          <IconButton aria-label='add to favourites'>
            <Share />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              my: 0.5,
              marginLeft: 'auto'
            }}
          >

            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
              £
            </Typography>

            <Typography variant='h5' sx={{ mx: 0.5, color: 'text.secondary' }}>
              200
            </Typography>

            <Typography
              gutterBottom
              component='span'
              variant='subtitle2'
              sx={{
                pt: 1,
                alignSelf: 'flex-end',
                color: 'text.secondary'
              }}
            >
              /hr
            </Typography>

            <Typography variant='subtitle1' align='center' sx={{ mx: 1, color: 'text.secondary' }}>
              (£24/day)
            </Typography>

          </Box>
        </CardActions>
      </Card>
    </>
  );
}

export default VehicleCard;