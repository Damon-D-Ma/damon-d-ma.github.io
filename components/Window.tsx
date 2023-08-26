'use client'
import Typewriter from 'typewriter-effect';



export default function Start() {

    return(




        <div className="lg:h-3/5 md:h-3/5 md:pb-12 lg:pb-12 md:mb-12 lg:mb-12 sm:h-48 border border-gray-400 rounded shadow mx-auto bg-zinc-900  ">
        {/* Title Bar */}
        <div className="flex items-center justify-end px-2 py-1 bg-zinc-800 text-white">

        <div className="flex">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-1"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-1"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
        </div>
        
        {/* Content Area */}
        <div className="px-4 py-2">
        
        <div className='md:text-xl lg:text-4xl py-4 sm:text-base sm:h-56'>
                <Typewriter

                onInit={(typewriter) => {
                    typewriter
                    .typeString(
                        '<span class="text-pink-500">while</span><span class="text-white-500">(</span><span class="text-blue-500">true</span><span class="text-white-500">){<br/></span><span class="text-yellow-500 whitespace-pre">\tkeepImproving</span><span class="text-white-500">();<br/>}</span>'
                    )
                    .pauseFor(250)
                    .typeString(
                        '<span class="text-green-500"><br/>//Welcome to my website! :)</span>'

                    )
                    .start()


                }}

                />
                </div>
        </div>
    </div>
    )
}