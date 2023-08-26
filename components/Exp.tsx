import Image from 'next/image';


export default function Exp() {

    return(
        <>
            <section id="experience" className='pt-32 md:text-lg lg:text-lg  sm:text-sm px-8'>

                <div>                    
                    
                    <h1 className=' font-bold py-4 sm:text-2xl md:text-8xl lg:text-8xl pb-12'>Experience</h1>
                    <h2 className='py-4 lg:text-4xl md:text-4xl sm:text-lg pb-12'> Here&apos;s where I&apos;ve put my knowledge and expertise to good use:</h2>
                    <div className='w-5/6 mx-auto'>
                        <div className="rounded-lg bg-zinc-800 pt-4">
                        <h2 className='font-bold px-8 py-4 lg:text-4xl md:text-4xl sm:text-lg pb-12'> Game Design Instructor</h2>


                        <div className='flex px-4 py-4'>
                            <div className='px-4'>
                                <p className='lg:text-2xl md:text-2xl sm:text-md'>Lux Academy</p>
                                <p className='lg:text-2xl md:text-2xl sm:text-md pb-12'>Markham, ON, Canada</p>
                                <ul className="list-disc list-inside">
                                    <li>Designed and executed a comprehensive, hands-on curriculum to teach programming and game design fundamentals with GameMaker</li>
                                    <li>Created a collaborative and problem-solving class environment through daily scrums with group members, promoting active engagement and teamwork</li>
                                    <li>Successfully guided students through the game development cycle, resulting in a 100% project completion rate of original games</li>
                                    <li>Received an average rating of 8.75/10 in course evaluations, with 100% student interest in returning for further learning</li>
                        </ul>
                            </div>
                            <div className='flex flex-col w-2/3 pl-4'>
                                <div>
                                    <Image src='demo.gif' width={600} height={200} alt='' className='rounded-lg max-w-full'/>


                                </div>
                                <div className='pt-4 text-sm'>
                                    Above is a recording of an in-class activity done with students. The focus was to introduce the fundamentals of background art, viewports, character animation, and movement using the GameMaker game engine.
                                </div>
                            </div>
                        </div>




                        </div>
                    </div>



                </div>


            </section>
        
        </>


    )
}