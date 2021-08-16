import React from 'react';
import Face from '../../assets/img/face.jpg';
import FaceOne from '../../assets/img/face1.jpg';
import FaceTwo from '../../assets/img/face2.jpg';
import FaceThree from '../../assets/img/face3.jpg';
import CustomerReviewOne from '../../assets/img/customer-review-img-1.png';
import CustomerReviewTwo from '../../assets/img/customer-review-img-2.png';
import Mercedes from '../../assets/img/Mercedes-car.jpg';

export default function Chat() {
  return (
    <div className="padd-top-60 padd-bottom-60">
      <div className="container">
        <div className="d-lg-flex">
          <div className="Chat-list-main mb-4">
            <div className="chat-header d-flex justify-content-between align-items-center pb-4">
              <h2>Chat</h2>
              <div className="contact-form-field">
                <div className="select-outer">
                  <select>
                    <option>All</option>
                    <option>Yesterday</option>
                    <option>Today</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="friend-chat-list">
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={Face} alt="Freind-Photo" />
                    </div>
                    <div className="notseenMessage">
                      2
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Robo Cop</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={FaceOne} alt="Freind-Photo" />
                    </div>
                    <div className="notseenMessage">
                      5
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Moch Ramdhani Cop</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={FaceTwo} alt="Freind-Photo" />
                    </div>
                    <div className="notseenMessage">
                      12
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Abu Abdullah Nugraha</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={FaceOne} alt="Freind-Photo" />
                    </div>
                    <div className="notseenMessage">
                      5
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Moch Ramdhani Cop</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={FaceTwo} alt="Freind-Photo" />
                    </div>
                    <div className="notseenMessage">
                      12
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Abu Abdullah Nugraha</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={FaceThree} alt="Freind-Photo" />
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Muhammad Fauzi</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={FaceOne} alt="Freind-Photo" />
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Nurman Tri Gumelar</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={CustomerReviewOne} alt="Freind-Photo" />
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Bhagas Rhafi</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={CustomerReviewOne} alt="Freind-Photo" />
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Bhagas Rhafi</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={CustomerReviewOne} alt="Freind-Photo" />
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Bhagas Rhafi</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
              <div className="friend-list d-flex justify-content-between mb-4">
                <div className="friend-list-inner d-flex ">
                  <div className="chat-profile">
                    <div className="chat-profile-inner">
                      <img src={CustomerReviewTwo} alt="Freind-Photo" />
                    </div>
                  </div>
                  <div className="friend-text margin-left-ten">
                    <h6>Saepul Rohman</h6>
                    <p>Hey, You're arrested</p>
                  </div>
                </div>
                <div className="chat-time text-right-align">
                  <span className="chat-active-circle mb-2 d-inline-block"><i className="fa fa-circle"></i></span>
                  <span className="time">13:55</span>
                </div>
              </div>
            </div>
          </div>
          <div className="show-chat-content mb-4">
            <div className="show-chat-header d-flex justify-content-between">
              <h2>
                Robo Cop
                <span className="chat-active-circle margin-left-five"><i className="fa fa-circle"></i></span>
              </h2>
              <span className="three-dots ">
                <i className="fas fa-ellipsis-v"></i>
              </span>
            </div>
            <div className="chat-group-detail">
              <div className="row">
                <div className="col-md-8 mb-3">
                  <div className=" chat-box left_pnnel d-flex">
                    <img src={Face} className="profile-image" />
                    <div className="chat-bubble chat-bubble--left">
                      Hello Dude!
                    </div>
                  </div>
                </div>
                <div className="col-md-8 offset-md-4  mb-3">
                  <div className=" chat-box  right_pnnel d-flex flex-row-reverse">
                    <img src={FaceOne} className="profile-image" />
                    <div className="chat-bubble  chat-bubble_right">
                      Hi ! how are you
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <div className=" chat-box left_pnnel d-flex">
                    <img src={Face} className="profile-image" />
                    <div className="chat-bubble chat-bubble--left">
                      Hello Dude!
                    </div>
                  </div>
                </div>
                <div className="col-md-8 offset-md-4  mb-3">
                  <div className=" chat-box  right_pnnel d-flex flex-row-reverse">
                    <img src={FaceOne} className="profile-image" />
                    <div className="chat-bubble  chat-bubble_right">
                      Hi ! how are you
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <div className=" chat-box left_pnnel d-flex">
                    <img src={Face} className="profile-image" />
                    <div className="chat-bubble chat-bubble--left">
                      Hello Dude!
                    </div>
                  </div>
                </div>
                <div className="col-md-8 offset-md-4  mb-3">
                  <div className=" chat-box  right_pnnel d-flex flex-row-reverse">
                    <img src={FaceOne} className="profile-image" />
                    <div className="chat-bubble  chat-bubble_right">
                      Hi ! how are you
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <div className=" chat-box left_pnnel d-flex">
                    <img src={Face} className="profile-image" />
                    <div className="chat-bubble chat-bubble--left">
                      Hello Dude!
                    </div>
                  </div>
                </div>
                <div className="col-md-8 offset-md-4  mb-3">
                  <div className=" chat-box  right_pnnel d-flex flex-row-reverse">
                    <img src={FaceOne} className="profile-image" />
                    <div className="chat-bubble  chat-bubble_right">
                      Hi ! how are you
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <div className=" chat-box left_pnnel d-flex">
                    <img src={Face} className="profile-image" />
                    <div className="chat-bubble chat-bubble--left">
                      Hello Dude!
                    </div>
                  </div>
                </div>
                <div className="col-md-8 offset-md-4  mb-3">
                  <div className=" chat-box  right_pnnel d-flex flex-row-reverse">
                    <img src={FaceOne} className="profile-image" />
                    <div className="chat-bubble  chat-bubble_right">
                      Hi ! how are you
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mb-3">
                  <div className=" chat-box left_pnnel d-flex">
                    <img src={Face} className="profile-image" />
                    <div className="chat-bubble chat-bubble--left">
                      Hello Dude!
                    </div>
                  </div>
                </div>
                <div className="col-md-8 offset-md-4  mb-3">
                  <div className=" chat-box  right_pnnel d-flex flex-row-reverse">
                    <img src={FaceOne} className="profile-image" />
                    <div className="chat-bubble  chat-bubble_right">
                      Hi ! how are you
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="message-box-footer mt-5">
              <form>
                <div className="row align-items-center ">
                  <div className="col-md-9 type-message-box">
                    <input type="text" className="form-control" placeholder="Type message here...." />
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <span className="attachment-file-icon"><i className="fas fa-paperclip"></i></span>
                    <span className="message-send-icon"><i className="fas fa-paper-plane"></i></span>

                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="booking-details-main" id="car-chat-page">
            <div className="chat-header d-flex justify-content-between align-items-center pb-4">
              <h2>Details</h2>
            </div>
            <div className="booking-details-product">
              <h2>Booking details</h2>
              <img src={Mercedes} alt="car-img" />
              <p>Mercdes-Benz S-class 2018</p>
            </div>

            <div className="row Mercedes-car">
              <div className="col-md-6 mb-3">
                <p>Start Date</p>
              </div>
              <div className="col-md-6 mb-3 Mercedes-car-details">
                <p className="Mercedes-car-details">10 April 2021</p>
              </div>
              <div className="col-md-6 mb-3">
                <p>Return Date</p>
              </div>
              <div className="col-md-6 mb-3 Mercedes-car-details">
                <p className="Mercedes-car-details">20 April 2021</p>
              </div>
              <div className="col-md-6 mb-3">
                <p>Booked for</p>
              </div>
              <div className="col-md-6 mb-3 Mercedes-car-details">
                <p className="Mercedes-car-details">10 Days</p>
              </div>
              <hr />
              <div className="col-md-6 mb-3">
                <p>Total Cost</p>
              </div>
              <div className="col-md-6 mb-3 Mercedes-car-details">
                <p className="Mercedes-car-details">£500</p>
              </div>
            </div>
            {/* <div className="chat-detail-body">
              <div className="total-new-payemnt mb-3">
                <p>Hourly/Daily</p>
                <h6>10</h6>
              </div>
              <div className="total-new-payemnt">
                <p>Total Payment</p>
                <h6>$500</h6>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="common-btn">Cancel</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
