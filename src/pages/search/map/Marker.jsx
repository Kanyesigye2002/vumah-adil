import React from 'react';
import InfoWindow from './InfoWindow';

export default function Marker(props) {
  const { place, selectedVehicleOnMap } = props;

  return (
    <>
      <img src="https://gdurl.com/9MFm" />
      {selectedVehicleOnMap === place.id && <InfoWindow place={place} />}
    </>
  );
}