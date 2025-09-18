import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCircleCheck, faStore, faCertificate } from '@fortawesome/free-solid-svg-icons';

export default function Footer2() {
    return (
        <div className="w-full bg-[#F9F1E7]">
            <div className="max-w-[1340px] mx-auto px-4 py-8">
                {/* grid automatically stacks on small screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Feature 1 */}
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faTrophy} size="3x" />
                        <div>
                            <span className="text-[20px] sm:text-[25px] font-bold block">High Quality</span>
                            <p className="text-[#898989] text-[16px] sm:text-[20px]">Crafted from top materials</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
                        <div>
                            <span className="text-[20px] sm:text-[25px] font-bold block">Warranty Protection</span>
                            <p className="text-[#898989] text-[16px] sm:text-[20px]">Over 2 years</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faStore} size="3x" />
                        <div>
                            <span className="text-[20px] sm:text-[25px] font-bold block">Free Shipping</span>
                            <p className="text-[#898989] text-[16px] sm:text-[20px]">Order over 150 $</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faCertificate} size="3x" />
                        <div>
                            <span className="text-[20px] sm:text-[25px] font-bold block">24 / 7 Support</span>
                            <p className="text-[#898989] text-[16px] sm:text-[20px]">Dedicated support</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
