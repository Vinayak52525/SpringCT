import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [{ name: "vin", number: "1234567890", address: "xyz" }],
  reducers: {
    addUser(state, action) {
      return [...state, action.payload];
    }
  }
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
