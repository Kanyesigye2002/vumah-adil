import React from 'react';
import InfoWindow from './InfoWindow';

export default function Marker(props) {
  const { place, selectedVehicleOnMap } = props;

  return (
    <>
      <div
        className={
          selectedVehicleOnMap === place.id ? "map-position-label map-position-label--active"
          : "map-position-label"
        }
      >$100</div>
      {selectedVehicleOnMap === place.id && <InfoWindow place={place} />}
    </>
  );
}
