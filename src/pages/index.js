import React from 'react';

import '../css/colors.css';
import '../css/global.css';

import About from '../components/About';
import ProjectCard from '../components/ProjectCard';

import Plantrol from '../images/plantrol.jpeg';
import uniLeague from '../images/unileague.jpeg';
import Accessibility from '../images/accessibility.jpeg';
import WebCoding from '../images/webcoding.jpg';
import Avgangsutstilling from '../images/avgangsutstilling.jpg';
import Contact from '../components/Contact';

function IndexPage() {
  return (
    <main>
      <About />
      <h2>My Projects</h2>
      <section className='projects'>
            <ProjectCard image={Plantrol} title='Plantrol – Web Project' />
            <ProjectCard image={uniLeague} title='uniLeague – Bachelor Project' />
            <ProjectCard image={Accessibility} title='7-Minute-Workout – Accessibility Exam' />
            <ProjectCard image={WebCoding} title='Department of Design – Webcoding Exam' />
            <ProjectCard image={Avgangsutstilling} title='Avgangsutstilling – Exhibition Page' />
        </section>
        <Contact />
    </main>
  );
}

export default IndexPage;