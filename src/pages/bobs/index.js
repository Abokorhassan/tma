import React from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/rca-nrca.png";
import img2 from "../../assets/images/rca-sica.png";
import img3 from "../../assets/images/vica_logo_2018.png";
import img4 from "../../assets/images/rca-vrca.png";

const Index = () => {
  return (
    <>
      {/* <!-- section bobs --> */}
      <section className="bg-white py-5 top-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="py-">
                (BOBS) Tender Market Africa Online Bidding for Subcontractors
              </h2>
              <p className="lead py-2">
                The Tender Market Africa Online Bidding for Subcontractors
                (BOBS) is a system for the reception of secured Bids from Trade
                Contractors. It enables those receiving the Bids to obtain firm
                quotations in writing and with adequate time to compile their
                General Contractor Bids completely and accurately. BOBS
                streamlines the process for those with stringent security and
                compliance requirements.
              </p>
              <hr className="divider" />
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="/#" className="btn btn-primary m-3">
                    BOBS Active Project Listing
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/#" className="btn btn-primary">
                    BOBS Help Resource
                    <small>(Including: how to a submit BOBS Bid)</small>
                  </a>
                </li>
              </ul>
              <p className="lead py-5">
                Looking for archived BOBS projects that are closed?{" "}
                <a href="/#">Click Here</a>
              </p>
            </div>

            {/* <!-- right side links --> */}
            <div className="col-lg-4">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/features" className="nav-link">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    // href="getaccount.html"

                    to="/getAccount"
                    className="nav-link"
                  >
                    Get an Account
                  </Link>
                </li>
                <hr className="divider" />
                <h6>BOBS</h6>
                <li>
                  <Link className="nav-link" to="/projects">
                    BOBS Project Listings
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/bobs">
                    BOBS Help Resources
                  </Link>
                </li>
                <li>
                  <a className="nav-link" href="/#">
                    Archived Projects
                  </a>
                </li>
                <hr className="divider" />
                <li>
                  <a href="/#" className="nav-link">
                    Post a Project
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    Company
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    Contact
                  </a>
                </li>
                <p className="lead">Help</p>
                <li>
                  <a href="/#" className="nav-link">
                    Upcoming Webinar
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    Latest Update
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    Post a Project
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    BOBS Help
                  </a>
                </li>
                <li>
                  <a href="/#" className="nav-link">
                    Help Videos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!--client logos --> */}
      <section className="bg-white text-light text-center p-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <a href="/#">
                <img src={img1} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img2} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img3} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img4} className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
