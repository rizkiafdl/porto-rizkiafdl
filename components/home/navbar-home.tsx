"use client";
import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

export const NavbarHome = () => {
    const [isClick, setIsClick] = useState<Boolean>(false);

    const toggleNavbar = (): void => {
        setIsClick(!isClick);
    };

    return (
        <>
            <nav className='bg-black z-50 relative'> {/* z-index 50 to ensure it appears on top */}
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <a href='/' className='text-white font-bold text-3xl'>
                                    rizkiafdl.
                                </a>
                            </div>
                        </div>
                        {/* Desktop Navbar */}
                        <div className='hidden md:block'>
                            <div className='ml-4 flex items-center space-x-4'>
                                <a href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                    Home
                                </a>
                                <a href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                    About
                                </a>
                                <a href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                    Services
                                </a>
                                <a href='/' className='text-white hover:bg-white hover:text-black rounded-lg p-2'>
                                    Contact
                                </a>
                            </div>
                        </div>
                        {/* Mobile Sidebar */}
                        {isClick ? (
                            <div className='md:hidden absolute top-16 right-0 h-40 w-32 bg-white rounded-b-xl stext-center text-center z-50'>
                                <a href='/' className='block text-black hover:bg-black hover:text-white rounded-sm p-2'>
                                    Home
                                </a>
                                <a href='/' className='block text-black hover:bg-black hover:text-white rounded-sm p-2'>
                                    About
                                </a>
                                <a href='/' className='block text-black hover:bg-black hover:text-white rounded-sm p-2'>
                                    Services
                                </a>
                                <a href='/' className='block text-black hover:bg-black hover:text-white rounded-sm p-2'>
                                    Contact
                                </a>
                            </div>
                        ) : null}
                        {/* Hamburger Button */}
                        <div className='md:hidden flex items-center'>
                            <button
                                className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                onClick={toggleNavbar}
                            >
                                <IoIosMenu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
