import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Card.css";

function List({ fundsData }) {
  return (
    <div className="container">
      {fundsData.map((fund, i) => (
        <Link
          to={`/overview/${fund.data.meta.scheme_code}`}
          key={fund.data.meta.scheme_code}
          style={{ color: "inherit", textDecoration: "inherit" }}>
          <div key={i} className="card">
            <h3>{fund.data.meta.scheme_name}</h3>
            <div className="fund-attributes">
              <div className="fund-attribute">
                <h3>Scheme Code</h3>
                <h3>{fund.data.meta.scheme_code}</h3>
              </div>
              <div className="fund-attribue">
                <h3>Scheme Category</h3>
                <h3>{fund.data.meta.scheme_category}</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default List;
