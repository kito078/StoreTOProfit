import React from 'react'
import Link from "next/link";

function Packages() {
  return (
    <section className="price-plan-area mt-100 bgc-lighter mt-30 rmt-0 pt-220 pb-100 rpb-70 rel z-1">
    <div className="container pt-20">
      <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
        <span className="sub-title mb-15">Amazing Pricing Plan</span>
        <h2>Affordable Pricing Packages</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-md-6">
          <div className="pricing-plan-item wow fadeInUp delay-0-2s">
            <span className="badge">Best Package</span>
            <h4 className="title">Basic </h4>
            <span className="price-count">5 Services Included</span>
            <span className="price">2999</span>
            <Link legacyBehavior href="">
              <a className="theme-btn style-two">
                Choose Package <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <h5>This Plan Included :</h5>
            <ul>
              <li>
                <a href="#">Functional website</a>
              </li>
              <li>
                <a href="#">Responsive design</a>
              </li>
              <li>
                <a href="#">Web Design &amp; Development</a>
              </li>
              <li>
                <a href="#">Speed optimization</a>
              </li>
              <li>
                <a href="#">Social media icons</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="pricing-plan-item wow fadeInUp delay-0-4s">
            <span className="badge">Best Package</span>
            <h4 className="title">standard </h4>
            <span className="price-count">7 Services Included</span>
            <span className="price">3999</span>
            <Link legacyBehavior href="">
              <a className="theme-btn style-two">
                Choose Package <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <h5>This Plan Included :</h5>
            <ul>
              <li>
                <a href="#">Functional website</a>
              </li>
              <li>
                <a href="#">Responsive design</a>
              </li>
              <li>
                <a href="#">Web Design &amp; Development</a>
              </li>
              <li>
                <a href="#">Speed optimization</a>
              </li>
              <li>
                <a href="#">Social media icons</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="pricing-plan-item wow fadeInUp delay-0-6s">
            <span className="badge">Best Package</span>
            <h4 className="title">Premium</h4>
            <span className="price-count">7 Services Included</span>
            <span className="price">5999</span>
            <Link legacyBehavior href="">
              <a className="theme-btn style-two">
                Choose Package <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <h5>This Plan Included :</h5>
            <ul>
              <li>
                <a href="#">Functional website</a>
              </li>
              <li>
                <a href="#">Responsive design</a>
              </li>
              <li>
                <a href="#">Payment processing</a>
              </li>
              <li>
                <a href="#">Speed optimization</a>
              </li>
              <li>
                <a href="#">E-commerce functionality</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="price-shapes">
      <img
        className="shape one wow fadeInLeft delay-0-5s"
        src="assets/images/shapes/price-left.png"
        alt="Shape"
      />
      <img
        className="shape two"
        src="assets/images/shapes/price-right.png"
        alt="Shape"
      />
    </div> */}
  </section>
  )
}

export default Packages
