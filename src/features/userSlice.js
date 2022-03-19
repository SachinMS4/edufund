import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      email: "guest@gmail.com",
      password: "12345",
      dob: "10-03-2000",
      gender: "male",
      name: "Guest",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => {
      return state;
    },
    addUser: (state, action) => {
      state.values.push(action.payload);
    },
  },
});

export const { getUsers, addUser } = userSlice.actions;

export default userSlice.reducer;
