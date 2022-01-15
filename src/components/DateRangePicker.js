import React from 'react';
import moment from 'moment';
import { useSelector } from '../redux/store';
import { useDispatch } from 'react-redux';
import DateRangePicker from 'react-bootstrap-daterangepicker';

function DroidDateRangePicker(props) {
  const dispatch = useDispatch();

  const dateRange = useSelector((state) => state.VehicleBookingTime);

  function handleEvent(event, picker) {
    dispatch({
      type: 'VehicleBookingTime',
      payload: {
        fromDate: picker.startDate,
        toDate: picker.endDate
      }
    });
  }

  return (
    <>
      <DateRangePicker
        initialSettings={{
          timePicker: true
        }}
        alwaysShowCalendars={true}
        onEvent={handleEvent}
      >
        <div className="contact-form-field  field-label mt-3">
          <input
            type="text"
            name="daterange"
            value={`${dateRange.fromDate.format('ddd-MMM-YY (hh:mm)')} - ${dateRange.toDate.format(
              'ddd-MMM-YY (hh:mm)'
            )}`}
            onChange={() => {}}
          />
        </div>
      </DateRangePicker>
    </>
  );
}

export default DroidDateRangePicker;
