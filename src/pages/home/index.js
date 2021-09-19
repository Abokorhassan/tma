import React from "react";

import img1 from "../../assets/images/slide1.jpg";
import img2 from "../../assets/images/customers_logo_bar@2x-1.png";
import img3 from "../../assets/images/rca_logos_bw@2x.png";
import img4 from "../../assets/images/projects.jpg";
import img5 from "../../assets/images/icon_search-80x80.png";
import img6 from "../../assets/images/icon_megaphone-80x80.png";
import img7 from "../../assets/images/icon_updates-80x80.png";
import img8 from "../../assets/images/test.png";
import img9 from "../../assets/images/rca-nrca.png";
import img10 from "../../assets/images/rca-sica.png";
import img11 from "../../assets/images/vica_logo_2018.png";
import img12 from "../../assets/images/rca-vrca.png";

const Index = () => {
  return (
    <>
      {/* <!--slide images showcase--> */}
      <section className="text-light text-center b-2 top-margin-slide">
        <div
          id="carousel-slide"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel-slide"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel-slide"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel-slide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel-slide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* <!--client logos --> */}
      <section className="bg-white text-light text-center p-4">
        <div className="container">
          <div
            id="customer-logo-slide"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- constructin section--> */}
      <section className="bg-white text-dark text-center">
        <h1 className="text-dark py-4">
          Construction procurement has never been easier
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={img4} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 py-5">
              <h3>Thousands of Projects at your Fingertips</h3>
              <p className="lead">
                Browse for pre-bid, public and private project opportunities
                using advanced search tools, opportunity matching, and automated
                notifications when new projects are posted. With Tender Market
                Africa you’ll never run out of projects to bid on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Opportunity section--> */}
      <section className="bg-white text-center py-5">
        <h1 className="">Find your next opportunity</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={img5} className="img-fluid" alt="" />
              <h2 className="py-2">Easily Find Projects</h2>
              <p className="lead">
                Gain insight into current, future and awarded bidding
                opportunities with quick and easy access to accurate, complete
                project information and documents. View the categorized
                documents, download, print and order the plans you need when you
                need them.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={img6} className="img-fluid" alt="" />
              <h2 className="py-2">Automatic Notifications</h2>
              <p className="lead">
                Subscribe to keep track of projects, stay ahead of deadlines
                through instant notifications of addenda, site meeting and
                project updates. Keep track of important to-do’s with our
                built-in reminder system.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={img7} className="img-fluid" alt="" />
              <h2 className="py-2">Opportunity Matching</h2>
              <p className="lead">
                Get new project opportunities delivered right to your inbox when
                projects that match your keywords get posted. No need to keep
                checking for new projects with this handy feature that emails
                you daily for new projects in your region or those that suit
                your specifications.
              </p>
            </div>
          </div>
          <a href="/#" className="btn btn-primary">
            Get Started for Free
          </a>
        </div>
      </section>

      {/* <!--newsletter section --> */}
      <section className="bg-dark text-white py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Sign Up For The Bid & Post Newsletter.</h1>
              <p className="lead">
                Get construction news and projects in your inbox every month.
              </p>
              <div className="container">
                <form action="#" method="GET">
                  <div className="row py-2">
                    <div className="col-lg-6 py-2">
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-lg-6 py-2">
                      <input
                        type="text"
                        className="form-control"
                        name="lname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-lg-6 py-2">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-lg-6 py-2">
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 py-2">
                      <button type="submit" className="btn btn-primary btn-md">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-sm-6">
              <img src="images/test.png" className={img8} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!--testemonial from customers --> */}
      <section className="bg-light text-center py-3">
        <h6>WHAT OUR CUSTOMERS HAVE TO SAY</h6>
        <center>
          <hr size="3" width="150" />
        </center>
        {/* <!-- carousel slide--> */}
        <div
          id="testemonial-slide"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="container">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h5 className="py-2">
                  “Tender Market Africa is the first site I go to when looking
                  for jobs to bid. It’s easy to find opportunities that are
                  applicable to me as a general contractor in Northern BC. If
                  you want to be up to date on current projects and all bidding
                  opportunities, then you need to be on Bid Central.”
                </h5>
                <h5>Jeff Skuggedal</h5>
                <small>
                  Estimator/Construction Manager, Viking Construction Ltd.
                </small>
              </div>
              <div className="carousel-item">
                <h5 className="py-2">
                  “I have been using Tender Market Africa for the past 15 years.
                  The quality and quantity of the content is superior to other
                  platforms that I have used and the customer service, located
                  within each RCA office, is second to none.”
                </h5>
                <h5>Michael Fawcett</h5>
                <small>Geotechnical Product Manager, Brock White Canada.</small>
              </div>
              <div className="carousel-item">
                <h5>
                  “Tender Market Africa is the best site for getting complete
                  access to all available projects including private ones that
                  I’m invited to. I dropped other sites because everything I
                  need is here.
                </h5>
                <h5>Daryl Michell</h5>
                <small>Michell Excavating Limited.</small>
              </div>
              <div className="carousel-item">
                <h5>
                  “In my opinion, Tender Market Africa access has allowed our
                  company to successfully bid on and win more projects, when
                  compared to success rates when bidding using other platforms.”
                </h5>
                <h5>Mike Fawcett</h5>
                <small>Geotechnical Product Manager, Brock White Canada</small>
              </div>
            </div>
            {/* <!-- carousel buttons with testemonial--> */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testemonial-slide"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testemonial-slide"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Tender secition --> */}
      <section className="bg-white text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Be part of BC's Tender Market Africa largest marketplace.</h1>
            </div>
            <div className="col-lg-6">
              <h1 className="display-3 text-primary">10,000+</h1>
              <small className="lead">Contractors in Directory</small>
              <h1 className="display-3 text-primary">50,000+</h1>
              <small className="lead">Total Projects Listed</small>
              <h1 className="display-3 text-primary">$25 Billion</h1>
              <small className="lead">Total Dollars Tendered</small>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- get started section --> */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <p className="lead">Join over 10,000 GCs, subs, and owners</p>
          <h1 className="display-5 py-2">Ready to get started?</h1>

          <a href="/#" className="btn btn-primary">
            Get an Account
          </a>
          <a href="/#" className="btn btn-info">
            Request a Demo
          </a>
        </div>
      </section>

      {/* <!--client logos --> */}
      <section className="bg-white text-light text-center p-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <a href="/#">
                <img src={img9} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img10} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img11} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img12} className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
