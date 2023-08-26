import React from 'react';
import Image from 'next/image';


export default function Footer() {

    return(
        <>

            <section id="footer" className='pt-48'>
                <div className='bg-[#0078d7] px-2'>
                    
                    <div className='mx-auto'>
                        <div className="flex flex-col justify-center items-center pt-5">
                            <div className='flex flex-col md:flex-row lg:flex-row pb-5' >
                                <div className='hover:bg-[#1e43a1] transition duration-500 w-72'>
                                    <a href="mailto:damon.ma@mail.utoronto.ca" target="None">
                                        <div className='flex sm:justify-start lg:justify-end md:justify-end'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            damon.ma@mail.utoronto.ca
                                        </div>
                                    </a>

                                </div>
                                <div className='hidden md:flex px-2 text-center'>
                                    |
                                </div>
                                <div className='hover:bg-[#1e43a1] transition duration-500  w-72'>
                                    <a href="tel:6475105060" target="None">
                                        <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>

                                            {'(647) 510-5060'}
                                        </div>
                                    </a>

                                </div>
                            </div>
                                <div className='flex'>
                                    <div className="flex hover:bg-[#1e43a1] px-4 py-3 transition duration-500">
                                            
                                            <a href="https://github.com/Damon-D-Ma" target="None"><Image src="github-mark.svg" alt="GitHub Logo" className='filter brightness-0' width={32} height={32}/> </a>

                                        </div>
                                    <div className="flex hover:bg-[#1e43a1] px-4 py-3 transition duration-500">
                                            
                                        <a href="https://www.linkedin.com/in/damon-d-ma/" target="None"><Image src="/LI-In-Bug.png" alt="Linkedin Logo" className='filter brightness-0' width={40} height={40}/> </a>

                                    </div>

                                </div>
                        </div>
                    </div>    
                    
                </div>
            </section>

        
        </>

    );
}