"use client"
import Navbar from "../Navbar/Navbar";
import { addToCart } from "@/store/slices/CartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import bgImage from '../Assets/Rectangle1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faTableCells } from '@fortawesome/free-solid-svg-icons';
import image4 from '../Assets/image1.png';
import image5 from '../Assets/Images(2).png';
import image6 from '../Assets/Images.png';
import image7 from '../Assets/image4(1).png';
import image8 from '../Assets/Image5.png';
import image9 from '../Assets/Images(1).png';
import image10 from '../Assets/Images(2).png';
import image11 from '../Assets/image8.png';
import image12 from '../Assets/Images(4).png';
import Footer2 from "../Footer/Footer2";
import Footer from "../Footer/Footer";
import { useRouter } from "next/navigation";


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;

}

export const ProductData: Product[] = [
    { id: 1, title: "Syltherine", description: "Stylish cafe chair", price: 2500000, image: image4.src, }
    , { id: 2, title: "Leviosa", description: "Stylish cafe chair", price: 2500000, image: image5.src, },
    { id: 3, title: "Lolito", description: "SLuxury big sofa", price: 7000000, image: image6.src, },
    { id: 4, title: "Respira", description: "Outdoor bar table and stool", price: 500000, image: image7.src, },
    { id: 5, title: "Grifo", description: "Night lamp", price: 1500000, image: image8.src, },
    { id: 6, title: "Muggo", description: "Small mug", price: 1500000, image: image9.src, },
    { id: 7, title: "Pingky", description: "Cute bed set", price: 7000000, image: image10.src, },
    { id: 8, title: "Potty", description: "Minimalist flower pot", price: 500000, image: image11.src, },
    { id: 9, title: "Sapot", description: "Small flower pot", price: 500000, image: image12.src, },
    { id: 10, title: "Gorilla", description: "Luxury big sofa", price: 7000000, image: image6.src, },
    { id: 11, title: "Muggo", description: "Small mug", price: 1500000, image: image9.src, },
    { id: 12, title: "Pingky", description: "Cute bed set", price: 7000000, image: image10.src, },
    { id: 13, title: "Potty", description: "Minimalist flower pot", price: 500000, image: image11.src, },
    { id: 14, title: "Sapot", description: "Small flower pot", price: 500000, image: image12.src, },
    { id: 15, title: "Pingky", description: "Cute bed set", price: 7000000, image: image10.src, },
    { id: 16, title: "Potty", description: "Minimalist flower pot", price: 500000, image: image11.src, }]

export default function Menu() {
    const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch();

    const router = useRouter();

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

    const handleProductDetail = (id: string | number) => {
        router.push(`/ProductDetails/${id}`);
    };

    return (
        <div>
            <Navbar />

            {/* Hero */}
            <div
                className="font-Poppins relative w-full h-[200px] sm:h-[250px] md:h-[316px] flex flex-col items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage.src})` }}
            >
                <h1 className="text-[28px] sm:text-[36px] md:text-[48px] text-[#000000] font-bold">
                    Shop
                </h1>
                <h1 className="text-[14px] sm:text-[16px] md:text-[20px] text-[#000000]">
                    Home {">"} <span className="">Shop</span>
                </h1>
            </div>


            {/* Filter Bar */}
            <div className="w-full bg-[#F9F1E7] py-4 px-4 sm:px-6 max-w-screen-2xl mx-auto">
                <div className="flex flex-wrap items-center gap-3">
                    <FontAwesomeIcon icon={faSliders} className="text-gray-700" />
                    <span className="text-[16px] sm:text-[20px] font-medium">Filter</span>
                    <FontAwesomeIcon icon={faTableCells} className="text-gray-700" />
                    <span className="hidden sm:inline mx-2 text-gray-400">|</span>
                    <span className="text-[16px] sm:text-[20px]">Showing 1–9 of 12 results</span>

                    <div className="flex items-center ml-auto space-x-3">
                        <span className="text-[16px] sm:text-[20px]">Show</span>
                        <div className="w-[60px] sm:w-[77px] h-[38px] bg-white flex items-center justify-center border border-gray-300 rounded-md">
                            <h1 className="text-[#9F9F9F]">16</h1>
                        </div>

                        <span className="text-[16px] sm:text-[20px]">Sort by</span>
                        <div className="w-[90px] sm:w-[120px] h-[38px] bg-white flex items-center justify-center border border-gray-300 rounded-md">
                            <h1 className="text-[#9F9F9F]">Default</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products */}
            <div className="w-full max-w-screen-2xl mx-auto px-4 mt-10 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} onClick={() => handleProductDetail(product.id)} className="relative border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 group">
                            <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-600 mb-2">{product.description}</p>
                            <p className="text-gray-800 font-bold">Rp
                                {product.price.toLocaleString('en-US', { style: 'currency', currency: 'INR' })}
                            </p>
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="px-4 py-2 bg-white text-[#B88E2F] font-medium rounded shadow"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 sm:gap-10 mb-10">
                <button className='bg-[#C49732] text-white rounded-md w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] text-[16px]'>1</button>
                <button className='bg-[#F9F1E7] text-black rounded-md w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] text-[16px]'>2</button>
                <button className='bg-[#F9F1E7] text-black rounded-md w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] text-[16px]'>3</button>
                <button className='bg-[#F9F1E7] text-black rounded-md w-[70px] sm:w-[80px] h-[50px] sm:h-[60px] text-[16px]'>Next</button>
            </div>

            <Footer2 />
            <Footer />
        </div>
    );
}
