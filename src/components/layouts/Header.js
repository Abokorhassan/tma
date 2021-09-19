import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className="fas fa-home"></i> TMA
          </Link>
          {/* <!-- button toggle --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse right" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/getAccount" className="nav-link">
                  Get An Account
                </Link>
              </li>
              {/* <!-- dropdown menu BOBS page--> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/bobs"
                  id="navdropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  BOBS
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/bobs" className="dropdown-item">
                      BOBS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/projects">
                      BOBS Project Listings
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      BOBS Help Resources
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Archived Projects
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/post">
                  Post a Project
                </Link>
              </li>
              {/* <!-- dropdown menu compnay page--> */}
              <li className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  id="navdropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul className="dropdown-menu" aria-labelledby="navdropdown">
                  <li>
                    <a className="dropdown-item" href="/#">
                      About us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
              {/* <!-- dropdown menu help page--> */}
              <li className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  id="navdropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </a>
                <ul className="dropdown-menu" aria-labelledby="navdropdown">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Upcoming Webinar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      FAQ's
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Latest Update
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      BOBS Help
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Help Videos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <button className="btn btn-primary btn-sm lead">LOGIN</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
