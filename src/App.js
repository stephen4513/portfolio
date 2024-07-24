import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Introduction from './components/introduction';
import Skills from './components/skills';
import Hero from './components/hero';
import './App.module.css'

function App() {
  return (
    <div className='App'>
      <Hero />
        <main>
            <Introduction />
            <Skills />
            <About />
            <Projects />
            <Contact /> 
        </main>
    </div>
  );
}

export default App;
