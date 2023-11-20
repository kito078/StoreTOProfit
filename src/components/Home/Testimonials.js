import React from 'react'
import { testimonialSlider } from "@/src/sliderProps";
import Slider from "react-slick";

function Testimonials() {
  return (
<section className="testimonials-area-two mt-100 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">TESTIMONIALS</span>
                <h2>What Our Clients Say </h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSlider} className="testimonial-slider">
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author1.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  {/* <h4>Amazing Job</h4> */}
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                The process was smooth, the products are top-notch, and your customer service is next level! 
                </div>
                <div className="testi-footer">
                  <div className="icon">
                  {/* <i class="fas fa-comments"></i> */}
                  </div>
                  <div className="title">
                    <h4>Craig Lunga</h4>
                    {/* <span className="designation">CEO &amp; Founder</span> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="testimonial-item wow fadeInUp delay-0-4s">
              <div className="content">
                <div className="testi-header">
                  <h4>Excellent Works</h4>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                  On the other hand denounce righteous indignations and dislike
                  men who beguiled and demoralized by the charms of pleasure
                  moment blinded foresee
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    <i className="flaticon-quotation" />
                  </div>
                  <div className="title">
                    <h4>Jose T. McMichael</h4>
                    <span className="designation">Senior Manager</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="testimonial-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author4.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
                  {/* <h4>Excellent Works</h4> */}
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                The products exceeded my expectations, and the service was stellar. You've earned a loyal customer in me. Thanks a bunch!
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    {/* <i className="flaticon-quotation" /> */}
                  </div>
                  <div className="title">
                    <h4>Mlamuli Moyo</h4>
                    {/* <span className="designation">CEO &amp; Founder</span> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author4.jpg"
                  alt="Author"
                />
              </div>
              <div className="content">
                <div className="testi-header">
               
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <div className="testi-text">
                The quality, the service – everything was spot-on. Thanks to your team for making online shopping such a joy. 
                </div>
                <div className="testi-footer">
                  <div className="icon">
                    {/* <i className="flaticon-quotation" /> */}
                  </div>
                  <div className="title">
                    <h4>Hopewell Ncube</h4>
                   
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
  )
}

export default Testimonials
