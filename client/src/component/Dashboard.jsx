import React, { useState } from "react";
import { movies } from "./data";
import { slots } from "./data";
import { seats } from "./data";
import logo from "../img/logo.png"

const Dasboard = () => {
    const [movie, setMovie] = useState()
    const [slot, setSlot] = useState()
    const [seat, setSeat] = useState()

    const bookMovie = async (e) => {
        if (!movie || !slot || !seat) {
            window.alert('Invalid data: All fields are required');
            return;
        }

        try{
            const res = await fetch("/booking" , {
                method: 'POST',
                headers:{
                    "Content-Type" :"application/json"
                },
                body: JSON.stringify({
                    movie,
                    slot,
                    seats
                })
               })
               const data = await res.json()
               console.log(data)

               if (res.ok) {
                window.alert('Booking successful');
                // Optionally, reset form fields
                setMovie("");
                setSlot("");
                setSeat("");
            } else {
                window.alert('Error booking movie: ' + data.message);
            }               
        } catch(e){
            console.error('Error:', e);
            window.alert('An error occurred while booking the movie')
        }

    }

    console.log(seat)
    console.log(movie)
    console.log(slot)
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
                                    <button onClick={(e) => setMovie(e.target.value)} className="px-4 py-3 border border-black m-3 hover:bg-red-500 hover:text-white rounded-lg font-semibold" value={movie}>{movie}</button>
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
                                    <button onClick={e => setSlot(e.target.value)} className="px-4 py-3 border border-black m-3 hover:bg-red-500 rounded-lg hover:text-white font-semibold" value={slot}>{slot}</button>
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
                                    <div  className="p-1 border border-black m-3 hover:bg-red-500 rounded-lg hover:text-white font-medium">{seat} <input onChange={e => setSeat(e.target.value +`.${seat}`)} className="appearance-none border border-black rounded w-14 flex text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" required/></div>
                                    </>
                                )
                            })
                        }
                        </div>
                    </div>
                    <button onClick={bookMovie} className=" bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-400">Submit</button>
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