// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // example slice
import sectionReducer from "./sectionSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    section : sectionReducer
  },
});
