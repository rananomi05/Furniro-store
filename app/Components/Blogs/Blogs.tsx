"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../Assets/Rectangle1.png";
import image from "../Assets/Rectangle68.png";
import image1 from "../Assets/Rectangle68(1).png";
import image2 from "../Assets/Rectangle68(2).png";

import Footer2 from "../Footer/Footer2";
import Footer from "../Footer/Footer";

const blogPosts = [
    {
        id: 1,
        image: image.src,
        title: "Going all-in with millennial design",
        date: "14 Oct 2022",
        author: "Profile",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.",
    },
    {
        id: 2,
        image: image1.src,
        title: "Exploring new ways of decorating",
        date: "14 Oct 2022",
        author: "Profile",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.",
    },
    {
        id: 3,
        image: image2.src,
        title: "Handmade pieces that took time to make",
        date: "14 Oct 2022",
        author: "Profile",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet.",
    },
];

export default function Blogs() {
    return (
        <div className="font-Poppins">
            <Navbar />

            {/* Hero */}
            <div
                className="relative w-full h-[200px] sm:h-[250px] md:h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#000000] font-bold">
                    Blog
                </h1>
                <h1 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000]">
                    Home {">"} <span>Blog</span>
                </h1>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-10 px-4 md:px-10 lg:px-20">
                {/* Left Column - Posts */}
                <div className="flex-1">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="mb-12">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="mt-10 h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-md"
                            />
                            <div className="flex flex-wrap gap-6 text-[14px] text-[#9F9F9F] mt-4">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUserTie} className="text-xl" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUserTie} className="text-xl" />
                                    <span>{post.date}</span>
                                </div>
                            </div>
                            <h1 className="text-[20px] sm:text-[26px] md:text-[30px] font-semibold mt-6">
                                {post.title}
                            </h1>
                            <p className="mt-4 text-[14px] sm:text-[15px] text-[#9F9F9F] max-w-[700px]">
                                {post.excerpt}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column - Sidebar */}
                <div className="w-full lg:w-[300px] mt-20 flex-shrink-0">
                    <input
                        className="border border-[#9F9F9F] rounded-md h-[40px] w-full px-2"
                        placeholder="Search"
                    />
                    <h1 className="font-semibold pt-10 text-[20px] sm:text-[25px]">
                        Categories
                    </h1>
                    <ul className="text-[#9F9F9F] space-y-4 mt-4">
                        <li className="flex justify-between">
                            <span>Crafts</span> <span>2</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Design</span> <span>8</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Handmade</span> <span>7</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Interior</span> <span>1</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Wood</span> <span>6</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 gap-5 mb-20">
                <button className="bg-[#C49732] text-white rounded-md w-[50px] h-[50px] text-[16px]">
                    1
                </button>
                <button className="bg-[#F9F1E7] text-black rounded-md w-[50px] h-[50px] text-[16px]">
                    2
                </button>
                <button className="bg-[#F9F1E7] text-black rounded-md w-[50px] h-[50px] text-[16px]">
                    3
                </button>
                <button className="bg-[#F9F1E7] text-black rounded-md px-4 h-[50px] text-[16px]">
                    Next
                </button>
            </div>

            <Footer2 />
            <Footer />
        </div>
    );
}
