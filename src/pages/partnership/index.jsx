import React from 'react';

export default function Partnership() {
  return (
    <section class="partnership-main position-relative padd-bottom-60">
      <div class="banner-slider mb-5 d-flex align-items-center justify-content-center">
        <div class="banner-slider-text text-center" data-aos="fade-up">
          <h2>Grow with us</h2>
        </div>
      </div>
      <div class="container">
        <div class="partnership-text mb-sm-4 mb-lg-5 text-center" data-aos="fade-up">
          <p>
            <b>Here at Vumah, we build partnerships with businesses that share our values, bring new ideas, and create great experiences.</b>
          </p>
        </div>
        <div class="row pt-4">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="partnership-text text-center text-lg-left pr-lg-5" data-aos="fade-up">
              <p class="mb-4">
                Vumah is a vehicle rental platform which provides
                flexibility, variety and convenience providing the
                most vehicle options for visitors to create the best
                experience possible for their ventures. As we expand.
                more vehicle types will be available on the platform.
                and soon allowing vehicle rentals of all types on our
                platform
              </p>
              <p>
                We understand the importance of partnering and
                networking with companies who share our vision in
                making travelling the best experience it can be and
                sees the potential for the vehicle rental industry to
                make this happen. We are open to being in contact
                with all organizations within the travel and tourism
                industry, including insurance companies and will get
                back to you shortly.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="partner-form" data-aos="fade-up">
              <h2 class="mb-5 text-center">Get in touch</h2>
              <div class="contact-form-field mb-3">
                <input type="text" placeholder="First Name" />
              </div>
              <div class="contact-form-field mb-3">
                <input type="text" placeholder="Last Name" />
              </div>
              <div class="contact-form-field mb-3">
                <input type="text" placeholder="Business Name" />
              </div>
              <div class="contact-form-field mb-3">
                <input type="text" placeholder="Email Address" />
              </div>
              <div class="contact-form-field mb-5">
                <textarea placeholder="Message"></textarea>
              </div>
              <div class="contact-form-field submit-contact text-center">
                <input type="Submit" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
