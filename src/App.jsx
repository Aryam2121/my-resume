import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Certifications from './Components/Certifications'
import WorkEx from './Components/WorkEx'
import Footer from './Components/Footer'

import './App.css'

function App() {
  

  return (
    <>
    <div className="bg-slate-950">
    <Navbar />
      <Home />
      <About />
      <Skills />
      <WorkEx />
      <Projects />
     
      <Certifications />
      <Footer />
    </div>


     
    </>
  )
}

export default App
