import React from 'react'
import Link from "next/link";

function Banner() {
  return (
    <section
    className="hero-area-two bgs-cover"
    style={{ backgroundImage: "url(assets/images/banner/dark.jpg)" }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <div className="hero-content-two pt-155 pb-160 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
            <span className="sub-title">Proven Ecommerce Strategies that help you get more leads</span>
            <h1>Boost Your Sales, Get New Customers</h1>
            <p className='text-white'>Elevate your brand with our customized solutions for growth, engagement, and conversions. Partner with us to captivate audiences, increase revenue, and propel your business to new heights</p>
            <Link legacyBehavior href="">
              <a className="theme-btn mt-25 wow fadeInUp delay-0-6s">
                Call Now For Results <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8 col-10 col-small">
        <img src="assets/images/banner/sale.png" alt="BG Lines" />
          {/* <div className="hero-gradient-circle">
            <div className="icon">
              <img
                src="assets/images/banner/sale.jpg"
                alt="Icon"
              />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="row justify-content-center">
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
          <div className="feature-item wow fadeInUp delay-0-2s">
            <div className="icon">
              <i className="flaticon-consulting" />
            </div>
            <h5>
              <Link legacyBehavior href="service-details">
                Consulting
              </Link>
            </h5>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
          <div className="feature-item wow fadeInDown delay-0-2s">
            <div className="icon">
              <i className="flaticon-project-management" />
            </div>
            <h5>
              <Link legacyBehavior href="service-details">
                Management
              </Link>
            </h5>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
          <div className="feature-item wow fadeInUp delay-0-2s">
            <div className="icon">
              <i className="flaticon-ui" />
            </div>
            <h5>
              <Link legacyBehavior href="service-details">
                Application
              </Link>
            </h5>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
          <div className="feature-item wow fadeInDown delay-0-2s">
            <div className="icon">
              <i className="flaticon-coding-1" />
            </div>
            <h5>
              <Link legacyBehavior href="service-details">
                Development
              </Link>
            </h5>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
          <div className="feature-item wow fadeInUp delay-0-2s">
            <div className="icon">
              <i className="flaticon-seo-1" />
            </div>
            <h5>
              <Link legacyBehavior href="service-details">
                SEO Optimize
              </Link>
            </h5>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
          <div className="feature-item wow fadeInDown delay-0-2s">
            <div className="icon">
              <i className="flaticon-rocket" />
            </div>
            <h5>
              <Link legacyBehavior href="service-details">
                Business Dev
              </Link>
            </h5>
          </div>
        </div>
      </div> */}
    </div>
    <div className="hero-shapes-two">
      <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
    </div>
  </section>
  )
}

export default Banner
