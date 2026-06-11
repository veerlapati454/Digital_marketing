import {
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaEnvelope
} from "react-icons/fa";

import "./Home.css";

function Home() {
  return (
    <>

      <section className="hero">

        <div className="container hero-content">

          <div className="hero-left">

            <span className="tag">
              #1 Digital Marketing Agency
            </span>

            <h1>
              Grow Your Business
              With Powerful
              Digital Marketing
            </h1>

            <p>
              Increase traffic, generate leads and
              maximize revenue with our proven
              marketing strategies.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Get Started
              </button>

              <button className="secondary-btn">
                Free Consultation
              </button>
            </div>

          </div>

          <div className="hero-right">
            <div className="hero-card">
              <h2>+320%</h2>
              <p>Traffic Growth</p>
            </div>

            <div className="hero-card">
              <h2>1500+</h2>
              <p>Leads Generated</p>
            </div>

            <div className="hero-card">
              <h2>98%</h2>
              <p>Client Satisfaction</p>
            </div>
          </div>

        </div>

      </section>

      <section id="services" className="services">

        <div className="container">

          <h2 className="section-title">
            Our Services
          </h2>

          <div className="service-grid">

            <div className="service-card">
              <FaSearch />
              <h3>SEO Optimization</h3>
              <p>
                Improve search rankings and
                attract organic traffic.
              </p>
            </div>

            <div className="service-card">
              <FaBullhorn />
              <h3>Social Marketing</h3>
              <p>
                Build engagement and brand
                awareness.
              </p>
            </div>

            <div className="service-card">
              <FaChartLine />
              <h3>PPC Campaigns</h3>
              <p>
                Generate quality leads with
                targeted advertising.
              </p>
            </div>

            <div className="service-card">
              <FaEnvelope />
              <h3>Email Marketing</h3>
              <p>
                Convert visitors into loyal
                customers.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section id="stats" className="stats">

        <div className="container stats-grid">

          <div>
            <h2>500+</h2>
            <p>Projects</p>
          </div>

          <div>
            <h2>150+</h2>
            <p>Experts</p>
          </div>

          <div>
            <h2>10M+</h2>
            <p>Leads Generated</p>
          </div>

          <div>
            <h2>98%</h2>
            <p>Satisfaction</p>
          </div>

        </div>

      </section>

      <section id="testimonials" className="testimonials">

        <div className="container">

          <h2 className="section-title">
            Client Testimonials
          </h2>

          <div className="testimonial-grid">

            <div className="testimonial-card">
              <h3>Sarah Johnson</h3>
              <p>
                Their SEO strategy increased our
                website traffic by over 300%.
              </p>
            </div>

            <div className="testimonial-card">
              <h3>David Smith</h3>
              <p>
                Amazing PPC campaigns and excellent ROI.
              </p>
            </div>

            <div className="testimonial-card">
              <h3>Michael Brown</h3>
              <p>
                Highly professional team with
                measurable results.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section id="pricing" className="pricing">

        <div className="container">

          <h2 className="section-title">
            Pricing Plans
          </h2>

          <div className="pricing-grid">

            <div className="price-card">
              <h3>Starter</h3>
              <h2>$99</h2>
              <p>Monthly SEO Audit</p>
              <p>Analytics Report</p>
              <button>Choose Plan</button>
            </div>

            <div className="price-card featured">
              <h3>Professional</h3>
              <h2>$299</h2>
              <p>SEO + PPC</p>
              <p>Social Media Marketing</p>
              <button>Choose Plan</button>
            </div>

            <div className="price-card">
              <h3>Enterprise</h3>
              <h2>Custom</h2>
              <p>Complete Solution</p>
              <p>Dedicated Manager</p>
              <button>Contact Us</button>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;