'use client'

import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import TechItem from './TechItem';
import Image from 'next/image';




export default function ProjectCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])

    return(
        <>  
        <div className='flex  items-center justify-center items-center'>
        <div>
        <button className="items-center" onClick={scrollPrev}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
        </div>

        <div className="overflow-hidden h-200 bg-zinc-800 w-5/6 rounded-lg" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-none w-full px-5 py-5 mx-auto">
                        <div className='flex'>
                            <Image src='grammar-game-screenshot.png' alt='Fix my Mistakes photo' height={200} width={300} className='hidden md:block w-3/5 max-h-[600px] rounded-lg'/>
                            <div className=' text-left px-5'>
                                <h2 className='text-4xl pb-4'>Fix my Mistakes!</h2>
                                <p>Fix my Mistakes! is an online tool for improving your grammar skills. By logging in and solving randomly-generated exercises, users can expect to make less errors in their writing. Made for the Deerhacks 2023 Hackathon.</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <TechItem icon={<Image  src='./javascript.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='JavaScript'/>
                                    <TechItem icon={<Image  src='./file-type-html.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='HTML'/>
                                    <TechItem icon={<Image  src='./file-type-css.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='CSS'/>
                                    <TechItem icon={<Image  src='./react-js-icon.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='React.js'/>
                                    <TechItem icon={<Image  src='./file-type-firebase.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='Firebase'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./github-mark.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='GitHub'/>
                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='hover:bg-[#1e43a1] transition duration-500'>
                                        <a href="https://fixmymistake.tech" target="None">
                                            <div className='flex'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                    </svg>

                                            <div className='pl-2'>
                                                {'fixmymistake.tech'}

                                            </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='hover:bg-[#1e43a1] transition duration-500 mt-2'>
                                        <a href="https://github.com/Damon-D-Ma/deerhacks_2023" target="None">
                                            <div className='flex'>
                                            <div>

                                                <Image src="github-mark-white.svg" alt="GitHub Logo" width={24} height={24}/>
                                            
                                            </div>
                                                <div className='pl-2'>
                                                    github.com/Damon-D-Ma/deerhacks_2023
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none w-full px-5 py-5 mx-auto">
                        <div className='flex'>
                            <Image src='Website.png' alt='Personal Website photo' height={200} width={300} className=' hidden md:block w-3/5 max-h-[600px] rounded-lg'/>
                            <div className='text-left px-5'>
                                <h2 className='text-4xl pb-4'>Personal Website</h2>
                                <p>The site you&apos;re on right now! A responsive, mobile-friendly portfolio website made with Next.js and Tailwind CSS.</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <TechItem icon={<Image  src='./typescript-icon.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='TypeScript'/>
                                    <TechItem icon={<Image  src='./file-type-html.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='HTML'/>
                                    <TechItem icon={<Image  src='./file-type-tailwind.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='Tailwind CSS'/>
                                    <TechItem icon={<Image  src='./react-js-icon.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='React.js'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./next-js.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='Next.js'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./github-mark.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='GitHub'/>
                                    <TechItem icon={<Image  src='./github-pages.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='GitHub Pages'/>

                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='hover:bg-[#1e43a1] transition duration-500'>
                                        <a href="https://damon-d-ma.github.io" target="None">
                                            <div className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                            <div className='pl-2'>
                                                {'damon-d-ma.github.io'}

                                            </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='hover:bg-[#1e43a1] transition duration-500 mt-2'>
                                        <a href="https://github.com/Damon-D-Ma/damon-d-ma.github.io" target="None">
                                            <div className='flex'>
                                                <div>
                                                    <Image src="github-mark-white.svg" alt="GitHub Logo" width={24} height={24} className='object-fit'/>
                                                </div>
                                                <div className='pl-2'>
                                                    github.com/Damon-D-Ma/damon-d-ma.github.io
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none w-full px-5 py-5 mx-auto">
                        <div className='flex'>
                            <Image src='boggle-party-screenshot.png' alt='Boggle Party photo' height={16} width={16} className=' hidden md:block w-3/5 max-h-[600px] rounded-lg'/>
                            <div className='text-left px-5'>
                                <h2 className='text-4xl pb-4'>Boggle Party</h2>
                                <p>Boggle Party is a twist to the classic board game, Boggle. Facing off against either a bot or a friend next to you, randomized Boggle boards are given at the beginning of each player&apos;s turn. The objective of the game is to find as many words as possible before time runs out, and entering a correct word resets the timer!</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./file-type-java.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='Java'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./JavaFX.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='JavaFX'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./github-mark.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='GitHub'/>

                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="flex-none w-full px-5 py-5  mx-auto">
                        <div className='flex'>
                            <Image src='tetris-screenshot.png' alt='Tetris photo' height={200} width={200} className='hidden md:block w-3/5 max-h-[600px] rounded-lg'/>
                            <div className='wtext-left px-5'>
                                <h2 className='text-4xl pb-4'>Tetris</h2>
                                <p>There&apos;s no need to explain the rules of the timeless game Tetris! This variation features a speed slider to adjust difficulty, as well as a loading and saving feature to continue games later.</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./file-type-java.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='Java'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./JavaFX.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='JavaFX'/>
                                    <TechItem icon={<Image  src='./Git-Icon-White.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='Git'/>

                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div className="flex-none w-full px-5 py-5  mx-auto">
                        <div className='flex'>
                            <Image src='duber-paint-screenshot.png' alt='Duber Paint photo' height={200} width={200} className='hidden md:block w-3/5 h-[600px] rounded-lg'/>
                            <div className='wtext-left px-5'>
                                <h2 className='text-4xl pb-4'>Duber Paint</h2>
                                <p>Duber Paint is a locally-hosted online whiteboard application that allows users to create and join rooms to collaboratively draw on the same canvas. Users are additionally able to export and save their work as an image for later.</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./file-type-python.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='Python'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./pygame.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='PyGame'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./github-mark.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='GitHub'/>
                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='hover:bg-[#1e43a1] transition duration-500'>
                                        <a href="https://github.com/Damon-D-Ma/DuberPaint" target="None">
                                            <div className='flex'>
                                                <div>
                                                    <Image src="github-mark-white.svg" alt="GitHub Logo" width={24} height={24} className='object-fit'/>
                                                </div>
                                                <div className='pl-2'>
                                                    github.com/Damon-D-Ma/DuberPaint
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>                      
                        </div>
                    </div>
                    <div className="flex-none w-full px-5 py-5  mx-auto">
                        <div className='flex'>
                            <Image src='tuesday-screenshot.png' alt='Tuesday photo' height={200} width={200} className='hidden md:block w-3/5 h-[600px] rounded-lg'/>
                            <div className='wtext-left px-5'>
                                <h2 className='text-4xl pb-4'>Tuesday</h2>
                                <p>A Google Chrome extension that allows users to highlight dates on a webpage and adds it as an event to their Google Calendar. Tuesday is able to recognize dates in numerous formats to maximize convenience and works on all seven days of the week despite its name. Made for the Creatica 2022 Hackathon.</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <TechItem icon={<Image  src='./javascript.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='JavaScript'/>
                                    <TechItem icon={<Image  src='./file-type-html.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='HTML'/>
                                    <TechItem icon={<Image  src='./file-type-css.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='CSS'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./github-mark.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='GitHub'/>
                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='hover:bg-[#1e43a1] transition duration-500'>
                                        <a href="https://github.com/Damon-D-Ma/Tuesday" target="None">
                                            <div className='flex'>
                                                <div>
                                                    <Image src="github-mark-white.svg" alt="GitHub Logo" width={24} height={24} className='object-fit'/>
                                                </div>
                                                <div className='pl-2'>
                                                    github.com/Damon-D-Ma/Tuesday
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>                         
                        </div>
                    </div>
                    <div className="flex-none w-full px-5 py-5  mx-auto">
                        <div className='flex'>
                            <Image src='weather-screenshot.jpg' alt='Weather Station photo' height={200} width={200} className='hidden md:block w-3/5 h-[600px] rounded-lg'/>
                            <div className='wtext-left px-5'>
                                <h2 className='text-4xl pb-4'>Weather Station</h2>
                                <p>A hardware project using an OLED screen and ESP32 microcontroller. Using an open-source weather API, the device displays hourly weather information according to the user&apos;s latitude and longitude. </p>
                                <div className='pt-12 flex flex-wrap'>
                                <TechItem icon={<Image  src='./c-cpp.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='C++'/>
                                    <TechItem icon={<Image  src='./file-type-arduino.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='Arduino'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image  src='./github-mark.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} text='GitHub'/>
                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='hover:bg-[#1e43a1] transition duration-500'>
                                        <a href="https://github.com/Damon-D-Ma/Weather-Station" target="None">
                                            <div className='flex'>
                                                <div>
                                                    <Image src="github-mark-white.svg" alt="GitHub Logo" width={24} height={24} className='object-fit'/>
                                                </div>
                                                <div className='pl-2'>
                                                    github.com/Damon-D-Ma/Weather-Station                                                
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>                          
                        </div>
                    </div>
                    <div className="flex-none w-full px-5 py-5  mx-auto">
                        <div className='flex'>
                            <Image src='reaction-screenshot.jpg' alt='Reaction Meter photo' height={200} width={200} className='hidden md:block w-3/5 h-[600px] rounded-lg'/>
                            <div className='wtext-left px-5'>
                                <h2 className='text-4xl pb-4'>Reaction Time Meter</h2>
                                <p>A hardware project using an OLED Display, push button, and ESP32 microcontroller that tests a user&apos;s visual reaction time. Simply wait for the LED to turn on and press the blue button!</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <TechItem icon={<Image  src='./c-cpp.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='C++'/>
                                    <TechItem icon={<Image  src='./file-type-arduino.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} text='Arduino'/>
                                    <TechItem icon={<div className='bg-white rounded-full'><Image src='./github-mark.svg' height={16} width={16} alt='' className='h-4 w-4 object-fit rounded-full'/></div>} text='GitHub'/>

                                </div>
                                <div className='pt-4 flex flex-col'>
                                    <div className='hover:bg-[#1e43a1] transition duration-500'>
                                        <a href="https://github.com/Damon-D-Ma/Reaction-Time-Meter" target="None">
                                            <div className='flex'>
                                                <div>
                                                    <Image src="github-mark-white.svg" alt="GitHub Logo" width={24} height={24} className='object-fit'/>
                                                </div>
                                                <div className='pl-2'>
                                                    github.com/Damon-D-Ma/Reaction-Time-Meter                                                
                                                </div>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>                         
                        </div>
                    </div>

                </div>
            
        </div>
        <div>
            <button onClick={scrollNext}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button> 
        </div>

                
                
            </div>
        </>


    )
}