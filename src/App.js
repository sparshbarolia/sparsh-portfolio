import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ParticlesBG from './components/ParticlesBG';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Social from './components/Social';

function App() {
  return (
    <div className='wholePage'>
      <Navbar/>
      <ParticlesBG/>   {/* Header + particle */} 
      <Social/>
      <About/>
      {/* <Header/> */}
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
