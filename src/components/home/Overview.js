import { compose } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import "../../styles/Overview.css";
import FundChart from "./FundChart";

function Overview() {
  const { id } = useParams();
  const [fund, setFund] = useState([]);
  const baseURL = " https://api.mfapi.in/mf/"; //100121

  useEffect(() => {
    axios
      .get(`${baseURL}${id}`)
      .then((resp) => setFund([resp]))
      .catch((err) => compose.log(err));
  }, [baseURL, id]);

  return (
    <div>
      {fund.length > 0 ? (
        <div className="container">
          <FundChart fundData={fund} />
          {fund.map((fund, i) => (
            <div key={fund.data.meta.scheme_code}>
              <div key={i} className="overview">
                <h3>{fund.data.meta.scheme_name}</h3>
                <div className="fund-attributes">
                  <div className="fund-attribute">
                    <h3>Scheme Code: </h3>
                    <h3>{fund.data.meta.scheme_code}</h3>
                  </div>
                  <div className="fund-attribute">
                    <h3>Scheme Category: </h3>
                    <h3>{fund.data.meta.scheme_category}</h3>
                  </div>
                  <div className="fund-attribute">
                    <h3>Fund House: </h3>
                    <h3>{fund.data.meta.fund_house}</h3>
                  </div>
                  <div className="fund-attribute">
                    <h3>Scheme Type: </h3>
                    <h3>{fund.data.meta.scheme_type}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}

      <Nav />
    </div>
  );
}

export default Overview;
