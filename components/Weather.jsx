import React from "react";
import Image from "next/image";

const Weather_fun = ({ data }) => {
    return (
        <div className="relative flex flex-col justify-between max-w-[500px] w-full m-auto text-gray-300 h-[90vh] p-4">
            <div className="relative flex sm:gap-14 gap-7 sm:mt-20 mt-7">
                <div className="flex flex-col items-center">
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt="/"
                        width="100"
                        height="100"
                    />
                    <p className="text-2xl"> {data.weather[0].main}</p>
                </div>
                <p className="sm:text-9xl  text-8xl"> {(data.main.temp - 273.15).toFixed(1)}°</p>
            </div>
            <div className="bg-black/40 relative p-8 rounded-md text-gray-400 sm:mb-0 mb-14 ">
                <p className="font-bold text-2xl text-center pb-6">Weather in {data.name}</p>
                <div className="flex justify-between text-center ">
                    <div>
                        <p className="font-bold text-2xl">{(data.main.feels_like - 273.15).toFixed(2)}°</p>
                        <p className="text-xl">Feels like</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">{data.main.humidity}%</p>
                        <p className="text-xl">Humidity</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)}MPH</p>
                        <p className="text-xl">Wind</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather_fun;
