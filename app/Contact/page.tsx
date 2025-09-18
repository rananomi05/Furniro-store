"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "../Components/Navbar/Navbar";
import bgImage from "../Components/Assets/Rectangle1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../Components/Footer/Footer2";
import Footer from "../Components/Footer/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted!");
    };

    return (
        <div className="font-Poppins">
            <Navbar />

            {/* Hero */}
            <div
                className="relative w-full h-[200px] sm:h-[250px] md:h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#000000] font-bold">
                    Contact
                </h1>
                <h1 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000]">
                    Home {">"} <span>Contact</span>
                </h1>
            </div>

            {/* Intro */}
            <h1 className="text-[28px] sm:text-[36px] font-bold text-center pt-10">
                Get In Touch With Us
            </h1>
            <p className="text-center text-[14px] sm:text-[16px] text-[#9F9F9F] pt-5 mx-auto max-w-[900px] px-4">
                For More Information About Our Product & Services. Please Feel Free To Drop Us
                An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-12 py-10">
                {/* Contact info */}
                <div className="space-y-10 ml-4 md:ml-20">
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
                        <span className="ml-2 text-[20px] sm:text-[24px] font-semibold"> Address</span>
                        <p className="text-[14px] sm:text-[16px] pt-4 max-w-[220px]">
                            236 5th SE Avenue, New York NY10000, United States
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className="text-xl" />
                        <span className="ml-2 text-[20px] sm:text-[24px] font-semibold"> Phone</span>
                        <p className="text-[14px] sm:text-[16px] pt-4">Mobile: +(84) 546-6789</p>
                        <p className="text-[14px] sm:text-[16px] pt-2">Hotline: +(84) 546-6789</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faClock} className="text-xl" />
                        <span className="ml-2 text-[20px] sm:text-[24px] font-semibold">
                            {" "}
                            Working Time
                        </span>
                        <p className="text-[14px] sm:text-[16px] pt-4">Monday-Friday: 9:00 - 22:00</p>
                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl p-6 sm:p-8 mt-10 bg-white shadow max-w-full"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Abc"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Abc@def.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="This is optional"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Hi! I’d like to ask about..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white py-2 px-4 rounded-md bg-[#B88E2F] font-semibold"
                    >
                        Submit
                    </button>
                </form>
            </div>

            <Footer2 />
            <Footer />
        </div>
    );
}

