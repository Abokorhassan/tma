import React from "react";

import img1 from "../../assets/images/rca-nrca.png";
import img2 from "../../assets/images/rca-sica.png";
import img3 from "../../assets/images/vica_logo_2018.png";
import img4 from "../../assets/images/rca-vrca.png";

const Index = () => {
  return (
    <>
      {/* <!--client logos 1 --> */}
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

      {/* <!-- plans section --> */}
      <section className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header bg-primary text-white text-center">
                  BROWSE
                </div>
                <div className="card-body">
                  <h1 className="card-title display-3 text-center">
                    <span className="lead">$</span> 0{" "}
                    <span className="lead">per month</span>
                  </h1>
                  <p className="card-text lead">
                    Access the basic features of every project and see what
                    BidCentral has to offer.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Projects
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Bid Calendar
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Opportunity Matching
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Advanced Search
                    </li>
                    <li className="text-muted">
                      <i className="fa fa-minus" aria-hidden="true"></i>{" "}
                      Unlimited Full Project Access*
                    </li>
                    <li className="text-muted">
                      <i className="fa fa-minus" aria-hidden="true"></i>{" "}
                      Planroom Project Documents*
                    </li>
                    <li className="text-muted">
                      <i className="fa fa-minus" aria-hidden="true"></i> Project
                      & Document Update Notifications*
                    </li>
                    <li className="text-muted">
                      <i className="fa fa-minus" aria-hidden="true"></i> Tender
                      Awards*
                    </li>
                    <li className="text-muted">
                      <i className="fa fa-minus" aria-hidden="true"></i>{" "}
                      Contractor Directory
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Post a Project
                    </li>
                  </ul>
                  <a href="/#" className="btn btn-primary rounded">
                    CREATE AN ACCOUNT
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header bg-danger text-white text-center">
                  PREMIUM – ANNUALLY
                </div>
                <div className="card-body">
                  <h1 className="card-title display-3 text-center text-danger">
                    <span className="lead">$</span> 875{" "}
                    <span className="lead">per month</span>
                  </h1>
                  <p className="card-text lead">
                    Access the basic features of every project and see what
                    BidCentral has to offer.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Projects
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Bid Calendar
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Opportunity Matching
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Advanced Search
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Unlimited Full Project Access*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Planroom Project Documents*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Project & Document Update Notifications*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Tender Awards*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Contractor Directory
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Post a Project
                    </li>
                  </ul>
                  <a href="/#" className="btn btn-primary">
                    BUY ANNUAL
                  </a>
                  <span className="text-danger p-2">
                    *association members receive a 60% discount (details below)
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header bg-primary text-white text-center">
                  PREMIUM – MONTHLY
                </div>
                <div className="card-body">
                  <h1 className="card-title display-3 text-center text-danger">
                    <span className="lead">$</span> 75{" "}
                    <span className="lead">per month</span>
                  </h1>
                  <p className="card-text lead">
                    Access the basic features of every project and see what
                    BidCentral has to offer.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Projects
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Bid Calendar
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Opportunity Matching
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Advanced Search
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Unlimited Full Project Access*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Planroom Project Documents*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Project & Document Update Notifications*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Tender Awards*
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Contractor Directory
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-primary"
                        aria-hidden="true"
                      ></i>{" "}
                      Post a Project
                    </li>
                  </ul>
                  <a href="/#" className="btn btn-primary">
                    BUY MONTHLY
                  </a>
                </div>
              </div>
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
