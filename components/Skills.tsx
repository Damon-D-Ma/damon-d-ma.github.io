

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
                                <SkillBar icon={<img  src='./file-type-python.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Python' level={97}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><img  src='./file-type-java.svg' alt='' className='h-4 w-4 object-fit rounded-full'/></div>} skill='Java' level={95}/>
                                <SkillBar icon={<img  src='./c-original.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='C' level={85}/>
                                <SkillBar icon={<img  src='./c-cpp.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='C++' level={50}/>
                                <SkillBar icon={<img  src='./bash_full_colored_light.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Bash' level={80}/>
                                <SkillBar icon={<img  src='./javascript.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='JavaScript' level={70}/>
                                <SkillBar icon={<img  src='./typescript-icon.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='TypeScript' level={70}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><img  src='./Tall_2.png' alt='' className='h-4 w-4 object-fit rounded-full'/></div>} skill='Assembly (RISC-V)' level={75}/>
                                <SkillBar icon={<img  src='./file-type-html.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='HTML' level={85}/>
                                <SkillBar icon={<img  src='./file-type-css.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='CSS' level={80}/>


                            </div>
                            <div className='px-4 pb-12'>
                                <p className='font-bold lg:text-2xl md:text-2xl sm:text-md'>Frameworks/Technologies:</p>

                                <SkillBar icon={<img  src='./react-js-icon.png' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='React.js' level={85}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><img  src='./next-js.svg' alt='' className='h-4 w-4 object-fit rounded-full'/></div>} skill='Next.js' level={85}/>
                                <SkillBar icon={<img  src='./file-type-tailwind.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Tailwind CSS' level={93}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><img  src='./pygame.png' alt='' className='h-4 w-4 object-fit rounded-full'/></div>} skill='PyGame' level={92}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><img  src='./file-type-java.svg' alt='' className='h-4 w-4 object-fit rounded-full'/></div>} skill='Java Swing' level={80}/>
                                <SkillBar icon={<div className='bg-white rounded-full'><img  src='./JavaFX.png' alt='' className='h-4 w-4 object-fit rounded-full'/></div>} skill='JavaFX' level={90}/>
                                <SkillBar icon={<img  src='./linux-original.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Linux' level={85}/>
                                <SkillBar icon={<img  src='./windows-legacy.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Windows' level={95}/>


                            </div>
                            <div className='px-4 pb-12'>
                                <p className='font-bold lg:text-2xl md:text-2xl sm:text-md'>Developer Tools:</p>
                                <SkillBar icon={<img  src='./vs-code.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='VS Code' level={95}/>
                                <SkillBar icon={<img  src='./file-type-arduino.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Arduino IDE' level={70}/>
                                <SkillBar icon={<img  src='./jb-intellij-idea.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='IntelliJ' level={85}/>
                                <SkillBar icon={<img  src='./jb-pycharm.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='PyCharm' level={85}/>
                                <SkillBar icon={<img  src='./Git-Icon-White.png' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Git' level={90}/>
                                <SkillBar icon={<img  src='./github-mark-white.svg' alt='' className='h-4 w-4 object-fit rounded-full'/>} skill='Github' level={90}/>


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