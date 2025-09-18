'use client';

import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can add your login logic here
        console.log({ email, password });
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center bg-[#F9F1E7] px-4">

                <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Login to <span className="text-[#B88E2F]">Funiro</span>
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="rounded text-[#B88E2F]" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-[#B88E2F] hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#9a7725] transition"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm mt-6">
                        Don’t have an account?{' '}
                        <a href="/register" className="text-[#B88E2F] hover:underline">
                            Create one
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
