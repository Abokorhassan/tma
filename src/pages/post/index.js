import React from "react";

import img1 from "../../assets/images/rca-nrca.png";
import img2 from "../../assets/images/rca-sica.png";
import img3 from "../../assets/images/vica_logo_2018.png";
import img4 from "../../assets/images/rca-vrca.png";

const Index = () => {
  return (
    <>
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
