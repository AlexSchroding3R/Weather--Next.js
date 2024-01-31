"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Weather_fun from "@/components/Weather";
import { BsSearch } from "react-icons/bs";

export default function Home() {
    const [weather, setweather] = useState(null);
    const [city, setcity] = useState("");
    const [error, seterror] = useState(null);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c70f6b597e5a3d6548daaa74ae820c95`;
    
    const Submitchange = async () => {
        try {
            const response = await axios.get(url);

            if (response.data.cod === "404") {
                seterror("City NOt Found");
                setweather(null);
            } else {
                seterror(null);
                setweather(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
            seterror("City Not Found LMao");
            setweather(null);
        }
        // setcity("");
    };

    return (
        <div className="absolute sm:p-2 w-full top-0 left-0 bottom-0 right-0 h-full bg-black/45">
            <div>
                <Image
                    src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    layout="fill"
                    className="object-cover "
                    style={{ zIndex: -1 }}
                />

                <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white">
                    <form
                        id="new"
                        name="fr"
                        onSubmit={(e) => {
                            e.preventDefault();
                            Submitchange();
                        }}
                        className=" flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-600 text-white rounded-2xl ">
                        <div>
                            <input
                                type="text"
                                placeholder="Search city"
                                value={city}
                                onChange={(e) => {
                                    setcity(e.target.value), console.log("sdf");
                                }}
                                className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-gray-400"
                            />
                        </div>
                        <button type="submit">
                            <BsSearch size={25} />
                        </button>
                    </form>
                </div>
            </div>
            {error ? (
                <div className="text-white text-center mt-60 text-9xl">{error}</div>
            ) : (
                weather && <Weather_fun key={weather.name} data={weather} />
            )}
        </div>
    );
}
