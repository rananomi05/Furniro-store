

"use client"
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { addToCart } from "@/store/slices/CartSlice";
import { increment, decrement } from "@/store/slices/CartSlice";

import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Link from 'next/link'
import image from "../Assets/Group95.png"
import image1 from "../../Components/Assets/Group109.png"
import image4 from '../../Components/Assets/image1.png';
import image5 from '../../Components/Assets/Images(2).png';
import image6 from '../../Components/Assets/Images.png';
import image7 from '../../Components/Assets/image4(1).png';
import { useParams } from 'next/navigation';
import { ProductData } from '../../Components/Menu/Menu';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/Footer/Footer'


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;

}

const Product = [
    {
        id: 1,
        title: "Syltherine",
        description: "Stylish cafe chair",
        price: 2500000,
        image: image4.src,
    },
    {
        id: 2,
        title: "Leviosa",
        description: "Stylish cafe chair",
        price: 2500000,
        image: image5.src,
    },
    {
        id: 3,
        title: "Lolito",
        description: "SLuxury big sofa",
        price: 7000000,
        image: image6.src,
    },
    {
        id: 4,
        title: "Respira",
        description: "Outdoor bar table and stool",
        price: 500000,
        image: image7.src,
    }
];

export default function ProductDetails() {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setProducts(ProductData);
    }, []);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({
            id: product.id.toString(),
            name: product.title,
            price: product.price,
            quantity: 1,
            description: product.description,
            image: product.image
        }));
    };

    const params = useParams();
    const productId = Number(params.id);

    const product = ProductData.find((p) => p.id === productId);

    if (!product) {
        return (
            <div className="p-10">
                <Navbar />
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className='w-[1350px] h-[100px] bg-[#F9F1E7]'>
                <h1 className="text-[20px] pt-10 pl-14 flex items-center space-x-4">
                    <span>Home</span>
                    <span>{'>'}</span>
                    <span>Shop</span>
                    <span>{'>'}</span>
                    <span>|</span>
                    <span>{product.title}</span>
                </h1>

            </div>
            <div className="mt-10  flex flex-row space-x-20 w-[1350px] h-[600px] pl-20">

                <img src={product.image} alt="Product" className="h-[450px] rounded-lg object-cover" />


                <div className="flex flex-col ml-10">
                    <h1 className="text-[30px] font-bold mt-5">{product.title}</h1>
                    <h1 className="text-[25px] text-[#9F9F9F] font-bold mt-2">{product.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'INR',
                    })}</h1>


                    <div className="flex items-center mt-4 space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className="text-yellow-500 text-[20px]"
                            />
                        ))}
                        <span className="ml-3 text-gray-600 text-[18px]">5 Customer Reviews</span>
                    </div>


                    <p className="text-[18px] w-[600px] mt-6 leading-relaxed">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.


                    </p>


                    <p className="text-[#9F9F9F] pt-7 text-[18px]">Size</p>
                    <div className="flex mt-3 gap-2 mb-8">
                        <button className="bg-[#C49732] text-white rounded-md w-[35px] h-[35px] text-[13px] font-medium">L</button>
                        <button className="bg-[#F9F1E7] text-black rounded-md w-[35px] h-[35px] text-[13px] font-medium">XL</button>
                        <button className="bg-[#F9F1E7] text-black rounded-md w-[35px] h-[35px] text-[13px] font-medium">XS</button>
                    </div>


                    <p className="text-[#9F9F9F] text-[18px]">Color</p>
                    <div className="flex mt-3 gap-3 mb-8">
                        <button className="bg-[#816DFA] rounded-full w-[30px] h-[30px]" />
                        <button className="bg-[#000000] rounded-full w-[30px] h-[30px]" />
                        <button className="bg-[#B88E2F] rounded-full w-[30px] h-[30px]" />
                    </div>


                    <div className="flex flex-row items-center">
                        <div className="flex flex-row space-x-5 rounded-md border border-gray-900 w-[170px] h-[50px] items-center justify-center">
                            <button className="text-[30px]">-</button>
                            <span className="text-[20px] font-bold">1</span>
                            <button className="text-[30px]">+</button>
                        </div>
                        <button onClick={() => handleAddToCart(product)} className="w-[200px] h-[50px] border-2 border-gray-900 rounded-md ml-9 text-[18px] font-bold hover:bg-[#B88E2F] hover:text-white transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col mt-8 items-center space-y-5 mb-20'>
                <div className='flex flex-row space-x-20 justify-center '>
                    <h1 className='text-[22px] font-bold pl-14'>Description</h1>
                    <h1 className='text-[22px] text-[#9F9F9F] font-bold pl-14'>Additional Information</h1>
                    <h1 className='text-[22px] text-[#9F9F9F] font-bold pl-14'>Reviews [5]</h1>

                </div>
                <p className='w-[900px] text-[16px]  text-[#9F9F9F]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className='w-[900px] text-[16px]  text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                <img src={image1.src} alt="Product" className=' h-[300px] mt-5' />
            </div>
            <hr className='border border-gray-300 mb-10' />

            <h1 className='font-bold text-[36px] text-center'> Related Products</h1>
            <div className="w-[1340px] h-auto  flex flex-wrap gap-10 justify-center mt-10 mb-10">
                {Product.map((product) => (
                    <div

                        key={product.id}
                        className="relative border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 group"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-gray-800 font-bold">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                            <button onClick={() => handleAddToCart(product)} className="px-4 py-2 bg-white text-[#B88E2F] font-medium rounded shadow">
                                Add to cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Link href="../../Shop">
                <button className='border border-[#B88E2F] text-[#B88E2F] rounded-md w-[180px] h-[50px] text-[16px]  ml-[620px] mb-10'>
                    Show More
                </button>
            </Link>

            <hr className='border border-gray-300 mb-10' />
            <Footer />


        </div >
    )
}
