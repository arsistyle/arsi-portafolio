import React from 'react';
import Hero from '../components/Hero';
import { SectionProjects, SectionContact } from '../components/Sections';


function Home() {
  return (
    <>
      <Hero />
      <SectionProjects />
      <SectionContact />
    </>
  );
}

export default Home;
