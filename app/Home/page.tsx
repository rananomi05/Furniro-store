"use client";

import { addToCart } from "../../store/slices/CartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import bgImage from "../Components/Assets/bgimage.png";
import image1 from "../Components/Assets/Mask-Group.png";
import image2 from "../Components/Assets/Image-living-room.png";
import image3 from "../Components/Assets/image101.png";
import image4 from "../Components/Assets/image1.png";
import image5 from "../Components/Assets/Images(2).png";
import image6 from "../Components/Assets/Images.png";
import image7 from "../Components/Assets/image4(1).png";
import image8 from "../Components/Assets/Image5.png";
import image9 from "../Components/Assets/Images(1).png";
import image10 from "../Components/Assets/Images(2).png";
import image11 from "../Components/Assets/image8.png";
import image12 from "../Components/Assets/Rectangle24.png";
import image13 from "../Components/Assets/Rectangle25.png";
import image14 from "../Components/Assets/Images(3).png";

import Link from "next/link";
import Footer from "../Components/Footer/Footer";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
}

const ProductData: Product[] = [
    { id: 1, title: "Syltherine", description: "Stylish cafe chair", price: 2500000, image: image4.src },
    { id: 2, title: "Leviosa", description: "Stylish cafe chair", price: 2500000, image: image5.src },
    { id: 3, title: "Lolito", description: "Luxury big sofa", price: 7000000, image: image6.src },
    { id: 4, title: "Respira", description: "Outdoor bar table and stool", price: 500000, image: image7.src },
    { id: 5, title: "Grifo", description: "Night lamp", price: 1500000, image: image8.src },
    { id: 6, title: "Muggo", description: "Small mug", price: 1500000, image: image9.src },
    { id: 7, title: "Pingky", description: "Cute bed set", price: 7000000, image: image10.src },
    { id: 8, title: "Potty", description: "Minimalist flower pot", price: 500000, image: image11.src },
];

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setProducts(ProductData);
    }, []);

    const handleAddToCart = (product: Product) => {
        dispatch(
            addToCart({
                id: product.id.toString(),
                name: product.title,
                price: product.price,
                quantity: 1,
                description: product.description,
                image: product.image,
            })
        );
    };

    return (
        <div>
            <Navbar />

            {/* Hero */}
          <div
  className="w-full h-[566px] flex justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage.src})` }}
>
  <div
  className="
    bg-[#FFF3E3] font-poppins
    p-6 md:p-10
    w-full max-w-[550px] 
    h-auto sm:h-[180px] md:h-[343px]
    mt-55 sm:mt-[100px] md:mt-[154px]
    mx-4 md:ml-[685px] 
  "
>
  <h1 className="text-sm md:text-base">New Arrival</h1>
  <h1 className="text-3xl md:text-5xl font-bold text-[#C49732] mt-2">
    Discover Our New Collection
  </h1>
  <p className="text-sm md:text-base mt-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
    luctus nec ullamcorper mattis.
  </p>
  <button className="mt-5 w-[180px] h-[50px] bg-[#C49732] rounded-md text-white">
    Shop Now
  </button>
</div>

</div>


            {/* Browse */}
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="font-bold text-center pt-6 text-2xl md:text-3xl">Browse The Range</h1>
                <h1 className="text-center text-[#666666] text-sm md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h1>
                <div className="flex flex-col md:flex-row md:gap-8 md:justify-center">
                    {[{ img: image1.src, name: "Dining" }, { img: image2.src, name: "Living" }, { img: image3.src, name: "Bedroom" }].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center mt-10">
                            <img className="w-[300px] h-[380px]" src={item.img} />
                            <h1 className="pt-5 text-lg">{item.name}</h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Products */}
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="text-center text-3xl md:text-4xl pt-6 font-bold">Our Products</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mb-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="px-4 py-2 bg-white text-[#B88E2F] font-medium rounded shadow"
                                >
                                    Add to cart
                                </button>
                            </div>
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-[#898989] mb-2">{product.description}</p>
                            <p className="text-gray-800 font-bold">
                                {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                            </p>
                        </div>
                    ))}
                </div>

                <Link href="/Shop" className="flex justify-center">
                    <button className="border border-[#B88E2F] text-[#B88E2F] rounded-md w-[180px] h-[50px] text-[16px] mb-10">
                        Show More
                    </button>
                </Link>
            </div>

            {/* Inspiration */}
            <div className="flex flex-col lg:flex-row gap-7 pt-9 bg-[#FCF8F3] min-h-[500px] px-4 lg:px-20">
                <div className="flex flex-col mt-10 gap-4 max-w-md">
                    <h1 className="font-bold text-3xl lg:text-4xl">50+ Beautiful rooms inspiration</h1>
                    <p className="text-sm md:text-base text-[#616161]">
                        Our designer already made a lot of beautiful prototype of rooms that inspire you
                    </p>
                    <button className="w-[180px] h-[50px] mt-6 text-white bg-[#B88E2F]">Explore More</button>
                </div>
                <div
                    className="relative w-full lg:w-[340px] h-[400px] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${image12.src})` }}
                >
                    <div className="bg-white/70 text-white mt-60 mr-20 px-4 py-2 rounded">
                        <h1 className="text-[15px] text-[#616161]">01-- Bed Room</h1>
                        <h1 className="text-[28px] font-semibold text-black">Inner Peace</h1>
                    </div>
                </div>
                <div>
                    <img src={image13.src} className="w-full lg:w-[340px] h-[340px]" />
                </div>
            </div>

            {/* Hashtag */}
            <div className="max-w-screen-xl mx-auto px-4">
                <h1 className="text-[20px] font-semibold text-center pt-8">Share your setup with</h1>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">#FuniroFurniture</h1>
                <img src={image14.src} className="w-full h-auto mt-10" />
            </div>

            <Footer />
        </div>
    );
}
