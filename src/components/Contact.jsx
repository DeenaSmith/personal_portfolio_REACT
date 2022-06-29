
import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full f-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-400">Get in touch!</p>
                    <p className="py-6">Complete the form below and I'll get back to you ASAP.</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/70c2ecfe-ec06-4088-af89-1df02b9e25ef"
                            method="POST" className="flex flex-col w-full md:w-1/2">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <textarea 
                            name="message"
                            placeholder="Type message here!"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <button className="text-white bg-gradient-to-b from-purple-900 to-pink-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's chat!</button>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;