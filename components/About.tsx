import Image from 'next/image';



export default function About() {

    return(
        <>
            <section id="about">
            <div className="pt-32 md:text-lg lg:text-lg  sm:text-sm px-8">
                <h1 className=" font-bold md:text-8xl lg:text-8xl sm:text-4xl pb-12">Nice to meet you!</h1>
                <h2 className="lg:text-4xl md:text-4xl sm:text-lg pb-24">I&apos;m Damon Ma, a computer science student at the University of Toronto.</h2>
                <div className="flex justify-around">
                    <div className="w-5/6 pr-4">
                        <p className="pb-8">With an innate curiosity for how things tick, I ventured into the world of computer science and software development.
                        My journey began in 8th grade when a friend gave me my first taste of HTML (which isn&apos;t a programming language, by the way!) 
                        and I got hooked on making basic webpages. Soon after, I spent my days writing text-based adventure games with Java and 
                        eventually moved on to more challenging endeavours. Completing various projects, studying computer science, and sharing my knowledge
                        with others through my role as a Game Design Instructor have equipped me with the tools needed to succeed in the never-ending rabbit 
                        hole of software development. I am currently working at the University of Toronto&apos;s Department of Mechanical and Industrial Engineering (MIE) faculty as a Junior Web Developer.</p>
                        <p>Beyond my tech adventures, I&apos;ve done some other cool things throughout my years as a human being: </p>
                        <ul className="list-disc list-inside">
                            <li>Earning a third degree black belt in Taekwondo {"\u{1F94B}"}</li>
                            <li>Strumming a few tunes on the guitar {"\u{1F3B8}"}</li>
                            <li>Exploring the beautiful, diverse cultures of the world {"\u{1F5FA}\u{FE0F}"}</li>
                            <li>Finding cool games to sink my teeth into {"\u{1F3AE}"}</li>
                            <li>Nailing some friend-approved culinary creations {"\u{1F468}\u{200D}\u{1F373}"}</li>
                            <li>And most importantly, connecting with amazing people like you {"\u{1F91D}"}</li>
                        </ul>
                    </div>

                    <div className="w-1/6">
                        <Image src="pfp.png" width={500} height="500" alt="" className="rounded-full max-w-full"/>
                    </div>

                </div>


                <p className="pt-8">I hope this website can give you a better understanding of me, and I&apos;d love to know more about you too! Feel free to give me a shout any time via email at <a href="mailto:damon.ma@mail.utoronto.ca" target="None" className='underline'>damon.ma@mail.utoronto.ca</a>, or add me on LinkedIn at <a href="https://www.linkedin.com/in/damon-d-ma/" target="None" className='underline'>linkedin.com/in/damon-d-ma</a>!</p>



                
            </div>

            </section>

        
        </>


    )
}