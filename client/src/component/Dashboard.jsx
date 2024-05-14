import React from "react";
import { movies } from "./data";
import { slots } from "./data";
import { seats } from "./data";
import logo from "../img/logo.png"

const Dasboard = () => {
    return(
        <>
        <div className="container mx-auto">
        <img src={logo} alt="" width={170}/>
            <div className="maincontainer flex justify-evenly">
                <div className="leftcontainer w-3/4">
                    <div className="moviesSection border border-black p-5 rounded-md my-3">
                        <h3 className="text-2xl font-bold">Select Movie</h3>
                        {   
                            movies.map((movie) => {
                                return(
                                    <>
                                    <button className="px-4 py-3 border border-black m-3 hover:bg-red-500 hover:text-white rounded-lg font-semibold">{movie}</button>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="TimeSection border border-black p-5 rounded-md my-3">
                        <h3 className="text-2xl font-bold">Select Time Slot</h3>
                        {   
                            slots.map((slot) => {
                                return(
                                    <>
                                    <button className="px-4 py-3 border border-black m-3 hover:bg-red-500 rounded-lg hover:text-white font-semibold">{slot}</button>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="TimeSection border border-black p-5 rounded-md my-3">
                        <h3 className="text-2xl font-bold">Select Seat</h3>
                        <div className="flex">
                        {   
                            seats.map((seat) => {
                                return(
                                    <>
                                    <button className="p-1 border border-black m-3 hover:bg-red-500 rounded-lg hover:text-white font-medium">{seat} <span><input className="flex w-14 border border-black rounded-md" type="number" required/></span></button>
                                    </>
                                )
                            })
                        }
                        </div>
                    </div>
                    <button className=" bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-400">Submit</button>
                </div>
                <div className="rightcontainer w-3/12">
                    <div className="border border-black p-5 rounded-md m-3">
                        <h3 className="text-2xl font-bold mb-2">Last Booking Details:</h3>
                        <div className="bookingDetails ">
                            <div className="font-semibold">Seats:</div>
                            <div className="font-semibold">Slot:</div>
                            <div className="font-semibold">Movie:</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dasboard