import React from 'react'

function Service() {
  return (
    <section className="services-area-two rel z-2 mt-150">
    <div className="container">
      <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
        <span className="sub-title mb-10">Need more clients</span>
        <h2>How we Generate Sales</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="assets/images/banner/store.jpg"
                alt="Service"
              />
            </div>
            <div className="content">
              <h4 className="title">Online Store</h4>
              <ul className="list-style-three">
                <li>User-Friendly Design</li>
                <li>Product Showcase</li>
                <li>Social Media Integration</li>
                <li>Speed optimization</li>
                <li>Payment processing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="service-item-two wow fadeInUp delay-0-4s">
            <div className="image">
              <img
                 src="assets/images/banner/seo.jpg"
                alt="Service"
              />
            </div>
            <div className="content">
              <h4 className="title">SEO</h4>
              <ul className="list-style-three">
                <li>Unique UI Design</li>
                <li>Clean Development</li>
                <li>Swift</li>
                <li>Kotlin</li>
                <li>React Native</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="service-item-two wow fadeInUp delay-0-6s">
            <div className="image">
              <img
                  src="assets/images/banner/ads.jpg"
                alt="Service"
              />
            </div>
            <div className="content">
              <h4 className="title">Google Ads</h4>
              <ul className="list-style-three">
                <li>Development Consulting</li>
                <li>UX/UI Cool Design</li>
                <li>Software Engineering</li>
                <li>Product Development</li>
                <li>Enhancement</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="service-item-two wow fadeInUp delay-0-8s">
            <div className="image">
              <img
                src="assets/images/services/service4.png"
                alt="Service"
              />
            </div>
            <div className="content">
              <h4 className="title">Technical Support</h4>
              <ul className="list-style-three">
                <li>Security Management </li>
                <li>Automated Deployments </li>
                <li>Incident Management(SLA)</li>
                <li>Compliance Monitoring</li>
                <li>CI/CD and DevOps</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  )
}

export default Service
