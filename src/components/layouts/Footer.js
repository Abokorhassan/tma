function Footer() {
  return (
    <>
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Sign Up For The Bid & Post Newsletter.</h1>
              <p>
                Get construction news and projects in your inbox every month.
              </p>
            </div>
            <div className="col-lg-6">
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
                      <button
                        type="submit"
                        className="btn btn-primary btn-md justify-content-md-left"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- row 2 --> */}
          <div className="row py-5">
            <div className="col-md-3">
              <hr />
              <p className="text-danger">Tender Market Africa</p>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="/#"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#">
                    Project Opportunities
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <hr />
              <p className="text-danger">Help & Support</p>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="/#"
                  >
                    Getting Started
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#">
                    Help Centre
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <hr />
              <p className="text-danger">Company</p>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link text-white active"
                    aria-current="page"
                    href="/#"
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#">
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/#">
                    Privacy Statement
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <hr />
              <p className="text-danger">Company</p>
              <span>
                <a href="/#">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </span>
              <span>
                <a href="/#">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </span>
              <span>
                <a href="/#">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </span>
              <span>
                <a href="/#">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </span>
            </div>
          </div>

          {/* <!--copy right text and address area--> */}
          <div className="col-lg-12">
            <p>
              &copy; 2021 right reserved Tender Market Africa,{" "}
              <a
                // href="https://ngwana.africa/"
                href="/#"
              >
                Ngwana africa,{" "}
              </a>
              Developed by <a href="/#">Saag Company Ltd.</a>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
