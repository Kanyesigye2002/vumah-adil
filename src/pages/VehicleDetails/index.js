import React, { useEffect, useState } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';
import Slider from 'react-slick';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import MercedesCar from '../../assets/img/Mercedes-car.jpg';
import { Link, useParams } from 'react-router-dom';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_VEHICLE_BY_ID, VEHICLE_ADD_TO_FAVOURITES, VEHICLE_REMOVE_FROM_FAVOURITES } from '../../graphql/Queries';
import LoadingScreen from '../../components/LoadingScreen';
import {
  Api,
  Bluetooth,
  DirectionsCar,
  ElectricCar,
  Favorite,
  FavoriteBorder,
  GpsFixed,
  HdrAuto,
  Usb
} from '@mui/icons-material';
import { Box, Card, CardContent, Container, IconButton, Typography } from '@mui/material';
import VehicleLocation from './VehicleLocation';
import { motion } from 'framer-motion';
import { varBounceIn, varFadeInDown } from '../../components/animate';
import { SeverErrorIllustration } from '../../assets';
import createAvatar from '../../utils/createAvatar';
import { MAvatar } from '../../components/@material-extend';
import useAuth from '../../hooks/useAuth';

export default function CarListing(props) {
  const { hideSimilarCar, sliderClassName } = props;
  const [openSharePopover, setOpenSharePopover] = useState(false);
  const [addedToFav, setAddedToFav] = useState(false);
  const [vehicle, setVehicle] = useState({});

  const [fromDate, setFromDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));
  const [toDate, setToDate] = useState(moment().format('M/DD/YYYY (hh:mm)'));

  const sliderClass = sliderClassName ? sliderClassName : 'carModal-slider';

  const { id } = useParams();

  const [getVehicle, { loading }] = useLazyQuery(GET_VEHICLE_BY_ID, {
    variables: { id: id }
  });

  useEffect(() => {
    if (id !== undefined) {
      getVehicle().then((res) => {
        console.log('Vehicle: ', res.data.VehicleById);
        setVehicle(res.data.VehicleById);
      });
    }
  }, []);

  function toggleSharePopover() {
    setOpenSharePopover(!openSharePopover);
  }

  function handleEvent(event, picker) {
    setFromDate(picker.startDate.format('M/DD/YYYY (hh:mm)'));
    setToDate(picker.endDate.format('M/DD/YYYY (hh:mm)'));
  }

  const featureIcons = [
    {
      name: 'Bluetooth',
      icon: <Bluetooth sx={{ m: 1 }} />
    },
    {
      name: 'Automatic gearbox',
      icon: <DirectionsCar sx={{ m: 1 }} />
    },
    {
      name: 'Autopilot',
      icon: <HdrAuto sx={{ m: 1 }} />
    },
    {
      name: 'USB input',
      icon: <Usb sx={{ m: 1 }} />
    },
    {
      name: 'Electric',
      icon: <ElectricCar sx={{ m: 1 }} />
    },
    {
      name: 'GPS',
      icon: <GpsFixed sx={{ m: 1 }} />
    }
  ];

  const getFeatureIcon = (name) => {
    let icon = <Api sx={{ m: 1 }} />;
    featureIcons.map((item) => {
      if (item.name === name) {
        icon = item.icon;
        return icon;
      }
    });
    return icon;
  };

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
    <section className="carModal-full-detail padd-bottom-60 padd-top-60">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="container">
          <div className="carModal-header mb-4" data-aos="fade-up">
            <h2>
              {vehicle.make} - ( {vehicle.model} )
            </h2>
            <div className="d-flex">
              <p
                className="margin-right-ten pointer"
                onClick={() => setAddedToFav(!addedToFav)}
                style={{ color: addedToFav ? 'var(--secondary-color)' : null }}
              >
                <IconButton aria-label="add to favourites" onClick={onFavoriteClick} color="primary">
                  {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                Add to favourites
              </p>
              <p id="share-popover" className="pointer">
                {' '}
                <i className="fas fa-share-alt margin-right-five pointer" />
                Share Profile
              </p>
              <Popover
                placement="bottom"
                isOpen={openSharePopover}
                target="share-popover"
                toggle={toggleSharePopover}
                className="blog-card-grid blog-card-grid--popover"
                style={{ maxWidth: '500px' }}
              >
                <PopoverBody>
                  <h5 className="mb-3 ml-0 pl-0" style={{ marginLeft: 0 }}>
                    Share
                  </h5>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <WhatsappShareButton url={`${window.location}`} style={{ marginRight: '20px' }}>
                      <WhatsappIcon size={64} round />
                      <p>WhatsApp</p>
                    </WhatsappShareButton>
                    <FacebookShareButton url={`${window.location}`} style={{ marginRight: '20px' }}>
                      <FacebookIcon size={64} round />
                      <p>Facebook</p>
                    </FacebookShareButton>
                    <TwitterShareButton url={`${window.location}`} style={{ marginRight: '20px' }}>
                      <TwitterIcon size={64} round />
                      <p>Twitter</p>
                    </TwitterShareButton>
                    <EmailShareButton url={`${window.location}`}>
                      <EmailIcon size={64} round />
                      <p>Email</p>
                    </EmailShareButton>
                  </div>
                  <div style={{ display: 'flex', position: 'relative' }} className="mt-3">
                    <input
                      type="text"
                      readOnly={true}
                      className="form-control"
                      placeholder="URL"
                      defaultValue={`${window.location}`}
                      style={{
                        cursor: 'pointer',
                        paddingRight: '40px'
                      }}
                      onClick={(e) => {
                        e.target.select();
                        document.execCommand('copy');
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        pointerEvents: 'none'
                      }}
                    >
                      COPY LINK
                    </span>
                  </div>
                </PopoverBody>
              </Popover>
            </div>
          </div>

          {vehicle.images !== undefined && (
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              className={sliderClass + ' mb-5'}
            >
              {vehicle.images.map((image, index) => (
                <div key={index}>
                  <img src={image.url} alt="car-modal-img" />
                </div>
              ))}
            </Slider>
          )}
          <div className="row mb-5 mb-lg-0">
            <div className="col-md-7 ">
              {vehicle.user !== undefined && (
                <div className="rated-person-info d-flex mb-2 align-items-center mb-4" data-aos="fade-up">
                  <div className="margin-right-ten">
                    <MAvatar src={vehicle.user.avatarUrl} alt={vehicle.user.firstName} color="default" sx={{ m: 2 }}>
                      {createAvatar(vehicle.user.firstName).name}
                    </MAvatar>
                  </div>
                  <div className="rated-person-info pl-3 car-details-rating">
                    <h2>
                      <i className="fas fa-star margin-right-five" />
                      1.0
                    </h2>
                    <h2>Car hosted by {vehicle.user.firstName}</h2>
                    <p>Level 1 host</p>
                    <p className="unlock-text">
                      <Link to="/public-review">
                        <u>View Profile</u>
                      </Link>
                    </p>
                  </div>
                </div>
              )}
              <div className="feature-list mb-4" data-aos="fade-up">
                <div className="carModal-header mb-4">
                  <h2>Features</h2>
                </div>
                <ul className="d-flex flex-wrap padding-left-zero">
                  {vehicle.features !== undefined && (
                    <>
                      {vehicle.features.map((feature, index) => (
                        <li key={index}>
                          {getFeatureIcon(feature.name)}
                          {feature.name}
                        </li>
                      ))}
                    </>
                  )}
                </ul>
                <p>*Free cancellation up to 24hrs before the trip start</p>
              </div>

              <div className="carModal-header mb-4" data-aos="fade-up">
                <h2>Description</h2>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                  {vehicle.description}
                </p>
              </div>
              <div className="carModal-header mb-4" data-aos="fade-up">
                <div className="row align-items-center mb-3">
                  <div className="col-md-6">
                    <h2 className="">Questions & Answers</h2>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end Answers-lock">
                    <span title="Please login first to post">
                      <i className="fas fa-lock" style={{ color: 'var(--secondary-color)' }} />
                    </span>
                    <button
                      className="qna-arrow"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fas fa-chevron-down" style={{ color: 'var(--secondary-color)' }} />
                    </button>
                  </div>
                </div>
                <p className="unlock-text">
                  <a href="#" style={{ color: 'var(--secondary-color)' }}>
                    Login
                  </a>
                  or
                  <a style={{ color: 'var(--secondary-color)' }} href="#">
                    Sign Up
                  </a>
                  to ask a public question
                </p>
              </div>

              <div className="location-map mb-4" data-aos="fade-up">
                <div className="carModal-header mb-4">
                  <h2>Location</h2>
                </div>
                <div className="location-map-inner">
                  <Card>
                    <CardContent sx={{ height: '300px', p: 0 }} style={{ paddingBottom: 0 }}>
                      {vehicle.location !== undefined && <VehicleLocation map={vehicle.location} />}
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="car-rating-main mb-5" data-aos="fade-up">
                {vehicle.reviews !== undefined && (
                  <>
                    <h2>
                      <i className="fas fa-star mr-2" />
                      {vehicle.reviews.length} Reviews
                    </h2>
                    {vehicle.reviews.length > 0 ? (
                      <>
                        {vehicle.reviews.map((review, index) => (
                          <div className="car-people-rating mb-4">
                            <div className="rated-person-info d-flex mb-2 align-items-center">
                              <div className="rated-person-img margin-right-ten">
                                <img src={review.user.avatarUrl} alt="rated-person" />
                              </div>
                              <div className="rated-person-info">
                                <h2>{review.user.firstName}</h2>
                                <p>{review.date}</p>
                              </div>
                            </div>
                            <p style={{ textAlign: 'justify' }}>{review.comment}</p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        <>
                          <Box sx={{ position: 'relative' }}>
                            <Container
                              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 1, pb: 3 }}
                            >
                              <motion.div variants={varFadeInDown}>
                                <Typography variant="body1">There are no reviews for this vehicle yet</Typography>
                              </motion.div>
                            </Container>
                          </Box>
                        </>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-md-4" style={{ minWidth: '430px', marginLeft: 'auto' }}>
              <div className="pick-range-box" data-aos="fade-up">
                <div className="d-flex justify-content-between ml-1 mr-1">
                  <h2>
                    £{vehicle.dailyRates}/day (£{vehicle.hourlyRates}/hr)
                  </h2>
                  <p className="text-dark-white">Mileage Inc: 10,000 km</p>
                </div>

                <div className="mb-3">
                  <DateRangePicker
                    initialSettings={{
                      timePicker: true,
                      timePickerIncrement: 15
                    }}
                    alwaysShowCalendars={true}
                    onEvent={handleEvent}
                  >
                    <div className="contact-form-field field-label mb-3">
                      <input type="text" name="daterange" value={`${fromDate} - ${toDate}`} onChange={() => {}} />
                    </div>
                  </DateRangePicker>
                </div>
                <div className="contact-form-field submit-contact mb-4">
                  <Link className="common-btn" to={`/request-booking/${id}`}>
                    Continue
                  </Link>
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="my-button">
                    Accommotation
                    <span>$1,705</span>
                  </p>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="my-button">
                    Montly discount: 40% off
                    <span>-$682</span>
                  </p>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="my-button">
                    Cleaning fee
                    <span>$25</span>
                  </p>
                  <p style={{ display: 'flex', justifyContent: 'space-between' }} className="my-button">
                    Service fee
                    <span>$134</span>
                  </p>
                  <hr />
                  <b style={{ display: 'flex', justifyContent: 'space-between' }} className="my-button">
                    Total
                    <span>$1,182</span>
                  </b>
                </div>
              </div>

              <div className="pick-range-box mt-4" data-aos="fade-up">
                <div className="d-flex justify-content-between ml-1 mr-1" style={{ alignItems: 'center' }}>
                  <h2 className="m-0">Have questions?</h2>
                  <Link className="common-btn" to="/messages">
                    Contact host
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {!hideSimilarCar && (
            <div className="carModal-header mb-4" data-aos="fade-up">
              <h2>Other vehicles nearby</h2>
            </div>
          )}
          {!hideSimilarCar && (
            <div className="company-product-listing " data-aos="fade-up">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                className="modal-car-slider mb-5"
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]}
              >
                <div className="company-product-list-grid width-auto">
                  <div className="company-product-list-img">
                    <img src={MercedesCar} alt="mercedes-car" />
                  </div>
                  <div className="comapany-card-body">
                    <h2>Mercedes-Benz S-className 2018</h2>
                    <ul className="car-grid-tag">
                      <li>ATM</li>
                      <li>Electric</li>
                      <li>Bluetooth</li>
                      <li>+3</li>
                    </ul>
                    <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                      <span className="heart-review">
                        <i className="fas fa-heart" />
                      </span>
                      <h2>£100/day( 24/hr)</h2>
                    </div>
                  </div>
                </div>
                <div className="company-product-list-grid width-auto">
                  <div className="company-product-list-img">
                    <img src={MercedesCar} alt="mercedes-car" />
                  </div>
                  <div className="comapany-card-body">
                    <h2>Mercedes-Benz S-className 2018</h2>
                    <ul className="car-grid-tag">
                      <li>ATM</li>
                      <li>Electric</li>
                      <li>Bluetooth</li>
                      <li>+3</li>
                    </ul>
                    <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                      <span className="heart-review">
                        <i className="fas fa-heart" />
                      </span>
                      <h2>£100/day( 24/hr)</h2>
                    </div>
                  </div>
                </div>
                <div className="company-product-list-grid width-auto">
                  <div className="company-product-list-img">
                    <img src={MercedesCar} alt="mercedes-car" />
                  </div>
                  <div className="comapany-card-body">
                    <h2>Mercedes-Benz S-className 2018</h2>
                    <ul className="car-grid-tag">
                      <li>ATM</li>
                      <li>Electric</li>
                      <li>Bluetooth</li>
                      <li>+3</li>
                    </ul>
                    <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                      <span className="heart-review">
                        <i className="fas fa-heart" />
                      </span>
                      <h2>£100/day( 24/hr)</h2>
                    </div>
                  </div>
                </div>
                <div className="company-product-list-grid width-auto">
                  <div className="company-product-list-img">
                    <img src={MercedesCar} alt="mercedes-car" />
                  </div>
                  <div className="comapany-card-body">
                    <h2>Mercedes-Benz S-className 2018</h2>
                    <ul className="car-grid-tag">
                      <li>ATM</li>
                      <li>Electric</li>
                      <li>Bluetooth</li>
                      <li>+3</li>
                    </ul>
                    <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                      <span className="heart-review">
                        <i className="fas fa-heart" />
                      </span>
                      <h2>£100/day( 24/hr)</h2>
                    </div>
                  </div>
                </div>
                <div className="company-product-list-grid width-auto">
                  <div className="company-product-list-img">
                    <img src={MercedesCar} alt="mercedes-car" />
                  </div>
                  <div className="comapany-card-body">
                    <h2>Mercedes-Benz S-className 2018</h2>
                    <ul className="car-grid-tag">
                      <li>ATM</li>
                      <li>Electric</li>
                      <li>Bluetooth</li>
                      <li>+3</li>
                    </ul>
                    <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                      <span className="heart-review">
                        <i className="fas fa-heart" />
                      </span>
                      <h2>£100/day( 24/hr)</h2>
                    </div>
                  </div>
                </div>
                <div className="company-product-list-grid width-auto">
                  <div className="company-product-list-img">
                    <img src={MercedesCar} alt="mercedes-car" />
                  </div>
                  <div className="comapany-card-body">
                    <h2>Mercedes-Benz S-className 2018</h2>
                    <ul className="car-grid-tag">
                      <li>ATM</li>
                      <li>Electric</li>
                      <li>Bluetooth</li>
                      <li>+3</li>
                    </ul>
                    <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                      <span className="heart-review">
                        <i className="fas fa-heart" />
                      </span>
                      <h2>£100/day( 24/hr)</h2>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
