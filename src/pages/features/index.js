import React from "react";

import img1 from "../../assets/images/computer.png";
import img2 from "../../assets/images/computer1.png";
import img3 from "../../assets/images/computer2.png";
import img4 from "../../assets/images/computer3.png";
import img5 from "../../assets/images/icon_search-80x80.png";
import img6 from "../../assets/images/icon_megaphone-80x80.png";
import img7 from "../../assets/images/icon_updates-80x80.png";
import img8 from "../../assets/images/icon_blueprint-80x80.png";
import img9 from "../../assets/images/icon_contract-80x80.png";
import img10 from "../../assets/images/icon_directory-80x80.png";
import img11 from "../../assets/images/rca-nrca.png";
import img12 from "../../assets/images/rca-sica.png";
import img13 from "../../assets/images/vica_logo_2018.png";
import img14 from "../../assets/images/rca-vrca.png";

const Index = () => {
  return (
    <>
      {/* <!--section 1--> */}
      <section className="bg-white text-dark py-5">
        <h1 className="text-dark text-center py-5">
          Construction procurement has never been easier
        </h1>
        <div className="container">
          <hr className="divider" />
          <div className="row">
            <div className="col-lg-6">
              <img src={img1} className="img-fluid py-5" alt="" />
            </div>
            <div className="col-lg-6 py-3">
              <h3>Thousands of Projects at your Fingertips</h3>
              <ul>
                <li className="lead">
                  Browse public and private projects, pre-bid opportunities, and
                  permits{" "}
                </li>
                <li className="lead">
                  Relevant project opportunities delivered right to your inbox{" "}
                </li>
                <li className="lead">
                  Search and download tender documents and addenda{" "}
                </li>
                <li className="lead">
                  Subscribe to receive notifications for new projects, addenda,
                  and updates{" "}
                </li>
              </ul>
              <br />
              <p className="lead">
                With Tender Market Africa you’ll never run out of projects to
                bid on.
              </p>
              <button className="btn btn-primary">Get an Account</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  section 2--> */}
      <section className="bg-light text-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">
              <h4>Detailed Project Information all in One Place</h4>
              <ul>
                <li className="lead">Full project documents and plans </li>
                <li className="lead">Project bidding calendar </li>
                <li className="lead">Contractor directory</li>
                <li className="lead">
                  Automatic project update notifications{" "}
                </li>
              </ul>
              <br />
              <p className="lead">
                You’ll love how little time you spend looking for documentation
                through Tender Market Africa, with project information easily
                accessible all in one place
              </p>
              <button className="btn btn-primary">Get an Account</button>
            </div>
            <div className="col-lg-6">
              <img src={img2} className="img-fluid py-5" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!--  section 3--> */}
      <section className="bg-white text-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={img3} className="img-fluid py-5" alt="" />
            </div>
            <div className="col-lg-6 py-3">
              <h4>It’s Easy to Post your Projects</h4>
              <ul>
                <li className="lead">
                  Maintain your own private project plan room, accessible by
                  only you and those invited by you{" "}
                </li>
                <li className="lead">
                  Share to BidCentral’s public plan room to advertise to over
                  10,000 contractors{" "}
                </li>
                <li className="lead">
                  Store all of your project details and documents, deliver
                  automated addenda and updates to project invitees{" "}
                </li>
                <li className="lead">
                  Track detailed audit trails on access to your projects and
                  documents{" "}
                </li>
              </ul>
              <br />
              <button className="btn btn-primary">Get an Account</button>
            </div>
          </div>
        </div>
      </section>

      {/* <!--  section 4--> */}
      <section className="bg-light text-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 py-3">
              <h4>Find Qualified Contractors to Invite to Bid</h4>
              <ul>
                <li className="lead">Robust contractor directory</li>
                <li className="lead">
                  Connect with contractors and invite them to bid using our
                  tools{" "}
                </li>
                <li className="lead">
                  Easily message and track your invited bidders{" "}
                </li>
                <li className="lead">Real-time monitoring of who’s bidding</li>
              </ul>
              <br />
              <button className="btn btn-primary">Get an Account</button>
            </div>
            <div className="col-lg-6">
              <img src={img4} className="img-fluid py-5" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!--Opportunity 2 section--> */}
      <section className="bg-white text-center py-3">
        <h1 className="py-3">Find your next opportunity</h1>
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
        </div>
      </section>

      <section className="bg-white text-center py-3">
        <h1 className="py-4">Manage your preconstruction projects</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={img8} className="img-fluid" alt="" />
              <h2 className="py-2">Private Planrooms</h2>
              <p className="lead">
                Maintain your own private project plan room, accessible by only
                you and those invited by you. Store all of your project details,
                deliver automated addenda and updates to project invitees, track
                all your audit-trails with suppliers.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={img9} className="img-fluid" alt="" />
              <h2 className="py-2">Invitation to Bid</h2>
              <p className="lead">
                Invite your own contractors or those through our robust
                directory of 10,000+ BC companies. Easily manage the
                distribution of documentation and monitor in real-time who’s
                bidding, downloaded your documents and addenda, and viewed your
                projects.
              </p>
            </div>
            <div className="col-lg-4">
              <img src={img10} className="img-fluid" alt="" />
              <h2 className="py-2">Contractor Directory</h2>
              <p className="lead">
                Tender Market Africa has a robust Contractor Directory so you
                can easily access your preferred subcontractors – or find new
                ones when all your ‘go-to’s’ are booked up. Get more bids on
                your projects to ensure you pull together the best bid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--testemonial from customers --> */}
      <section className="bg-light text-center py-5">
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
                <img src={img11} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img12} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img13} className="img-fluid" alt="" />
              </a>
            </div>
            <div className="col-sm-3">
              <a href="/#">
                <img src={img14} className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
