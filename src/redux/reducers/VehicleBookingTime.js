import moment from 'moment';

export const VehicleBookingTime = (state = { fromDate: moment(), toDate: moment() }, action) => {
  switch (action.type) {
    case 'VehicleBookingTime':
      return action.payload;
    default:
      return state;
  }
};
