
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white mt-20">
            <div className="flex flex-col md:flex-row justify-around items-start gap-10 p-6">

                <div>
                    <h1 className="text-2xl font-bold">Funiro.</h1>
                    <p className="text-base mt-6 text-[#9F9F9F]">
                        400 University Drive Suite 200 Coral Gables,
                    </p>
                    <p className="text-base text-[#9F9F9F]">FL 33134, USA</p>
                </div>


                <div>
                    <h2 className="text-base  text-[#9F9F9F] mb-5">Links</h2>
                    <ul className="space-y-9">
                        <li className="text-base">Home</li>
                        <li className="text-base">Shop</li>
                        <li className="text-base">About</li>
                        <li className="text-base">Contact</li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-base text-[#9F9F9F] mb-5">Help</h2>
                    <ul className="space-y-9">
                        <li className="text-base">Payment Options</li>
                        <li className="text-base">Returns</li>
                        <li className="text-base">Privacy Policies</li>
                    </ul>
                </div>


                <div>
                    <h2 className="text-base text-[#9F9F9F] mb-5">Newsletter</h2>
                   <div className="flex flex-col sm:flex-row sm:items-center">
  <input
    type="text"
    placeholder="Enter your email address"
    className="w-full sm:w-[250px] h-[45px] border-b border-gray-400 focus:outline-none pl-3"
  />
  <button className="mt-3 sm:mt-0 sm:ml-4 underline text-base">
    SUBSCRIBE
  </button>
</div>

                </div>
            </div>

            <div className="border-t border-gray-200 py-4 pl-20">
                <p className="text-sm sm:text-center font-semibold">
                    2025 Funiro. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

