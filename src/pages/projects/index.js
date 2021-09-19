import React from "react";

import img1 from "../../assets/images/vcc.jpg";

const Index = () => {
  return (
    <>
      {/* <!-- project  list --> */}
      <section className="bg-white top-margin">
        <div className="container">
          <h2 className="p-2">
            Tender Market Africa Portal: BOBS
            <span className="d-grid d-flex justify-content-sm-end test">
              <a href="/#" className="btn btn-primary">
                BOBS Help Resources
              </a>
            </span>
          </h2>
          <p className="lead">
            The Tender Market Africa Online Bidding for Subcontractors (BOBS) is
            a system for the reception of secured Bids from Trade Contractors.
            It enables those receiving the Bids to obtain firm quotations in
            writing and with adequate time to compile their General Contractor
            Bids completely and accurately. BOBS streamlines the process for
            those with stringent security and compliance requirements.
          </p>
          <hr className="divider" />
        </div>
      </section>

      {/* <!-- Bid post section --> */}
      <section className="bg-white">
        <div className="container">
          <h2>Open BOBS Projects</h2>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={img1}
                  className="img-fluid rounded-start"
                  alt="bid post"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    (2021-004056) BCCA VCC Pharmacy Renovation Project
                  </h5>
                  <p className="card-text">
                    Prebid Interpretation published on 08-23-2021 [
                    <a href="/#">View Document</a>]
                  </p>
                  <p className="card-text">
                    Trade: <span className="trade1">Electrical</span>
                    <span className="trade2">Mechanical</span>
                  </p>
                  <p className="card-text">
                    <b>Project Closes On: </b>
                    <small className="text-muted">
                      {" "}
                      2021-09-13 at 15:00 pt
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light py-3">
              <ul className="list-inline right-align">
                <li className="list-inline-item">
                  <a href="/#" className="btn btn-primary">
                    <i className="fa fa-file"></i> Documents
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/#" className="btn btn-primary">
                    <i className="fa fa-lock"></i> Lauch BOBS Wizard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
