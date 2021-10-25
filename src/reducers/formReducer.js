import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formslice",
  initialState: {
    role: "admin"
  },
  reducers: {
    addFormData(state, action) {
      return { ...action.payload.data };
    }
  }
});

export const { addFormData } = formSlice.actions;

export default formSlice.reducer;
