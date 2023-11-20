import React from 'react'
import Link from "next/link";

function Project() {
  return (
    <section className="project-area-two">
    <div className="container-fluid gap-wide">
      <div className="row no-gap justify-content-center">
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="project-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="assets/images/projects/project1.jpg"
                alt="Project"
              />
            </div>
            <div className="content">
              <span className="number">01</span>
              <h3>Web Design &amp; Development</h3>
              <p>
                With over 20 years of experience and 850+ employees board
                Iflexion serves
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="theme-btn">
                  View Details <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="project-item wow fadeInUp delay-0-4s">
            <div className="image">
              <img
                src="assets/images/banner/seo.jpg"
                alt="Project"
              />
            </div>
            <div className="content">
              <span className="number">02</span>
              <h3>Web Design &amp; Development</h3>
              <p>
                With over 20 years of experience and 850+ employees board
                Iflexion serves
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="theme-btn">
                  View Details <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="project-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img
                src="assets/images/projects/project3.jpg"
                alt="Project"
              />
            </div>
            <div className="content">
              <span className="number">03</span>
              <h3>Web Design &amp; Development</h3>
              <p>
                With over 20 years of experience and 850+ employees board
                Iflexion serves
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="theme-btn">
                  View Details <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="project-item wow fadeInUp delay-0-8s">
            <div className="image">
              <img
                src="assets/images/projects/project4.jpg"
                alt="Project"
              />
            </div>
            <div className="content">
              <span className="number">04</span>
              <h3>Web Design &amp; Development</h3>
              <p>
                With over 20 years of experience and 850+ employees board
                Iflexion serves
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="theme-btn">
                  View Details <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Project
