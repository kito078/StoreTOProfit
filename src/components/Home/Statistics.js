import React from 'react'
import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("@/src/components/Counter"), {
    ssr: false,
  });

function Statistics() {

 
      
  return (
    <section className="statistics-area mt-150 rel z-2">
    <div className="container">
      <div
        className="statistics-inner bgs-cover text-white p-80 pb-20"
        style={{
          backgroundImage: "url(assets/images/banner/bg-pro.jpg)",
        }}
      >
        <div className="row align-items-xl-start align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">Company Statistics</span>
                <h2>Learn About Our Comapny Statistics</h2>
              </div>
              <Link legacyBehavior href="">
                <a className="read-more">
                  Learn More <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="row">
              <div className="col-xl-4 col-small col-6">
                <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                  <i className="flaticon-target" />
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop={25}
                  >
                    <Counter end={25} />
                  </span>
                  <span className="counter-title">Project Complate</span>
                </div>
              </div>
              <div className="col-xl-4 col-small col-6">
                <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                  <i className="flaticon-target-audience" />
                  <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop="98.9"
                  >
                    <Counter end={98.9} decimals={1} />
                  </span>
                  <span className="counter-title">Clinets Happy</span>
                </div>
              </div>
              <div className="col-xl-4 col-small col-6">
                <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                  <i className="flaticon-customer-experience" />
                  <span
                    className="count-text plus"
                    data-speed={3000}
                    data-stop="35.6"
                  >
                    <Counter end={5.6} decimals={1} />
                  </span>
                  <span className="counter-title">Years Experience</span>
                </div>
              </div>
              {/* <div className="col-xl-3 col-small col-6">
                <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                  <i className="flaticon-medal" />
                  <span
                    className="count-text k-plus"
                    data-speed={3000}
                    data-stop={63}
                  >
                    <Counter end={63} />
                  </span>
                  <span className="counter-title">Award Winning</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Statistics
