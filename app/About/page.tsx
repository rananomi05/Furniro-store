// so we can use any client-side interactivity later

import React from 'react';
import image13 from '../Components/Assets/Rectangle25.png';
import bgImage from '../Components/Assets/Rectangle1.png'

import Navbar from '../Components/Navbar/Navbar';
import Link from 'next/link';
import Footer2 from '../Components/Footer/Footer2';
import Footer from '../Components/Footer/Footer';

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="bg-white text-gray-800">
                <div
                    className="font-Poppins relative w-full h-[200px] sm:h-[250px] md:h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage.src})` }}
                >
                    <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#000000] font-bold">
                        About
                    </h1>
                    <h1 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000]">
                        Home {">"} <span className="">About</span>
                    </h1>
                </div>

                {/* About Content */}
                <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
                    {/* Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                        <p className="mb-6 text-gray-600 leading-relaxed">
                            Funiro is an innovative furniture brand dedicated to bringing high-quality,
                            stylish, and affordable pieces into every home. We combine
                            modern design with traditional craftsmanship to offer our
                            customers products that last for years.
                        </p>

                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="mb-6 text-gray-600 leading-relaxed">
                            To transform living spaces by making furniture shopping easy,
                            inspiring, and accessible. We strive to provide exceptional
                            service, on-trend designs, and unbeatable value.
                        </p>

                        <Link href="../Shop">
                            <button className="w-max bg-[#B88E2F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9a7725] transition">
                                Shop Now
                            </button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="ml-17">
                        <img src={image13.src} className=" w-[540px]  h-[440px] " />

                    </div>
                </section>

                {/* Stats / Highlights */}
                <section className="bg-[#F9F1E7] py-12">
                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <h3 className="text-4xl font-bold text-[#B88E2F]">10+</h3>
                            <p className="text-gray-600">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-[#B88E2F]">50k+</h3>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-[#B88E2F]">500+</h3>
                            <p className="text-gray-600">Unique Products</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold text-[#B88E2F]">100%</h3>
                            <p className="text-gray-600">Quality Guarantee</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-6xl mx-auto px-4 py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Refresh Your Home?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Browse our latest collections and find the perfect piece for your
                        living space today.
                    </p>
                    <Link href="../Shop">
                        <button className="bg-[#B88E2F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#9a7725] transition">
                            Explore Our Shop
                        </button>
                    </Link>
                </section>
            </div>
            <Footer2 />
            <Footer />
        </div>
    );
}
