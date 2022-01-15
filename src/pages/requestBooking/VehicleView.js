import React from 'react';
import { Link } from 'react-router-dom';
import DroidDateRangePicker from '../../components/DateRangePicker';
import createAvatar from '../../utils/createAvatar';
import { MAvatar } from '../../components/@material-extend';
import { Stack } from '@mui/material';

function VehicleView({ vehicle }) {
  return (
    <div className="col-md-12">
      <div className="book-request-right">
        <div className="request-product-main d-flex">
          <div className="request-product-left margin-right-ten">
            {vehicle.images !== undefined && (
              <>{vehicle.images[0] !== undefined && <img src={vehicle.images[0].url} alt="tesla car" />}</>
            )}
          </div>
          {vehicle.user !== undefined && (
            <div className="request-product-right pl-4">
              <Link to="/public-review">
                <Stack direction="row" spacing={1} sx={{ pb: 2, alignItems: 'center' }}>
                  <MAvatar src={vehicle.user.avatarUrl} alt={vehicle.user.firstName} color="default" sx={{ mr: 2 }}>
                    {createAvatar(vehicle.user.firstName).name}
                  </MAvatar>
                  ( {vehicle.user.firstName} {vehicle.user.lastName} )
                </Stack>
              </Link>
              <h2>
                {vehicle.make} - ( {vehicle.model} )
              </h2>
              <div className="rated-person-info car-details-rating">
                <h2>
                  <i className="fas fa-star margin-right-five" />
                  1.0
                </h2>
                <p>Level 1 host</p>
                <h2>Car hosted by {vehicle.user.firstName}</h2>
              </div>
            </div>
          )}
        </div>
        <div className="request-grid mb-4">
          <div className="row">
            <div className="col-md-12">
              <h2>Dates</h2>
              <div className="mb-3">
                <DroidDateRangePicker />
              </div>
            </div>
          </div>
        </div>
        <h5 className="mb-4 booking">Total Booking Cost for 3 days 6hrs</h5>
        <div className="request-grid">
          <div className="row mb-3">
            <div className="col-md-6">
              <p>£100</p>
            </div>
            <div className="col-md-6">
              <p>$100.00</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <p>Service fee</p>
            </div>
            <div className="col-md-6">
              <p>$0.00</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Total (GDP)</h2>
            </div>
            <div className="col-md-6">
              <h2>£100.00</h2>
            </div>
          </div>
        </div>
      </div>
      <h5 className="mb-4 mt-4 text-dark-white">Cancellation Policy</h5>
      <p className="text-dark-white" style={{ textAlign: 'justify', maxWidth: '50vw' }}>
        When booking a vehicle on the Vumah platform we allow free cancellations up to 24hrs before the trip start to
        allow flexibility for our guests. If you choose to cancel for any reason within the 24 hours period of the trip
        start, the guest will be subject to a late cancellation fee and will be refunded the remainder that is on hold.
      </p>
    </div>
  );
}

export default VehicleView;
