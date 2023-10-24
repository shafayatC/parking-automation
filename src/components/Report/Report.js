import React from "react";

import qrcode from '../../images/barcode.jpg'

const Report = ({vehicle}) => {



    return (
        <div className="container mx-auto">
            <div >
                <div className="bg-white flex flex-col items-center mt-10">
                    {/* <img className="h-8 w-44 mb-2" src={logo} alt="" /> */}
               <div className="flex items-center gap-10">
               <div>
                <p className="text-3xl font-bold">(SO) DETAILS</p>
                </div>
                    <div className="flex justify-center pt-6">
                    <img className="w-40" src={qrcode}/>
                </div>
               </div>
                </div>
                <div>
                    <div className="flex flex-col  md:flex md:flex-row md:justify-center mx-auto mt-10 md:gap-28 gap-5 border-black border py-5 md:w-[620px] w-80  ">
                    <div className="flex md:justify-between gap-5 ml-5 md:ml-0">
                        <div>
                            <p className="font-semibold">SL/N:</p>
                            <p className="font-semibold">Date:</p>
                            <p className="font-semibold">Entry Time:</p>
                            <p className="font-semibold">Exit Time:</p>
                                                   
                           
                        </div>

                        <div>
                            <p>{vehicle.salesOrderNumber}</p>
                            <p>{vehicle.date}</p>
                            <p>{vehicle.entryTime}</p>
                            <p>{vehicle.exitTime}</p>
                        </div>

                    </div>
                    <div className="flex md:justify-between gap-5 ml-5 md:ml-0">
                        <div>
                        <p className="font-semibold">Vehicle No: </p> 
                        <p className="font-semibold">Vehicle Status: </p>
                            <p className="font-semibold">Service Type: </p>

                            <p className="font-semibold">QR Check: </p>
                        </div>

                        <div>
                        <p>{vehicle.vehicleNumber}</p>
                            <p>In Queue</p>
                            <p>Automation</p>
                           
                            <p>Done</p>
                        </div>
                    </div>
                    </div>
                </div>

                
               
              <div>
                  <div className=" md:w-[700px] mx-auto mt-60 " >
                    <hr className="mb-3"></hr>
                    <p className="text-xs text-center  mb-5"> <span className="font-bold">Address:</span> 1600 Amphitheatre Parkway Mountain View, CA 94043, USA <span className="font-bold"> Phone:</span> (650) 253-0000 <span className="font-bold">Email:</span> google@gmail.com</p>
                </div>
              </div>
            </div>

        </div>
    )
}
export default Report;