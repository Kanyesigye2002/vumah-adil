import React, { useEffect, useState } from 'react';
import { Box, Card, CardActions, CardContent, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import CarouselVehicles from '../../pages/Favorites/CarouselVehicles';
import {
  Api,
  Bluetooth,
  DirectionsCar,
  ElectricCar,
  Favorite,
  FavoriteBorder,
  GpsFixed,
  HdrAuto,
  Share,
  Usb
} from '@mui/icons-material';
import useAuth from '../../hooks/useAuth';
import { useMutation } from '@apollo/client';
import { VEHICLE_ADD_TO_FAVOURITES, VEHICLE_REMOVE_FROM_FAVOURITES } from '../../graphql/Queries';

function VehicleCard({ vehicle }) {
  const { user } = useAuth();

  const [isFavorite, setIsFavorite] = useState(false);

  const [AddFavoritesToUser] = useMutation(VEHICLE_ADD_TO_FAVOURITES, {
    variables: { vehicleID: vehicle.id }
  });

  const [RemoveFavoritesFromUser] = useMutation(VEHICLE_REMOVE_FROM_FAVOURITES, {
    variables: { vehicleID: vehicle.id }
  });

  const CheckIfFavorites = () => {
    user.favorites.map((item) => {
      if (item.id === vehicle.id) {
        setIsFavorite(true);
      }
    });
  };

  const onFavoriteClick = () => {
    if (isFavorite) {
      RemoveFavoritesFromUser().then(() => {
        setIsFavorite(false);
      });
    } else {
      AddFavoritesToUser().then(() => {
        setIsFavorite(true);
      });
    }
  };

  useEffect(() => CheckIfFavorites(), []);

  return (
    <>
      <Card>
        <CardContent sx={{ p: 0 }}>
          {vehicle.images !== undefined && <CarouselVehicles images={vehicle.images} />}
        </CardContent>
        <CardActions disablespacing sx={{ px: 3 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              my: 2,
              marginRight: 'auto'
            }}
          >
            <Grid container justifyContent="flex-start">
              <Grid item xs={12}>
                <Typography variant="h5" sx={{ mx: 0.5 }}>
                  {vehicle.make} - ( {vehicle.model} )
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  {vehicle.features !== undefined && (
                    <>
                      {vehicle.features.map((feature, index) => {
                        if (index < 2) return <Chip key={index} label={feature.name} />;
                        else if (index > 2) return <div key={index} />;
                        else return <Chip key={index} label={`+${vehicle.features.length - 2}`} />;
                      })}
                    </>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </CardActions>
        <CardActions disablespacing sx={{ px: 3 }}>
          <IconButton aria-label="add to favourites" onClick={onFavoriteClick} color="primary">
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton aria-label="add to favourites">
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
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              £
            </Typography>

            <Typography variant="h5" sx={{ mx: 0.5, color: 'text.secondary' }}>
              200
            </Typography>

            <Typography
              gutterBottom
              component="span"
              variant="subtitle2"
              sx={{
                pt: 1,
                alignSelf: 'flex-end',
                color: 'text.secondary'
              }}
            >
              /hr
            </Typography>

            <Typography variant="subtitle1" align="center" sx={{ mx: 1, color: 'text.secondary' }}>
              (£24/day)
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}

export default VehicleCard;
