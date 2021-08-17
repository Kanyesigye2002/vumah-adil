import React, { useState } from 'react';
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
} from "react-share";
import Slider from "react-slick";
import TeslaCar from '../../assets/img/tesla-modal-car.jpg';
import MercedesCar from '../../assets/img/Mercedes-car.jpg';
import CustomerReview from '../../assets/img/customer-review-img-2.png';
import CustomerReview1 from '../../assets/img/customer-review-img-1.png';
import RangePickerComponent from '../../components/rangePicker';

export default function CarListing(props) {
  const { hideSimilarCar, sliderClassName } = props;
  const [openSharePopover, setOpenSharePopover] = useState(false);

  const sliderClass = sliderClassName ? sliderClassName : 'carModal-slider';

  return (
    <section className="carModal-full-detail padd-bottom-60 padd-top-60">
      <div className="container">
        <div className="carModal-header mb-4" data-aos="fade-up">
          <h2>Tesla Modal 3</h2>
          <div className="d-flex">
            <p className="margin-right-ten"><i className="far fa-heart margin-right-five pointer"></i>Add to favourites</p>
            <p id="share-popover" className="pointer"> <i className="fas fa-share-alt margin-right-five pointer"></i>Share Profile</p>
            <Popover placement="bottom" isOpen={openSharePopover} target="share-popover" toggle={toggleSharePopover} className="blog-card-grid">
              <PopoverBody>
                <h5 className="mb-3">Share</h5>
                <WhatsappShareButton url={window.location} className="margin-right-ten">
                  <WhatsappIcon size={32} round />
                  <p>WhatsApp</p>
                </WhatsappShareButton>
                <FacebookShareButton url={window.location} className="margin-right-ten">
                  <FacebookIcon size={32} round />
                  <p>Facebook</p>
                </FacebookShareButton>
                <TwitterShareButton url={window.location} className="margin-right-ten">
                  <TwitterIcon size={32} round />
                  <p>Twitter</p>
                </TwitterShareButton>
                <EmailShareButton url={window.location} className="margin-right-ten">
                  <EmailIcon size={32} round />
                  <p>Email</p>
                </EmailShareButton>
              </PopoverBody>
            </Popover>
          </div>
        </div>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          className={sliderClass + ' mb-5'}
        >
          <div>
            <img src={TeslaCar} alt="car-modal-img" />
          </div>
          <div>
            <img src={TeslaCar} alt="car-modal-img" />
          </div>
          <div>
            <img src={TeslaCar} alt="car-modal-img" />
          </div>
        </Slider>
        <div className="row mb-5 mb-lg-0">
          <div className="col-md-6 ">
            <div className="rated-person-info d-flex mb-2 align-items-center mb-4" data-aos="fade-up">
              <div className="rated-person-img margin-right-ten">
                <img src={CustomerReview} alt="rated-person" />
              </div>
              <div className="rated-person-info pl-3 car-details-rating">
                <h2><i className="fas fa-star margin-right-five"></i>5.0</h2>
                <h2>Car hosted by Karen</h2>
                <p>Level 4 host</p>
                <p className="unlock-text">
                  <a href="public-review.html">
                    <u>View Profile</u>
                  </a>
                </p>
              </div>
            </div>
            <div className="feature-list mb-4" data-aos="fade-up">
              <div className="carModal-header mb-4">
                <h2>Features</h2>
              </div>
              <ul className="d-flex flex-wrap padding-left-zero">
                <li><i className="fas fa-asterisk margin-right-five"></i>Automatic gearbox</li>
                <li><i className="far fa-steering-wheel margin-right-five"></i>Autopilot</li>
                <li><i className="fab fa-usb margin-right-five"></i>USB input</li>
                <li><i className="fas fa-bolt margin-right-five"></i>Electric</li>
                <li><i className="fas fa-map-marker-alt margin-right-five"></i>GPS</li>
                <li><i className="fab fa-bluetooth-b margin-right-five"></i>Bluetooth</li>
              </ul>
              <p>*Free cancelllation up to 24hrs before the trip start</p>
            </div>

            <div className="carModal-header mb-4" data-aos="fade-up">
              <h2>Description</h2>
              <p className="mb-4">Our Tesla comes with all the top of the line features. Our GOAL is to make
                renting
                this vehicle simple and easy for you . We can pick you up at the earport for a small
                fee. The car comes with a full FREE charge anything after that is the guest
                responsibity.
              </p>
              <p className="mb-4">
                Guest's Countries: Poland, Australia. Be the next.
              </p>
              <p>Our Tesla comes with all the top of the line features. Our GOAL is to make renting
                this vehicle simple and easy for you . We can pick you up at the earport for a small
                fee. The car comes with a full FREE charge anything after that is the guest
                responsibity.
              </p>
            </div>
            <div className="carModal-header mb-4" data-aos="fade-up">
              <div className="row align-items-center mb-3">
                <div className="col-md-6">
                  <h2 className="">Questions & Answers</h2>
                </div>
                <div className="col-md-6 d-flex justify-content-end Answers-lock">
                  <span title="Please login first to post">
                    <i className="fas fa-lock"></i>
                  </span>
                  <button className="qna-arrow" type="button" data-toggle="collapse"
                    data-target="#collapseExample" aria-expanded="false"
                    aria-controls="collapseExample">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </div>
              <p className="unlock-text"><a href="#login_popup" data-toggle="modal">Login</a> or <a
                href="#signUp_popup" data-toggle="modal">Sign Up</a> to ask a public question</p>
            </div>

            <div className="location-map mb-4" data-aos="fade-up">
              <div className="carModal-header mb-4">
                <h2>Location</h2>
              </div>
              <div className="location-map-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9552296.05057121!2d-13.4308706529575!3d54.231356379299555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1623499420062!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>

            <div className="car-rating-main mb-5" data-aos="fade-up">
              <h2><i className="fas fa-star mr-2"></i>5.0 (31 Reviews)</h2>
              <div className="car-people-rating mb-4">
                <div className="rated-person-info d-flex mb-2 align-items-center">
                  <div className="rated-person-img margin-right-ten">
                    <img src={CustomerReview1} alt="rated-person" />
                  </div>
                  <div className="rated-person-info">
                    <h2>Karen</h2>
                    <p>January 2021</p>
                  </div>
                </div>
                <p>Great guy and great car! Could not be more pleased. Thank you!</p>
              </div>
              <div className="car-people-rating">
                <div className="rated-person-info d-flex mb-2">
                  <div className="rated-person-img margin-right-ten">
                    <img src={CustomerReview1} alt="rated-person" />
                  </div>
                  <div className="rated-person-info">
                    <h2>Alex</h2>
                    <p>January 2021</p>
                  </div>
                </div>
                <p>Great Car, and great hosts! Stephen was very accommodating and very flexible.
                  Would 10/10 rent again!
                </p>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <div className="pick-range-box" data-aos="fade-up">
              <div className="d-flex justify-content-between ml-1 mr-1">
                <h2>£100/day (£24/hr)</h2>
                <p>Mileage Inc: 10,000 km</p>
              </div>

              <div className="mb-3">
                <RangePickerComponent className="car-listing-datepicker" />
              </div>
              <div className="contact-form-field submit-contact">
                <input type="Submit" value="Continue" />
              </div>
            </div>
          </div>
        </div>
        {!hideSimilarCar && <div className="carModal-header mb-4" data-aos="fade-up">
          <h2>Other vehicles nearby</h2>
        </div>}
        {!hideSimilarCar && <div className="company-product-listing " data-aos="fade-up">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            className='modal-car-slider mb-5'
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
                  <li>ATM </li>
                  <li>Electric</li>
                  <li>Bluetooth</li>
                  <li>+3</li>
                </ul>
                <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                  <span className="heart-review"><i className="fas fa-heart"></i></span>
                  <h2>100/day( 24/hr)</h2>
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
                  <li>ATM </li>
                  <li>Electric</li>
                  <li>Bluetooth</li>
                  <li>+3</li>
                </ul>
                <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                  <span className="heart-review"><i className="fas fa-heart"></i></span>
                  <h2>100/day( 24/hr)</h2>
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
                  <li>ATM </li>
                  <li>Electric</li>
                  <li>Bluetooth</li>
                  <li>+3</li>
                </ul>
                <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                  <span className="heart-review"><i className="fas fa-heart"></i></span>
                  <h2>100/day( 24/hr)</h2>
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
                  <li>ATM </li>
                  <li>Electric</li>
                  <li>Bluetooth</li>
                  <li>+3</li>
                </ul>
                <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                  <span className="heart-review"><i className="fas fa-heart"></i></span>
                  <h2>100/day( 24/hr)</h2>
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
                  <li>ATM </li>
                  <li>Electric</li>
                  <li>Bluetooth</li>
                  <li>+3</li>
                </ul>
                <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                  <span className="heart-review"><i className="fas fa-heart"></i></span>
                  <h2>100/day( 24/hr)</h2>
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
                  <li>ATM </li>
                  <li>Electric</li>
                  <li>Bluetooth</li>
                  <li>+3</li>
                </ul>
                <div className="comapany-card-footer d-flex justify-content-between mt-4 pt-2">
                  <span className="heart-review"><i className="fas fa-heart"></i></span>
                  <h2>100/day( 24/hr)</h2>
                </div>
              </div>
            </div>
          </Slider>
        </div>}
      </div>
    </section>
  );

  function toggleSharePopover() {
    setOpenSharePopover(!openSharePopover);
  };
}