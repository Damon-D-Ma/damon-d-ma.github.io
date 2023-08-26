import Header from '../components/Header'
import Footer from '../components/Footer'
import Start from '../components/Start'
import About from '../components/About'
import Exp from '../components/Exp'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Bottom from '../components/Bottom'

export default function Home() {
  return (
    <>
      <div className="bg-zinc-900 text-white">
        <Header/>
        <Start/>
        <About/>
        <Exp/>
        <Projects/>
        <Skills/>
        <Bottom/>
        <Footer/>

      </div>

    </>
  )
}
