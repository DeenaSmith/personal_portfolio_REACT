
import React from 'react';
import employeeTracker from "../assets/projects/employeeTracker.jpeg";
import passwordGenerator from "../assets/projects/passwordGenerator.jpeg";
import pizzaHunt from "../assets/projects/pizzaHunt.jpeg";
import rateMyPlaylist from "../assets/projects/rateMyPlaylist.jpeg";
import workdayScheduler from "../assets/projects/workdayScheduler.jpeg";
import satelliteTracker from "../assets/projects/satelliteTracker.jpeg";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: rateMyPlaylist
        },
        {
            id: 2,
            src: employeeTracker
        },
        {
            id: 3,
            src: workdayScheduler
        },
        {
            id: 4,
            src: satelliteTracker
        },
        {
            id: 5,
            src: pizzaHunt
        },
        {
            id: 6,
            src: passwordGenerator
        }
    ];


    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-10">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work!</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                            <img
                                src={src}
                                alt="projects"
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="px-6 py-2 m-1 duration-200 hover:scale-105 text-2xl">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};



export default Portfolio;