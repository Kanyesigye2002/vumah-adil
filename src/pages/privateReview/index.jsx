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
import ReviewBg from '../../assets/img/public-review-bg.jpg';
import CompanyReview from '../../assets/img/company-review-img.jpg';
import Mercedes from '../../assets/img/Mercedes-car.jpg';
import CustomerReview from '../../assets/img/customer-review-img-1.png';

export default function PrivateReview() {
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [openSharePopover, setOpenSharePopover] = useState(false);

  return (
    <section className="public-review-main padd-top-60 padd-bottom-60">
      <div className="container">
        <div className="company-product-info mb-5" data-aos="fade-up">

          <div className="public-review-bg position-relative">
            <img src={coverImage ? coverImage : ReviewBg} alt="review-bg" className="profile-pic" />
            <div className="p-image">
              <label htmlFor="cover-image" className="mb-0 pointer">
                <i className="fa fa-camera upload-button"></i>
              </label>
              <input id="cover-image" className="file-upload" type="file" accept="image/*" onChange={onCoverImageChange} />
            </div>
          </div>
          <div className="p-4 mx-2 mb-2">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div
                  className="company-review d-flex mb-3 justify-content-center justify-content-md-start align-items-center">
                  <h2>40 Reviews</h2>
                  <ul className="d-flex ml-2">
                    <li className="active"><i className="fas fa-star"></i></li>
                    <li className="active"><i className="fas fa-star"></i></li>
                    <li className="active"><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                  </ul>
                </div>
                <div className="level-four d-flex justify-content-center justify-content-md-start align-items-center">
                  <svg viewBox="0 0 1023.726 1321" className="margin-right-ten">
                    <g id="Group_1" data-name="Group 1" transform="translate(-1941 465)">
                      <g id="_152531" data-name="152531" transform="translate(1941 814.881)">
                        <path id="Path_2" data-name="Path 2"
                          d="M502.5-1279.4c-1.1.2-4.5.9-7.5,1.5-10.9,2-25.8,7.5-40,14.5-26.1,13-52,29.7-116.7,75.6-98.2,69.7-139.3,95.3-183.5,114.1-39.9,17.1-90.7,28.4-140,31.3-11.6.7-11.7.7-12.3,3.3C1.2-1032.9,0-988.1,0-946c0,73.3,1.6,114.8,8.5,226,5.2,82.1,7.2,106.8,10,120.7,9.9,49,44.9,135.9,80.3,199.3,30.6,54.9,82.8,129,127,180.4C288.1-147.2,375.1-64.2,439.5-15.7,448.3-9.1,457-3.1,458.8-2.3c1.8.7,106.7.7,124.1-.8l19.8-17.1c44.3-38,81.5-73.1,123.5-116.4C803.4-216.3,847.8-270,893.5-339c65.8-99.2,104.7-192.1,113.9-271.5,3.1-26.4,9.5-124.3,14.2-216,2.9-56.9,2.8-205.3-.1-212.7-1-2.6-6.8-3.8-18.3-3.8-34.8,0-85.8-11.6-130.2-29.7a588.876,588.876,0,0,1-67-33.4c-22.1-13.3-55.8-36.1-116-78.5-64.2-45.3-86.4-60.3-102.9-69.4-23.4-12.9-45.7-21.9-60.9-24.5C518.3-1279.9,507.2-1280.3,502.5-1279.4Z" />
                        <path id="Path_3" data-name="Path 3" d="M63,0l63,44L1.063,44.25Z"
                          transform="translate(584 41.119) rotate(180)" />
                      </g>
                      <path id="_Path_" data-name="&lt;Path&gt;"
                        d="M318.19,296.32Q255.9,196,161.14,44.01c-.02-.01-.02-.02-.02-.03a85.821,85.821,0,1,0-149.85,83.7L220.8,466.22c.01.01.01.02.02.03,33.22,59.48,117.86,57.79,150.15,0,0-.01.01-.02.01-.03l95.2-153.81Q378.145,392.015,318.19,296.32ZM580.52,127.68a85.825,85.825,0,0,0-149.86-83.7.037.037,0,0,1-.01.03Q356.19,163.44,295.89,260.44c7.72,12.42,15.23,24.5,22.3,35.88q59.955,95.7,147.99,16.09Z"
                        transform="translate(2156.645 -59.992)" fill="#fff" />
                    </g>
                  </svg>
                  <h2>Level 4 host</h2>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="company-info-center">
                  <div className="company-review-img mb-3 position-relative">
                    <img src={profileImage ? profileImage : CompanyReview} alt="company-review-img" className="profile-car" />

                    <div className="p-image">
                      <label htmlFor="profile-image" className="mb-0 pointer">
                        <i className="fa fa-camera car-upload-button"></i>
                      </label>
                      <input id="profile-image" className="car-file-upload" type="file" accept="image/*" onChange={onProfileImageChange} />
                    </div>
                  </div>
                  <h2>Name of company </h2>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
                <div className="company-info-right pl-5 ">
                  <p> <i className="fas fa-check-circle margin-right-five"></i> Avg response time 25hrs</p>
                  <p> <i className="fas fa-clock margin-right-five"></i>99% response rate</p>
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
            </div>
            <div className="company-info">
              <p>I am self employed and mainly work in London as a property management consultant. I
                fell in love with The Old School House while I was studying Zen Meditation in the Lake
                District
                The house is now my second home and provides a peaceful rural retreat. Set in the UNESCO
                world
                heritage National Park it’s lovely to be able to share such a unique place with you.</p>
            </div>
          </div>
        </div>
        <div className="service-header  mb-4" data-aos="fade-up">
          <h2>Listings</h2>
        </div>
        <div className="company-product-listing mb-5" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="company-product-list-grid">
                <div className="company-product-list-img">
                  <img src={Mercedes} alt="mercedes-car" />
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
                    <h2>100/day(£24/hr)</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="company-product-list-grid">
                <div className="company-product-list-img">
                  <img src={Mercedes} alt="mercedes-car" />
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
                    <h2>100/day(£24/hr)</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="company-product-list-grid">
                <div className="company-product-list-img">
                  <img src={Mercedes} alt="mercedes-car" />
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
                    <h2>100/day(£24/hr)</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="car-rating-main" data-aos="fade-up">
          <h2><i className="fas fa-star mr-2"></i>5.0 (31 Reviews)</h2>
          <div className="car-people-rating mb-4">
            <div className="rated-person-info d-flex mb-2 align-items-center">
              <div className="rated-person-img margin-right-ten">
                <img src={CustomerReview} alt="rated-person" />
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
                <img src={CustomerReview} alt="rated-person" />
              </div>
              <div className="rated-person-info pl-3">
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
    </section>
  );

  function onCoverImageChange(e) {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  function onProfileImageChange(e) {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  function toggleSharePopover() {
    setOpenSharePopover(!openSharePopover);
  };
}
