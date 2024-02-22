'use client'
import React from 'react'
import Link from 'next/link'
import {useSelector}  from "react-redux";
import { selectProfessionalDetails } from '@/redux/slices/slice';
import {List,Button,Form} from "antd"
const ProfessionalRev = () => {
    const professionalDetails = useSelector(selectProfessionalDetails);
    // const existingData = JSON.parse(localStorage.getItem('professionalDetails')) || {};

    // // Merge existing data with the new data
    // const newData = [{ ...existingData, ...professionalDetails }];

    // // Save the merged data to local storage


    // console.log(newData);
    const data=professionalDetails[professionalDetails.length-1]
   function handleEdit(e){

   }
    return (
  
         <div className='w-[80%] m-[40px]' style={{ border: '2px solid #eee', padding: '20px' }}>
  <h1 className='text-2xl font-semibold'>Professional Information</h1>
<Form.Item>
   <Button type="primary"  onClick={handleEdit} htmlType="submit" className='rounded-md w-16 h-8 bg-blue-600 flex float-end'>
    <Link href="/">
      Edit
      </Link>
    </Button>
  </Form.Item>
        <List
          itemLayout="horizontal"
          dataSource={[professionalDetails]} // Wrap professionalDetails in an array to iterate over it
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <div className='grid grid-cols-2 gap-16'>
                    <div className='flex flex-col gap-4'>
                      <h1 className='font-extralight text-xl'>Designation</h1>
                      <h1 className='text-xl font-semibold'>{item.selectedDesignation}</h1>
                      <div className='w-[210%] bg-gray-200 h-[1px]'></div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h1 className='font-extralight text-xl'>PF Number</h1>
                      <h1 className='text-xl font-semibold'>{item.pfNumber}</h1>
                
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h1 className='font-extralight text-xl'>UAN Number</h1>
                      <h1 className='text-xl font-semibold'>{item.uanNumber}</h1>
                      <div className='w-[210%] bg-gray-200 h-[1px]'></div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h1 className='font-extralight text-xl'>Employee ID</h1>
                      <h1 className='text-xl font-semibold'>{item.employeeId}</h1>
                     
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h1 className='font-extralight text-xl'>Department</h1>
                      <h1 className='text-xl font-semibold'>{item.selectedDepartment}</h1>
                  
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h1 className='font-extralight text-xl'>Direct Reporting Manager</h1>
                      <h1 className='text-xl font-semibold'>{item.selectedReportingMngr}</h1>
                      {/* <div className='w-[210%] bg-gray-200 h-[1px]'></div> */}
                    </div>
         

                    <div className='flex flex-col gap-4 '>
                      <h1 className='font-extralight text-xl'>Work Location</h1>
                      <h1 className='text-xl font-semibold'>{item.selectedworkLocation}</h1>
                  
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h1 className='font-extralight text-xl'>Date</h1>
                      <h1 className='text-xl font-semibold'>{item.selectedDate}</h1>
                  
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>

  );
};
export default ProfessionalRev