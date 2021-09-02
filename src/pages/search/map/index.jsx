import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import dummyData from '../dummyData';
import { clone } from 'lodash';

export default function Map(props) {
  const {
    selectedVehicleOnMap,
    onClickMapImage
  } = props;

  const [places, setPlaces] = useState(dummyData);
  const londonCenter = [51.509865, -0.118092];

  return (
    <GoogleMapReact
      defaultZoom={12}
      defaultCenter={londonCenter}
      // bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
      onChildClick={onClickMapImage}
    >
      {dummyData.map((place) => (
        <Marker
          key={place.id}
          lat={place.geometry.location.lat}
          lng={place.geometry.location.lng}
          place={place}
          selectedVehicleOnMap={selectedVehicleOnMap}
        />
      ))}
    </GoogleMapReact>
  );
}
