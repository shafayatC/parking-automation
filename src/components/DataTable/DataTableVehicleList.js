import React, { useContext, useEffect, useState } from 'react';
import { FaSortUp, FaSortDown, FaFilter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaPrint } from "react-icons/fa";
import { userContextManager } from '../../App';
// import { UserContextManager, apiUrlContextManager } from '../../../App';


const DataTableVehicleList = ({ vehicle = [] }) => {
    const [getUserInfo, setUserInfo] = useContext(userContextManager);


    return (
                <>
                    <div className="container mx-auto ">
                        <div className='flex justify-end mb-4'>
                            {/* <div className='flex items-center justify-center cursor-pointer  p-2 gap-2 bg-blue-400 rounded-full'>
                                <p onClick={() => { window.print() }} className='text-white text-xl'><FaPrint /></p>
                            </div> */}
                        </div>
                        <div className="mx-auto rounded-lg ">
                            {/* <h2 className='printViewTitle invisible h-0'>Queue Details</h2> */}
                           <div className='  mx-auto overflow-x-scroll sm:overflow-auto mt-12 sm:mt-0'>
                           <table className="mx-auto w-full lg:w-[750px] bg-white text-[12px] border rounded-lg">
                                <thead>
                                    <tr className='h-12 text-[12px] bg-par-blue-dark text-white'>
                                        <th className="px-6 py-3  text-center  font-medium uppercase tracking-wider border-b">
                                            SL.No
                                        </th>
                                        {/* <th className="px-6 py-3  text-center  font-medium uppercase tracking-wider border-b">
                                            SO.No
                                        </th> */}
                                      
                                        <th
                                            className="px-6 py-3  text-center  font-medium  uppercase tracking-wider cursor-pointer border-b"
                                          
                                        >
                                            Customer

                                        </th>


                                        <th className="px-6 py-3  text-center  font-medium  uppercase tracking-wider border-b">
                                            Customer Address
                                        </th>
                                        {/* <th className="px-6 py-3  text-center font-medium uppercase tracking-wider border-b">
                                        Vehicle Maximum Weight
                                        </th> */}
                                
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300  text-[12px]">
                                    {vehicle.map((examinee, index) => (
                                        <tr key={index}>
                                            <td className=" py-3 whitespace-nowrap text-center">
                                                {index +1}
                                            </td>
                                            {/* <td className="pl-6 py-3 whitespace-nowrap text-center">
                                                {examinee.sl}
                                            </td>
                                           */}
                                            <td className="px-6 py-3 whitespace-nowrap text-center">
                                                {examinee.Customer}
                                            </td>
                                            <td className="px-6 py-3 whitespace-nowrap text-center">
                                                {examinee.customerAddress}
                                            </td>
                                            {/* <td className="pl-6 py-3 whitespace-nowrap text-center">
                                                {examinee.vehicleMaximumWeight}
                                            
                                            </td> */}
                                           
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                           </div>
                        </div>

                    </div>
        </>

    );
};

export default DataTableVehicleList;
