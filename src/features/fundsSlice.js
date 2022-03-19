import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const endpoints = [
  "https://api.mfapi.in/mf/100121",
  "https://api.mfapi.in/mf/100362",
  "https://api.mfapi.in/mf/100371",
  "https://api.mfapi.in/mf/100872",
  "https://api.mfapi.in/mf/120828",
];

let fundsData;

axios
  .all(endpoints.map((endpoint) => axios.get(endpoint)))
  .then((data) => (fundsData = data));
// console.log(fundsData);

const initialState = {
  values: fundsData,
};

const fundsSlice = createSlice({
  name: "funds",
  initialState,
  reducers: {
    getFunds: (state) => {
      return state;
    },
  },
});

export const { getFunds } = fundsSlice.actions;

export default fundsSlice.reducer;
