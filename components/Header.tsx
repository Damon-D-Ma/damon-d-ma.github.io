'use client'
import { Link } from "react-scroll";
import Image from 'next/image';
import React, { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const switchMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
      };

    return(
        <>

        <section id="navbar" className='fixed top-0 w-full z-50'>
            <nav className="bg-[#0078d7] px-2">
                <div className=" mx-auto">
                    <div className="flex justify-between text-2xl">
                        
                        <div className="flex whitespace-nowrap items-center">
                            <div className="px-2 py-3 pr-24"><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Damon Ma</Link></div>


                            <div className="hidden md:flex items-center">
                                <div className="hover:bg-[#1e43a1] px-4 py-3 transition duration-500"><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></div>
                                <div className="hover:bg-[#1e43a1] px-4 py-3 transition duration-500"><Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link></div>
                                <div className="hover:bg-[#1e43a1] px-4 py-3 transition duration-500"><Link activeClass="active" to="experience" spy={true} smooth={true} offset={0} duration={500}>Experience</Link></div>
                                <div className="hover:bg-[#1e43a1] px-4 py-3 transition duration-500"><Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></div>
                                <div className="hover:bg-[#1e43a1] px-4 py-3 transition duration-500"><Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link></div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className="hidden md:flex hover:bg-[#1e43a1] px-4 py-3 transition duration-500">
                                    
                                    <a href="https://github.com/Damon-D-Ma" target="None"><Image src="github-mark.svg" alt="GitHub Logo" className='filter brightness-0' width={32} height={32}/> </a>

                                </div>
                            <div className="hidden md:flex hover:bg-[#1e43a1] px-4 py-3 transition duration-500">
                                    
                                <a href="https://www.linkedin.com/in/damon-d-ma/" target="None"><Image src="/LI-In-Bug.png" alt="Linkedin Logo" className='filter brightness-0' width={40} height={40}/> </a>

                            </div>

                        </div>

                    
                        <div className="md:hidden justify-between items-center mobile-menu-button px-2 py-2 pt-4">
                            <button onClick={switchMobileMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            

                        </div>


                    
                    
                    
                    </div>
                    {isMobileMenuOpen &&(
                            <div className="mobile-menu md:hidden">
                            <button className="block"><div className=" py-2 px-2 text-sm hover:bg-[#1e43a1]"><Link onClick={closeMobileMenu} activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></div></button>
                            <button className="block"><div className="py-2 px-2 text-sm hover:bg-[#1e43a1]"><Link onClick={closeMobileMenu} activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link></div></button>
                            <button className="block"><div className="py-2 px-2 text-sm hover:bg-[#1e43a1]"><Link onClick={closeMobileMenu} activeClass="active" to="experience" spy={true} smooth={true} offset={0} duration={500}>Experience</Link></div></button>
                            <button className="block"><div className="py-2 px-2 text-sm hover:bg-[#1e43a1]"><Link onClick={closeMobileMenu} activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></div></button>
                            <button className="block"><div className="py-2 px-2 text-sm hover:bg-[#1e43a1]"><Link onClick={closeMobileMenu} activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link></div></button>
                            <button className="block"><div className="py-2 px-2 text-sm hover:bg-[#1e43a1]"><a onClick={closeMobileMenu} href="https://github.com/Damon-D-Ma" target="None">GitHub</a></div></button>
                            <button className="block"><div className="py-2 px-2 text-sm hover:bg-[#1e43a1]"><a onClick={closeMobileMenu} href="https://www.linkedin.com/in/damon-d-ma/" target="None">LinkedIn</a></div></button>
                            </div>
                            
                    )}
                        
                        

                </div>
            </nav>
        </section>
        


        </>


    )
}