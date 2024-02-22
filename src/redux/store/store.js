// any store
'use client'
import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from '../slices/slice';

 export const store = configureStore({
  reducer: {
    professionalDetails: sliceReducer,
  },
});