
import React from 'react';
import employeeTracker from "../assets/projects/employeeTracker.jpeg";
import passwordGenerator from "../assets/projects/passwordGenerator.jpeg";
import pizzaHunt from "../assets/projects/pizzaHunt.jpeg";
import rateMyPlaylist from "../assets/projects/rateMyPlaylist.jpeg";
import profileGenerator from "../assets/projects/teamProfileGenerator.png";
import satelliteTracker from "../assets/projects/satelliteTracker.jpeg";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: rateMyPlaylist,
            url: 'https://protected-garden-77743.herokuapp.com/',
            name:"Rate My Playlist Site"
        },
        {
            id: 2,
            src: employeeTracker,
            url: 'https://github.com/DeenaSmith/employee_tracker',
            name: "Employee Tracker SRC"
        },
        {
            id: 3,
            src: profileGenerator,
            url: 'https://github.com/DeenaSmith/team_profile_generator',
            name: "Team Profile Generator"
        },
        {   
            id: 4,
            src: pizzaHunt,
            url: 'https://github.com/DeenaSmith/pizza_hunt',
            name: "Pizza Hunt SRC"
            
        },
        {
            id: 5,
            src: passwordGenerator,
            url: 'https://github.com/DeenaSmith/password_generator',
            name: "Password Generator SRC"
        },
        {
            id: 6,
            src: satelliteTracker,
            url: 'https://zurdoc8.github.io/satellite_tracker1.0/',
            name: "Satellite Tracker Site"
        }
    ];


    return (
        <div
            name="projects"
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
                    {portfolios.map(({ id, src, url, name }) => (
                        <a href={url} target="_blank" rel="noreferrer">
                            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                                <img
                                    src={src}
                                    alt="projects"
                                    className="rounded-md duration-200 hover:scale-105"
                                />
                                <div className="flex items-center justify-center">
                                    <button className="px-6 py-2 m-1 duration-200 hover:scale-105 text-2xl">
                                        {name}
                                    </button>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
};



export default Portfolio;