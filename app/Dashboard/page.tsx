"use client";


import { useSession ,signOut} from "next-auth/react";

import React from "react";
import Link from "next/link";
import bgImage from '../Components/Assets/Rectangle1.png';

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import Navbar from "../Components/Navbar/Navbar";
import Footer2 from "../Components/Footer/Footer2";
import Footer from "../Components/Footer/Footer";
import LoginPage from "../login/page";

// Sample data (replace with real API / hooks)
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4000 },
  { name: "May", sales: 6500 },
  { name: "Jun", sales: 7000 },
  { name: "Jul", sales: 6000 },
];

const orders = [
  { id: 101, customer: "Ali Raza", total: 12000, status: "Processing" },
  { id: 102, customer: "Sara Khan", total: 8500, status: "Completed" },
  { id: 103, customer: "Omar Ahmed", total: 4500, status: "Pending" },
  { id: 104, customer: "Aisha",
    total: 3000, status: "Cancelled" },
];

export default function DashboardPage(){
     const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>
    <LoginPage />

  </p>;

  return (
    <div>
        <Navbar />
         <div
                className="font-Poppins relative w-full h-[200px] sm:h-[250px] md:h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#000000] font-bold">
                    Dashboard
                </h1>
                <h1 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000]">
                    Home {">"} <span>Dashboard</span>
                </h1>
            </div>
            
        
       <button
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="mt-4 ml-300 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    <div className="min-h-screen mb-10 bg-gray-50 text-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r px-6 py-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center font-bold text-white">F</div>
            <div>
              <h3 className="font-semibold">Furniro</h3>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>

          <nav className="flex-1">
            <ul className="space-y-1">
              <li>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-6H3v6z" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium">Overview</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium">Products</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#374151" strokeWidth="1.5"/></svg>
                  <span className="text-sm font-medium">Orders</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 20v-6" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 6v.01" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <span className="text-sm font-medium">Customers</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto text-xs text-gray-500">
            v1.0 • Furniro
          </div>
        </aside>

        {/* Main area */}
        <main className="flex-1 p-6 lg:p-10">
          {/* Topbar */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Welcome back, Admin</h2>
              <p className="text-sm text-gray-500 mt-1">Heres whats happening with your store today.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center bg-white border rounded-lg px-3 py-2 gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#9CA3AF" strokeWidth="1.5"/></svg>
                <input placeholder="Search orders, products..." className="text-sm outline-none" />
              </div>

              <button className="flex items-center gap-2 bg-white border px-3 py-2 rounded-lg">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span className="text-sm">Export</span>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">A</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <motion.div initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">Sales</div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">Rs. 124,500</div>
                  <div className="text-xs text-gray-500">+12% from last month</div>
                </div>
                <div className="text-green-500 text-sm font-semibold">▲ 12%</div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">Orders</div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">325</div>
                  <div className="text-xs text-gray-500">8 new today</div>
                </div>
                <div className="text-blue-500 text-sm font-semibold">+8%</div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">Customers</div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">1,240</div>
                  <div className="text-xs text-gray-500">New: 24</div>
                </div>
                <div className="text-purple-500 text-sm font-semibold">+3%</div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500">Conversion</div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">2.8%</div>
                  <div className="text-xs text-gray-500">Better than last week</div>
                </div>
                <div className="text-yellow-500 text-sm font-semibold">+0.5%</div>
              </div>
            </motion.div>
          </div>

          {/* Charts + Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Sales (last 7 months)</h3>
              <div style={{ width: "100%", height: 260 }}>
                <ResponsiveContainer>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#C49732" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Orders Overview</h3>
              <div style={{ width: "100%", height: 200 }}>
                <ResponsiveContainer>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#C49732" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent orders table */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Recent Orders</h3>
              <Link href="#" className="text-sm text-blue-600">View all</Link>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 text-left">Order</th>
                    <th className="p-3 text-left">Customer</th>
                    <th className="p-3 text-left">Total</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">#{o.id}</td>
                      <td className="p-3">{o.customer}</td>
                      <td className="p-3">Rs. {o.total.toLocaleString()}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          o.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : o.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : o.status === "Pending"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-red-100 text-red-800"
                        }`}>{o.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
    <Footer2 />
    <Footer />
    </div>
  );
}
