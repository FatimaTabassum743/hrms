// any slice
// slices/professionalDetailsSlice.js
'use client'
import { createSlice } from '@reduxjs/toolkit';

export const professionalDetailsSlice = createSlice({
  name: 'professionalDetails',
  initialState: {
    uanNumber: '',
    pfNumber: '',
    selectedOption:'',
  },
  reducers: {
    updateProfessionalDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    setDropdownOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { updateProfessionalDetails, setDropdownOption } = professionalDetailsSlice.actions;

export const selectProfessionalDetails = (state) => state.professionalDetails;

export default professionalDetailsSlice.reducer;
