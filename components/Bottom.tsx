"use client"

import { Link } from "react-scroll";
import React, { useState } from "react";
import Image from 'next/image';


export default function Bottom(){

    return(
            <>
                    <div className="pt-32 md:text-lg lg:text-lg sm:text-sm px-8 w-5/6 mx-auto text-center">
                        <h2 className="lg:text-4xl md:text-4xl sm:text-lg pb-24">Looks like you&apos;ve made it to the end!</h2>
                        <p>You could click this convenient button to go back to the start:</p>
                        <div className="hover:bg-[#0078d7] px-4 py-3 transition duration-500 inline-block rounded-full mx-0 my-0 py-0 px-0"><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-24 h-24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>        
                        </Link></div>
                        <p className="pb-12">...or you could enjoy this nice picture of these cherry blossoms I took. The choice is yours!</p>

                        <div className="flex justify-center">
                            <Image src="IMG_4466.JPG" alt="" height={304} width={600} className="rounded-lg h-96 object-cover" />
                        </div>
    
                    </div>
            </>

    )


}