import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from 'moment';
import Mercedes from '../../assets/img/Mercedes-car.jpg';


export default function Availability() {
  const [showChangeAvailabilityPopup, setShowChangeAvailabilityPopup] = useState(false);
  const [availability, setAvailability] = useState('');


  const dateeeStart = moment(moment().unix() * 1000 - 1000 * 60 * 60 * 24 * moment().day());
  const dateeeEnd = moment(moment().unix() * 1000 - 1000 * 60 * 60 * 24 * moment().day() + 1000 * 60 * 60 * 24 * 6);

  const [endDate, setEndDate] = useState(dateeeEnd.format('M/DD/YYYY'));
  const [startDate, setStartDate] = useState(dateeeStart.format('M/DD/YYYY'));

  const modalCloseBtn = <button type="button" className="btn close p-0" onClick={toggleShowChangeAvailabilityPopup}>
    <span aria-hidden="true"><i className="fas fa-times-circle fa-lg"></i></span>
  </button>;

  useEffect(() => {
    const myFunction = (event) => {
      const tr = event.target.closest('#my-week-selector .drp-calendar .table-condensed tr');

      if (tr !== null) {
        tr.classList.add('active');
        const children = Array.from(tr.children);

        for (let index = 0; index < children.length; index++) {
          children[index].classList.add('active');
          //tr.children[index].classList.add('active');
        }
      }
    };

    document.addEventListener('mouseup', myFunction);

    return function() {
      document.removeEventListener('mouseup', myFunction);
    };
  });

  return (
    <>
      <div className="earning-main availability-main">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="overview-header d-flex justify-content-between">
              <h2 className="m-0 flex-grow-1">Availability</h2>
              <div className="d-flex align-items-center justify-content-end w-35" style={{position:'relative'}}>
                <p className="margin-right-five text-dark-white">Week</p>
                <DateRangePicker
                  initialSettings={{
                    singleDatePicker: true,
                    parentEl: '#my-week-selector',
                    timePicker: false,
                    showDropdowns: true,
                    endDate: endDate,
                    startDate: startDate
                  }}
                  alwaysShowCalendars={true}
                  onEvent={handleEvent}
                >
                  {/*
                    initialSettings={{
                      isInvalidDate: (date) => {
                        if (date.day() === 0) {
                          return false;
                        }
                        return true;
                      }
                    }}
                  */}
                  <div class="banner-search-field">
                    <input autoComplete={'off'} type="text" name="daterange" value={`${ startDate } - ${ endDate }`} className="text-center-align" />
                    <div id="my-week-selector" style={{position:'absolute', top: '100%', left: 0}}></div>
                  </div>
                </DateRangePicker>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-table-main">
          <table className="table availability-table" cellpedding="0" cellspacing="0">
            <thead>
              <tr>
                <th scope="col">Listing</th>
                <th scope="col">License Plate</th>
                <th scope="col">
                  Sun <br />
                  5th
                </th>
                <th scope="col">
                  Mon <br />
                  6th
                </th>
                <th scope="col">
                  Tue <br />
                  7th
                </th>
                <th scope="col">
                  Wed <br />
                  8th
                </th>
                <th scope="col">
                  Thu <br />
                  9th
                </th>
                <th scope="col">
                  Friday <br />
                  10th
                </th>
                <th scope="col">
                  Sat <br />
                  11th
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="booking-vechile-outer">
                    <div className="bookingVechile-img margin-right-ten">
                      <img src={Mercedes} alt="car" />
                    </div>
                    <div className="bookingVechile-detail mt-2">
                      <h2 className="text-dark-white" style={{ textAlign: 'left' }}>Mercedes</h2>
                      <p className="mb-0" style={{ textAlign: 'left' }}>£25.99/h</p>
                    </div>
                  </div>
                </th>
                <td>1234</td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="booking-vechile-outer">
                    <div className="bookingVechile-img margin-right-ten">
                      <img src={Mercedes} alt="car" />
                    </div>
                    <div className="bookingVechile-detail mt-2">
                      <h2 className="text-dark-white" style={{ textAlign: 'left' }}>Mercedes</h2>
                      <p className="mb-0" style={{ textAlign: 'left' }}>£25.99/h</p>
                    </div>
                  </div>
                </th>
                <td>1234</td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="booking-vechile-outer">
                    <div className="bookingVechile-img margin-right-ten">
                      <img src={Mercedes} alt="car" />
                    </div>
                    <div className="bookingVechile-detail mt-2">
                      <h2 className="text-dark-white" style={{ textAlign: 'left' }}>Mercedes</h2>
                      <p className="mb-0" style={{ textAlign: 'left' }}>£25.99/h</p>
                    </div>
                  </div>
                </th>
                <td>1234</td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="booking-vechile-outer">
                    <div className="bookingVechile-img margin-right-ten">
                      <img src={Mercedes} alt="car" />
                    </div>
                    <div className="bookingVechile-detail mt-2">
                      <h2 className="text-dark-white" style={{ textAlign: 'left' }}>Mercedes</h2>
                      <p className="mb-0" style={{ textAlign: 'left' }}>£25.99/h</p>
                    </div>
                  </div>
                </th>
                <td>1234</td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-warning" onClick={toggleShowChangeAvailabilityPopup}>
                  04:00 - 16:00
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
                <td className="text-danger" onClick={toggleShowChangeAvailabilityPopup}>
                  Unavailable
                </td>
                <td className="text-success" onClick={toggleShowChangeAvailabilityPopup}>
                  Available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="imp-note mt-3">* During unavailable days and hours the listing will be automatically paused</p>
      </div>

      {/* <!-- change availability modal --> */}
      <Modal isOpen={showChangeAvailabilityPopup} toggle={toggleShowChangeAvailabilityPopup} className='loginPopupMain add-listing-main'>
        <ModalHeader toggle={toggleShowChangeAvailabilityPopup} close={modalCloseBtn}></ModalHeader>
        <ModalBody>
          <div className="login-inner">
            <h4 className="text-center mt-4 text-dark-white">Select Availability</h4>
            <div className="contact-form-field radio-field available-all-day-radio mt-4">
              <input type="radio" id="t1" checked={availability === 'availAbleAllDay'} className="styled-checkbox availability-checkbox" value="availAbleAllDay" onChange={onChangeAvailability} />
              <label htmlFor="t1" className="text-dark-white padding-left-thirty">Available All Day</label>
            </div>
            <div className="contact-form-field radio-field custom-hours-radio mt-2">
              <input type="radio" id="t2" checked={availability === 'customHours'} className="styled-checkbox availability-checkbox" value="customHours" onChange={onChangeAvailability} />
              <label htmlFor="t2" className="text-dark-white padding-left-thirty">Custom Hours</label>
            </div><div className="contact-form-field radio-field unavailable-radio mt-2">
              <input type="radio" id="t3" checked={availability === 'unavilable'} className="styled-checkbox availability-checkbox" value="unavilable" onChange={onChangeAvailability} />
              <label htmlFor="t3" className="text-dark-white padding-left-thirty">Unavailable all day</label>
            </div>
            {availability === 'customHours' && <div className="row mt-3">
              <div className="col-md-6 contact-form-field">
                <label>From</label>
                <input type="time" className="content" />
              </div>
              <div className="col-md-6 contact-form-field">
                <label>Until</label>
                <input type="time" className="content" />
              </div>
            </div>}
            <div className="contact-form-field submit-contact text-center p-2 mt-3">
              <input type="Submit" value="Update" onClick={toggleShowChangeAvailabilityPopup} />
            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* <!-- change availability modal --> */}
    </>
  );

  function toggleShowChangeAvailabilityPopup() {
    setShowChangeAvailabilityPopup(!showChangeAvailabilityPopup);
  };

  function onChangeAvailability(e) {
    const { value } = e.target;
    setAvailability(value);
  };

  function handleEvent(event, picker) {
    const dateeeStart = moment(picker.startDate.unix() * 1000 - 1000 * 60 * 60 * 24 * picker.startDate.day());
    picker.setStartDate(dateeeStart);

    const dateeeEnd = moment(picker.startDate.unix() * 1000 - 1000 * 60 * 60 * 24 * picker.startDate.day() + 1000 * 60 * 60 * 24 * 6);
    picker.setEndDate(dateeeEnd);

    setStartDate(dateeeStart.format('M/DD/YYYY'));
    setEndDate(dateeeEnd.format('M/DD/YYYY'));
  };
}
