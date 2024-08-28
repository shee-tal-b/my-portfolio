import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import NightSky from './components/NightSky';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NightSky />
      <main>
        <Header />
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        
        <Contact />
      </main>
      <Footer /> {/* Place the Footer component here */}
    </div>
  );
}

export default App;
