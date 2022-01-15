import React from 'react';
import ServiceOne from '../../assets/img/service-first-img-1.jpg';
import ServiceTwo from '../../assets/img/service-first-img-2.jpg';
import ServiceThree from '../../assets/img/service-first-img-3.jpg';
import Choose from '../../assets/img/choose.jpg';
import First from '../../assets/img/first.jpg';

export default function LandingPage() {
  return (
    <>
      <section className="banner-main">
        <div className="container w-100 h-100 position-relative">
          <div className="banner-content" data-aos="fade-up">
            <h1>Looking to become a host?</h1>
            <p style={{textAlign: 'justify'}}>The Vumah Platform is a community which allows businesses, and soon individuals to rent out their
              vehicles to verified and licensed users, and an all in one vehicle rental platform covering cars,
              bicycles, motorcycles, campervans and soon much more! Getting started is easy, sign up and get
              started today. </p>
            <a className="get-started-btn common-btn" href="#open-sign-up-modal" data-toggle="modal">Get started</a>
          </div>
        </div>
      </section>

      <section className="service-step-main">
        <div className="container">
          <div className="service-header text-center mb-5" data-aos="fade-up">
            <h2>Simple Steps</h2>
          </div>
          <div className="service-step-outer" data-aos="fade-up">
            <div className="service-step-first mb-5">
              <div className="row mb-4">
                <div className="col-lg-10">
                  <div className="service-step-content">
                    <h2>1. List your vehicle for free</h2>
                    <p style={{textAlign: 'justify'}}>After you have signed up and been verified, you can start listing your vehicles on
                      the platform. Make sure to use your best pictures, presentation is key.</p>
                  </div>
                </div>
                <div className="col-lg-2 text-center text-lg-right">
                  <a className="host-btn common-btn" href="#open-sign-up-modal" data-toggle="modal">HOST NOW</a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 mb-4 mb-sm-0">
                  <div className="service-first-grid">
                    <img src={ServiceOne} alt="service-img" />
                  </div>
                </div>
                <div className="col-sm-4 mb-4 mb-sm-0">
                  <div className="service-first-grid">
                    <img src={ServiceTwo} alt="service-img" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="service-first-grid">
                    <img src={ServiceThree} alt="service-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="service-step-two" data-aos="fade-up">
              <div className="row mb-4">
                <div className="col-lg-6">
                  <div className="service-step-content">
                    <h2> 2. Choose what bookings to accept</h2>
                    <p style={{textAlign: 'justify'}}>When a user wants to book your vehicle, they will send a request which you can either
                      accept or decline. This allows flexibility for the hosts to choose when to accept
                      bookings at times most convenient.</p>
                    <p>&nbsp;</p>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 mb-12 mb-sm-0">
                      <div className="service-first-grid">
                        <img src={Choose} alt="service-img" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-step-content">
                    <h2> 3. Get paid</h2>
                    <p style={{textAlign: 'justify'}}>After the trip is completed, we’ll release the payment after 24 hours which will go
                      straight to your chosen account.</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 mb-12 mb-sm-0">
                      <div className="service-first-grid">
                        <img src={First} alt="service-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="commercial-host-main" data-aos="fade-up">
              <div className="container">
                <div className="row mb-4">
                  <h2>Commercial hosts</h2>
                  <p style={{textAlign: 'justify'}}>
                    Join our company platform and immediately access a large variety of customers waiting to
                    rent your
                    vehicles!
                  </p>
                  <p style={{textAlign: 'justify'}}>
                    If you are in the vehicles rental business, you can expand your reach for new and
                    additional
                    customers after
                    creating a business account with us.
                  </p>
                  <p style={{textAlign: 'justify'}}>
                    Join Vumah today and start expanding your business via the services we provide on our
                    platform. Our
                    verified
                    users cannot wait to get in touch with you!
                  </p>
                  <p style={{textAlign: 'justify'}}>
                    The only thing you will need to start, as a business, is to provide your own insurance
                    cover for the
                    customers renting your vehicles through our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="ready-host-main" data-aos="fade-up">
              <div className="container">
                <div className="ready-host-inner">
                  <div className="row mb-4">
                    <div className="col-lg-6">
                      <div className="service-step-content text-center text-lg-left">
                        <h2>Ready to host ?</h2>
                        <p style={{textAlign: 'justify'}}>
                          Create a listing thats lifts your hosting style - we'll give you tips to
                          make your
                          place shne.
                          start now and finish any time
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                      <a className="host-btn common-btn" href="#open-sign-up-modal" data-toggle="modal">HOST NOW</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
