"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../../../constant/images';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
             const isScrolled = window.scrollY > 620; 
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-1' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="" className="flex-shrink-0 flex items-center">
                            <img src={images.Logo} alt="" className='w-15 h-12' />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center gap-2">
                            <a href="#home" className='text-lg hover:text-[#f75023] focus:text-[#f75023]'>Home</a> 
                            <a href="#about" className='text-lg hover:text-[#f75023] focus:text-[#f75023]'>About</a>
                            <a href="#projects" className='text-lg hover:text-[#f75023] focus:text-[#f75023]'>Portfolio</a>
                            <a href="#service" className='text-lg hover:text-[#f75023] focus:text-[#f75023]'>Service</a>
                            <a href="#skills" className='text-lg hover:text-[#f75023] focus:text-[#f75023]'>Skills</a>
                            <a href="#contact" className='text-lg hover:text-[#f75023] focus:text-[#f75023]'>Contact</a>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            <a href="" className="relative inline-flex items-center px-6 py-2 text-md font-medium rounded-full shadow-sm text-black border-[#f75023] border-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f75023] overflow-hidden group">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                  <a href="cv.pdf" download="cv.pdf"> Download CV</a>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 bg-[#f75023] group-hover:h-full" />
                            </a>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="sm:hidden bg-white p-2"
                        >
                            <div className="pt-2 pb-3 space-y-1">
                                <a href="#home" onClick={handleNavClick} className='block text-lg hover:text-[#f75023] focus:text-[#f75023]'>Home</a>
                                <a href="#about" onClick={handleNavClick} className='block text-lg hover:text-[#f75023] focus:text-[#f75023]'>About</a>
                                <a href="#projects" onClick={handleNavClick} className='block text-lg hover:text-[#f75023] focus:text-[#f75023]'>Portfolio</a>
                                <a href="#service" onClick={handleNavClick} className='block text-lg hover:text-[#f75023] focus:text-[#f75023]'>Service</a>
                                <a href="#skills" onClick={handleNavClick} className='block text-lg hover:text-[#f75023] focus:text-[#f75023]'>Skills</a>
                                <a href="#contact" onClick={handleNavClick} className='block text-lg hover:text-[#f75023] focus:text-[#f75023]'>Contact</a>
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="mt-3 space-y-1">
                                    <a href="/cv" className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                                        Download CV
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;