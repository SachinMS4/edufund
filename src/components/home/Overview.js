import { compose } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

function Overview() {
  const { id } = useParams();
  const [fund, setFund] = useState();
  const baseURL = " https://api.mfapi.in/mf/"; //100121
  useEffect(() => {
    axios
      .get(`${baseURL}${id}`)
      .then((resp) => setFund(resp))
      .catch((err) => compose.log(err));
  }, [baseURL, id]);

  console.log(fund);

  return (
    <div>
      Overview
      <Nav />
    </div>
  );
}

export default Overview;
