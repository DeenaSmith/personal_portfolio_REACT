import React from 'react';
import react from "../assets/icons/react.png";
import github from "../assets/icons/github.png";
import css from "../assets/icons/css.png";
import graphql from "../assets/icons/graphql.png";
import html from "../assets/icons/html.png";
import javascript from "../assets/icons/javascript.png";
import node from "../assets/icons/node.png";
import tailwind from "../assets/icons/tailwind.png";
import mongodb from "../assets/icons/mongodb.png";


const Experience = () => {

    const icons = [
        {
            id: 1,
            src: react,
            title: "React",
            style: "shadow-sky-400"
        },
        {
            id: 2,
            src: github,
            title: "GitHub",
            style: "shadow-white"
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-400"
        },
        {
            id: 4,
            src: graphql,
            title: "GraphQL",
            style: "shadow-pink-400"
        },
        {
            id: 5,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 6,
            src: tailwind,
            title: "TailwindCSS",
            style: "shadow-sky-400"
        },
        {
            id: 7,
            src: node,
            title: "NodeJS",
            style: "shadow-green-300"
        },
        {
            id: 8,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 9,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-600"
        }
        
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are some of the technologies I've worked with...</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {icons.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};


export default Experience