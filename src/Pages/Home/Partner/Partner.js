import React from "react";
import "./Partner.css";
import partner1 from "../../../images/Partner/basis.png";
import partner2 from "../../../images/Partner/bimanbd.png";
import partner3 from "../../../images/Partner/iata-logo.png";
const Partner = () => {
  return (
    <div>
      <h2 className="partner-header p-2 m-2 mx-auto">
        Recognized partner
      </h2>

      <div class="container mt-5 text-center partner" id="Shop">
        <div class="container p-3 mt-5 mb-5 rounded shadow bg-body">
          <div class="row row-cols-1 row-cols-md-3 ">
            <div class="  mx-auto col">
              <div class="">
                <img src={partner1} alt=""/>
              </div>
            </div>

            <div class="  mx-auto col ">
              <div class="">
                <img src={partner2} alt=""/>
              </div>
            </div>
            <div class="  mx-auto col ">
              <div class="">
                <img src={partner3} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
