import ProjectCarousel from "./ProjectCarousel";





export default function Projects() {
    return(
        <>
        <section id='projects' className='pt-32 px-8 sm:text-sm md:text-lg lg:text-lg'>
          <h1 className='font-bold py-4 sm:text-2xl md:text-8xl lg:text-8xl  pb-12'>Projects</h1>
          <h2 className='py-4  lg:text-4xl md:text-4xl sm:text-lg pb-12'> Curious about what I've been building? You're in the right place!</h2>
          <p className='py-8'>Welcome to my side projects showcase! Here, you'll find a curated collection of my work throughout the years: </p>
          <ProjectCarousel/>

        </section>
        
        </>


    )
}