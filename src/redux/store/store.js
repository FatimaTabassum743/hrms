// any store
'use client'
import { configureStore } from '@reduxjs/toolkit';
import professionalDetailsReducer from '../slices/slice';

export const store = configureStore({
  reducer: {
    professionalDetails: professionalDetailsReducer,
  },
});