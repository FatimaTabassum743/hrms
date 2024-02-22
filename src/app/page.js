"use client"
import Form from '../components/employees/addemp/documents/ProfessionalInfo'
import React from 'react'
import {Provider} from 'react-redux'
import {store} from '../redux/store/store'
import ProfessionalInfo from '../components/employees/addemp/documents/ProfessionalInfo'
const page = () => {
  return (
     <Provider store={store}>
      <ProfessionalInfo/>
       </Provider> 
  )
}

export default page