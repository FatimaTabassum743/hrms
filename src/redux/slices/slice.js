// any slice
'use client'
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'professionalDetails',
  initialState: {
    uanNumber: '',
    pfNumber: '',
    selectedDepartment: '',
    selectedDesignation: '',
    selectedReportingMngr: '', // Fix typo here
    selectedworkLocation: '',
  },
  reducers: {
    updateProfessionalDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    setDropdownOption: (state, action) => {
      state.selectedDepartment = action.payload;
    },
    setDropdownOptionDesig: (state, action) => {
      state.selectedDesignation = action.payload;
    },
    setDropdownOptionReport: (state, action) => {
      state.selectedReportingMngr = action.payload;
    },
    setDropdownOptionwork: (state, action) => {
      state.selectedworkLocation = action.payload;
    },
  },
});

export const { updateProfessionalDetails, setDropdownOption,setDropdownOptionDesig,setDropdownOptionwork,setDropdownOptionReport } = slice.actions;

export const selectProfessionalDetails = (state) => state.professionalDetails;

export default slice.reducer;
