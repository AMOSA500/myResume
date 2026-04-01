import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Personal from './components/Personal';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [isLight, toggleTheme] = useTheme();

  return (
    <>
      <Nav isLight={isLight} onToggle={toggleTheme} />
      <Hero />
      <Stats />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Personal />
      <Footer />
    </>
  );
}
