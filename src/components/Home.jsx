import React from 'react'
import HeroImage from "../assets/heroImage.jpeg"
import {TbArrowRightTail} from "react-icons/tb"

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">Hey there! I'm a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">I'm a budding software developer coming from the Aviation world that is proficient in JavaScript, MERN, APIs, and more. I'm looking to take on new projects and applications that challenge the boundaries of code!
                    </p>
                    <div>
                    <button className="group text-white w-fir px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-900 to-pink-500 cursor-pointer">
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                        <TbArrowRightTail size={25} className="ml-1" />
                        </span>
                    </button>
                    </div>
                </div>

                <div>
                    <img src={HeroImage} alt="developer profile" className ="rounded-2xl mx-auto w-2/3 md:w-full" />

                </div>
            </div>
        </div>
    )
};


export default Home;