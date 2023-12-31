
import Image from 'next/image';

import React from 'react';
import SkillBar from './SkillBar';
import SkillItem from './SkillItem';



export default function Contact() {

    return(
        <>
            <section id="skills">
                <div className='pt-32 px-8 sm:text-sm md:text-lg lg:text-lg'>
                    <h1 className=' font-bold py-4 sm:text-2xl md:text-8xl lg:text-8xl  pb-12'>Skills</h1>
                    <h2 className='py-4 lg:text-4xl md:text-4xl sm:text-lg pb-12'> I&apos;ve picked up quite a few, here are some of them:</h2>
                    <div className='w-5/6 mx-auto'>
                        <div className="rounded-lg bg-zinc-800">


                        <div className='flex-col px-4 py-4'>
                            <div className='px-4 pb-12'>
                                <p className='font-bold lg:text-2xl md:text-2xl sm:text-md'>Languages:</p>
                                <SkillBar icon={<Image  src='./file-type-python.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Python' level={97}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><Image  src='./file-type-java.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} skill='Java' level={95}/>
                                <SkillBar icon={<Image  src='./c-original.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='C' level={85}/>
                                <SkillBar icon={<Image  src='./c-cpp.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='C++' level={70}/>
                                <SkillBar icon={<Image  src='./bash_full_colored_light.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Bash' level={80}/>
                                <SkillBar icon={<Image  src='./javascript.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='JavaScript' level={70}/>
                                <SkillBar icon={<Image  src='./typescript-icon.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='TypeScript' level={70}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><Image  src='./Tall_2.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} skill='Assembly (RISC-V)' level={75}/>
                                <SkillBar icon={<Image  src='./racket-svgrepo-com.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Racket' level={70}/>
                                <SkillBar icon={<Image  src='./haskell-svgrepo-com.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Haskell' level={70}/>
                                <SkillBar icon={<Image  src='./file-type-html.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='HTML' level={85}/>
                                <SkillBar icon={<Image  src='./file-type-css.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='CSS' level={80}/>


                            </div>
                            <div className='px-4 pb-12'>
                                <p className='font-bold lg:text-2xl md:text-2xl sm:text-md'>Frameworks/Technologies:</p>
                                <SkillBar icon={<Image  src='./cuda-svgrepo-com.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='CUDA' level={80}/>
                                <SkillBar icon={<Image  src='./react-js-icon.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='React.js' level={85}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><Image  src='./next-js.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} skill='Next.js' level={85}/>
                                <SkillBar icon={<Image  src='./file-type-tailwind.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Tailwind CSS' level={93}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><Image  src='./pygame.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} skill='PyGame' level={92}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><Image  src='./file-type-java.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/></div>} skill='Java Swing' level={80}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><Image  src='./JavaFX.png' alt='' height={16} width={16}  className='h-4 w-4 object-fit rounded-full'/></div>} skill='JavaFX' level={90}/>
                                

                            </div>
                            <div className='px-4 pb-12'>
                                <p className='font-bold lg:text-2xl md:text-2xl sm:text-md'>Developer Tools:</p>
                                <SkillBar icon={<Image  src='./vs-code.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='VS Code' level={95}/>
                                <SkillBar icon={<Image  src='./file-type-arduino.svg' alt=''height={16} width={16}  className='h-4 w-4 object-fit rounded-full'/>} skill='Arduino IDE' level={70}/>
                                <SkillBar icon={<Image  src='./jb-intellij-idea.svg' alt=''height={16} width={16}  className='h-4 w-4 object-fit rounded-full'/>} skill='IntelliJ' level={85}/>
                                <SkillBar icon={<Image  src='./jb-pycharm.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='PyCharm' level={85}/>
                                <SkillBar icon={<Image src='./Git-Icon-White.png' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Git' level={90}/>
                                <SkillBar icon={<Image  src='./github-mark-white.svg' alt='' height={16} width={16}className='h-4 w-4 object-fit rounded-full'/>} skill='Github' level={90}/>
                                <SkillBar icon={<Image  src='./linux-original.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Linux' level={90}/>
                                <SkillBar icon={<Image  src='./windows-legacy.svg' alt='' height={16} width={16} className='h-4 w-4 object-fit rounded-full'/>} skill='Windows' level={95}/>


                            </div>
                            <div className='px-4 pb-12'>
                                <p className='font-bold lg:text-2xl md:text-2xl sm:text-md'>Behavioural:</p>
                                <div className='pt-12 flex flex-wrap'>
                                    <SkillItem icon={<span>{'\u{1F600}'}</span>} text='Communication'/>
                                    <SkillItem icon={<span>{'\u{1F91D}'}</span>} text='Collaboration'/>
                                    <SkillItem icon={<span>{'\u{1F4A1}'}</span>} text='Problem-Solving'/>
                                    <SkillItem icon={<span>{'\u{1F9E0}'}</span>} text='Critical-Thinking'/>
                                    <SkillItem icon={<span>{'\u{1F4CB}'}</span>} text='Organization'/>
                                    <SkillItem icon={<span>{'\u{231B}'}</span>} text='Time Management'/>
                                    <SkillItem icon={<span>{'\u{26A1}'}</span>} text='Quick-Learner'/>
                                    <SkillItem icon={<span>{'\u{1F4E3}'}</span>} text='Leadership'/>
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