// any slice
'use client'
import { createSlice } from '@reduxjs/toolkit';

const initialState={
  data:[
  ],
  data1:{
  uanNumber: '',
  pfNumber: '',
  employeeId:'',
  selectedDepartment: '',
  selectedDesignation: '',
  selectedReportingMngr: '', // Fix typo here
  selectedworkLocation: '',
  }

}


export const slice = createSlice({
  name: 'professionalDetails',
  initialState:initialState,
  reducers: {
    updateProfessionalDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    getdata:(state,action)=>{
      state.data1=state.data.find((item)=>item.uanNumber==action.payload)
  },
 
updatedata:(state,action)=>{
state.data=state.data.map((item)=>{
  item.uanNumber===action.payload.uanNumber?action.payload:item
});
},

    // uanNumber: (state, action) => {
    //   state.uanNumber = action.payload;
    // },
    // pfNumber: (state, action) => {
    //   state.pfNumber = action.payload;
    // },
    // employeeId: (state, action) => {
    //   state.employeeId = action.payload;
    // },
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
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addToDataArray: (state) => {
      state.data.push({
        // updateProfessionalDetails:state.updateProfessionalDetails,
        uanNumber:state.uanNumber,
        pfNumber:state.pfNumber,
        employeeId:state.employeeId,
        selectedDepartment: state.selectedDepartment,
        selectedDesignation: state.selectedDesignation,
        selectedReportingMngr: state.selectedReportingMngr,
        selectedworkLocation: state.selectedworkLocation,
        selectedDate: state.selectedDate,
    });
    },
  },
});

export const { updateProfessionalDetails,uanNumber,pfNumber,employeeId, setSelectedDate,setDropdownOption,addToDataArray,setDropdownOptionDesig,setDropdownOptionwork,setDropdownOptionReport } = slice.actions;

export const selectProfessionalDetails = (state) => state.professionalDetails;

export default slice.reducer;