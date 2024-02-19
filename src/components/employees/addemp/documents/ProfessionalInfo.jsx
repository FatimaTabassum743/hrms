// 
'use client'

// ProfessionalForm.js
import React, { useState } from 'react';
//import global css

import { useDispatch, useSelector } from 'react-redux';
import { updateProfessionalDetails, selectProfessionalDetails,setDropdownOption,
  setDropdownOptionDesig,setDropdownOptionwork,setDropdownOptionReport} from '../../../../redux/slices/slice.js';
  import Link from 'next/link';
  import { Form, Input, Button, Select, Col, Row,t } from 'antd';


const { Option } = Select;
const numberRegex = /^[0-9]{5,}$/; // Ensure at least 5 digits

const ProfessionalInfo = () => {
  
  const dispatch = useDispatch();
  const professionalDetails = useSelector(selectProfessionalDetails);


  const handleChange = (name, value) => {
    dispatch(updateProfessionalDetails({ [name]: value }));
  };

 
  const handleSelectChange = (value) => {
    dispatch(setDropdownOption(value));
  };
  const handlework=(value)=>{
    dispatch(setDropdownOptionwork(value));
  }
  const handleDesig=(value)=>{
    dispatch(setDropdownOptionDesig(value));
  }
  const handlReportk=(value)=>{
    dispatch(setDropdownOptionReport(value));
  }

  const handleSubmit = () => {
    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('professionalDetails')) || {};

    // Merge existing data with the new data
    const newData = [{ ...existingData, ...professionalDetails }];

    // Save the merged data to local storage
    localStorage.setItem('professionalDetails', JSON.stringify(newData));
    alert("Data stored in local storage");
  };
  const { selectedDepartment} = useSelector(selectProfessionalDetails);
  const { selectedDesignation} = useSelector(selectProfessionalDetails);
  const { selectedReportingMngr} = useSelector(selectProfessionalDetails);
  const { selectedworkLocation} = useSelector(selectProfessionalDetails);

return (
<div>
<Form
   requiredMark={false}
  style={{ padding: "50px", border: "2px solid #eee" }}
  className='m-20 w-[90%] '
  onFinish={handleSubmit}
   >
  <Form.Item 
   className='w-[49.3rem] hide-required-star'
    label="Designation"
    
    name="designation"
    rules={[{ required: true, message: 'Please select a designation.' }]}
  >
    <Select
 
      className='rounded-none h-11 font-semibold mb-5 ml-[11%]'
      placeholder="Select Designation" value={selectedDesignation}
      onChange={handleDesig}
    >
      <Option value="option10">Option 10</Option>
      <Option value="option11">Option 11</Option>
      <Option value="option12">Option 12</Option>
    </Select>
  </Form.Item>

  <Row gutter={16}>
    <Col span={12}>
      <Form.Item
        label="PF No (Optional)"
        name="pfNumber"
        rules={[
          { required: true, message: 'Enter Your PF Number' },
          { pattern: numberRegex, message: 'Please enter at least 5 digits for PF number.' },
        ]}
    
      >
        <Input
          className='h-11 ml-12 w-[85%]'
          type="text"
          value={professionalDetails.pfNumber}
          onChange={(e) => handleChange('pfNumber', e.target.value)}
        />
      </Form.Item>
    </Col>
    <Col span={12}>
      <Form.Item
        label="UAN No (Optional)"
        name="uanNumber"
        rules={[
          { required: true, message: 'Enter Your UAN Number' },
          { pattern: numberRegex, message: 'Please enter at least 5 digits for UAN number.' },
        ]}
    
      >
        <Input
          className='h-11 w-[85%]'
          type="text"
          value={professionalDetails.uanNumber}
          onChange={(e) => handleChange('uanNumber', e.target.value)}
        />
      </Form.Item>
    </Col>
  </Row>

  <Form.Item
  className='w-[49rem]'
    label="Department"
    name="department"
    rules={[{ required: true, message: 'Please select a department.' }]}
  >
    <Select placeholder="Select Department" className='ml-20 rounded-none mb-5 font-semibold h-11' value={selectedDepartment} onChange={handleSelectChange}>
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  </Form.Item>

  <Form.Item
    className='w-[54rem]'
    label=" Direct Reporting Manager"
    name="reportingManager"
    rules={[{ required: true, message: 'Please select a reporting manager.' }]}
  >
    <Select placeholder="Select Reporting Manager" className='h-11 ml-15 rounded-none mb-5' value={selectedReportingMngr} onChange={handlReportk}>
      <Option value="option4">Option 4</Option>
      <Option value="option5">Option 5</Option>
      <Option value="option6">Option 6</Option>
    </Select>
  </Form.Item>

  <Form.Item
  className='w-[50rem]'
    label="Work Location"
    name="workLocation"
    rules={[{ required: true, message: 'Please select a work location.' }]}
  >
    <Select placeholder="Select Work Location" className=' ml-[10%] h-11 rounded-none' onChange={handlework} value={selectedworkLocation} >
      <Option value="option7">Option 7</Option>
      <Option value="option8">Option 8</Option>
      <Option value="option9">Option 9</Option>
    </Select>
  </Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit" className='rounded-none w-[40%] ml-80 h-12 bg-blue-600'>
      Next
    </Button>
  </Form.Item>
  <Form.Item>
   <Button type="primary" htmlType="button" className='rounded-md w-20 h-8 bg-blue-600'>
    <Link href="/ProfReview">
      Review
      </Link>
    </Button>
  </Form.Item>
</Form>

</div>

  );
};

export default ProfessionalInfo;
