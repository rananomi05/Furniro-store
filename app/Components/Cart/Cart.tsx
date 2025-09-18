"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increment, decrement } from "@/store/slices/CartSlice";
import { RootState } from "@/store/Store";
import bgImage from "../Assets/Rectangle1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer2 from "../Footer/Footer2";
import Footer from "../Footer/Footer";
import Link from "next/link";



export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: number) => {
  dispatch(removeFromCart(id.toString()));
};

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      {/* Hero */}
      <div
        className="font-Poppins relative w-full h-[200px] sm:h-[250px] md:h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#000000] font-bold">
          Cart
        </h1>
        <h1 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000]">
          Home {">"} <span>Cart</span>
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row md:ml-20 mb-10">
        {/* Table */}
        <div className="overflow-x-auto mt-10 mx-4 md:ml-10">
          <table className="min-w-full">
            <thead className="bg-[#F9F1E7] h-[55px]">
              <tr>
                <th className="px-4 py-3 text-left">Product</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-center">Quantity</th>
                <th className="px-4 py-3 text-left">Subtotal</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-gray-500"
                  >
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="px-4 py-3 flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <span className="font-medium text-[#9F9F9F]">
                        {item.name}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#9F9F9F]">
                      Rs. {item.price.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center items-center space-x-3">
                        <button
                          onClick={() => dispatch(decrement(item.id))}
                          className="px-2 py-1 border border-gray-300"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increment(item.id))}
                          className="px-2 py-1 border border-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
              {cartItems.length > 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="text-right font-bold px-4 py-3"
                  >
                    Total:
                  </td>
                  <td className="px-4 py-3 font-bold">
                    Rs. {total.toFixed(2)}
                  </td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Totals box */}
        <div
          className="
            w-full max-w-[300px] h-auto bg-[#F9F1E7] 
            mx-4 md:ml-12 mb-20 mt-10 md:mt-30 text-black p-6 rounded-md
          "
        >
          <h1 className="text-[32px] font-semibold text-center mb-6">
            Cart Totals
          </h1>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Subtotal</span>
              <span>Rs.{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-[#B88E2F] text-lg">
                Rs. {total.toFixed(2)}
              </span>
            </div>
            <Link href="/CheakOut">
              <button className="mt-6 w-full border border-black text-black py-2 rounded">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer2 />
      <Footer />
    </div>
  );
}
