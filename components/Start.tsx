'use client'
import Window from './Window'


export default function Start() {
    return(
        <>  
        <section id = "home" className='pb-4'>

        <div className='relative sm:h-screen md:h-[85vh] lg:h-[85vh] '>
  <div className='w-full h-full bg-cover bg-center relative'>
    <img
      src='./code.jpg'
      alt='Background'
      className='w-full h-full object-cover'
    />
  </div>
  <div className='absolute inset-0 bg-black opacity-80'></div>
  <div className='absolute inset-0 flex items-center justify-center z-10'>
    <div className="w-3/5 h-4/5">
            <h1 className='font-bold whitespace-nowrap md:text-8xl sm:text-lg py-4 text-white mt-2 text-center lg:pb-8 md:pb-4 sm:pb-0'>Damon Ma</h1>
      <Window />
    </div>
  </div>
</div>

        </section>
            
        </>


    )
}