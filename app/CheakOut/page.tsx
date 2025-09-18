'use client';

import React, { useState } from 'react';
import bgImage from '../Components/Assets/Rectangle1.png';
import Navbar from '../Components/Navbar/Navbar';
import Footer2 from '../Components/Footer/Footer2';
import Footer from '../Components/Footer/Footer';


interface CheckoutFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    zip: string;
}

export default function CheckoutPage() {
    const [formData, setFormData] = useState<CheckoutFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        zip: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle checkout submit
        console.log('Checkout data:', formData);
    };

    return (
        <div>
            <Navbar />
            <div
                className="font-Poppins relative w-full h-[200px] sm:h-[250px] md:h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#000000] font-bold">
                    Checkout
                </h1>
                <h1 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000]">
                    Cart {">"} <span>Cheakout</span>
                </h1>
            </div>
            <div className="max-w-[1350px] mx-auto px-4 py-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Billing Details */}
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                placeholder="example@domain.com"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                placeholder="+92 300 1234567"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-1">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                placeholder="Street Address"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                    placeholder="City"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                    placeholder="Country"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-1">
                                    ZIP
                                </label>
                                <input
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                    placeholder="12345"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-md font-semibold mt-4 hover:bg-[#a07c28] transition"
                        >
                            Place Order
                        </button>
                    </form>

                    {/* Order Summary */}
                    <div className="bg-[#F9F1E7] rounded-2xl p-8 h-fit shadow-md">
                        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                        <div className="space-y-4 text-gray-700">
                            <div className="flex justify-between">
                                <span>Product 1 x 1</span>
                                <span>Rs. 25,000</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Product 2 x 2</span>
                                <span>Rs. 50,000</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold">
                                <span>Subtotal</span>
                                <span>Rs. 75,000</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>Rs. 75,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
            <Footer />
        </div>
    );
}
