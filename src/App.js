import React from 'react';
import Header from './components/header';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Introduction from './components/introduction';
import Skills from './components/skills';
import './App.module.css'

function App() {
  return (
    <div className='App'>
      <Header />
        <main>
            <Introduction />
            <About />
            <Skills />
            <Projects />
            <Contact /> 
        </main>
    </div>
  );
}

export default App;
