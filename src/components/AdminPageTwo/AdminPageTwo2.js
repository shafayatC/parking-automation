import React from 'react';
import Navbar from '../Navbar/Navbar';
import { parkingList } from '../FakeData/FakeData';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

const AdminPageTwo2 = () => {

    const countStockLocation = (location)=>{
        const count = parkingList.filter(car => car.stockLocation.toLowerCase() === location.toLowerCase()).length;
        return count > 0 ? count : 0;
    }


    return (
        <>
            <Navbar />
        
            <div className='container mx-auto'>
                <div className='flex justify-center mt-4'>
                    <h1 className='text-3xl font-bold'>Queue Tracking </h1>
                </div>
                <div>
                <div className='-mt-10 p-4 flex justify-center md:justify-end'>
                        <RangePicker size='small' className='p-2 w-80 text-sm bg-gray-200' defaultValue={[dayjs('2023-10-25', dateFormat), dayjs('2023-10-26', dateFormat)]} showTime />
                    </div>
                </div>
                <div className='grid  sm:grid-cols-2  lg:grid-cols-3  items-center gap-20 pt-10'>
                    <Link to={"/dashboard/so-detail/packer-1"} className="card bg border-l-2 border-green-400 border-r-8 rounded-r-full  shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-green-400 text-center">Packer 1</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-orange-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>{countStockLocation("Packer-1")}</h1>
                            </div>
                        </div>
                    </Link>

                    <Link to={"/dashboard/so-detail/packer-2"} className="card bg border-l-2 border-r-8 rounded-r-full border-green-400 shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-green-400 text-center">Packer 2</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-orange-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>{countStockLocation("Packer-2")}</h1>
                            </div>

                        </div>
                    </Link>

                    <Link to={"/dashboard/so-detail/packer-3"} className="card bg border-l-2 border-r-8 rounded-r-full border-green-400 shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-green-400 text-center">Packer 3</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-orange-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>{countStockLocation("Packer-3")}</h1>
                            </div>

                        </div>
                    </Link>

                    <Link to={"/dashboard/so-detail/warehouse-1"} className="card bg border-l-2 border-yellow-400 border-r-8 rounded-r-full shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-yellow-400 text-center">Warehouse 1</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-blue-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>{countStockLocation("warehouse-1")}</h1>
                            </div>

                        </div>
                    </Link>

                    <Link to={"/dashboard/so-detail/warehouse-2"} className="card bg border-l-2 border-yellow-400 border-r-8 rounded-r-full shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-yellow-400 text-center">Warehouse 2</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-blue-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>{countStockLocation("warehouse-2")}</h1>
                            </div>

                        </div>
                    </Link>

                    <Link to={"/dashboard/so-detail/parking"} className="card bg border-l-2 border-pink-400 border-r-8 rounded-r-full shadow-xl cursor-pointer">
                        <div className="card-body ">
                            <h2 className="font-bold text-2xl text-pink-400 text-center">Parking </h2>
                            <div className="flex justify-center">
                                {/* <button className="text-sm px-4  w-32 py-1 rounded-2xl bg-red-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>{countStockLocation("parking")}</h1>
                            </div>

                        </div>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default AdminPageTwo2;