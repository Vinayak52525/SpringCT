import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../reducers/formReducer";
import userReducer from "../reducers/userReducer";

const store = configureStore({
  reducer: {
    form: formReducer,
    user: userReducer
  }
});

export default store;
