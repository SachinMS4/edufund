import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/Footer.css";
import Nav from "./Nav";
import List from "./List";

function Home() {
  const [fundsData, setFundsData] = useState([]);

  useEffect(() => {
    const endpoints = [
      "https://api.mfapi.in/mf/100121",
      "https://api.mfapi.in/mf/100362",
      "https://api.mfapi.in/mf/100371",
      "https://api.mfapi.in/mf/100872",
      "https://api.mfapi.in/mf/120828",
    ];

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => setFundsData(data));
  }, []);

  return (
    <div className="home">
      {fundsData.length > 0 ? (
        <List fundsData={fundsData} />
      ) : (
        <h3> Loading...</h3>
      )}
      <Nav />
    </div>
  );
}

export default Home;
