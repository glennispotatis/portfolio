import React from 'react';

import '../css/colors.css';
import '../css/global.css';

import About from '../components/About';
import ProjectCard from '../components/ProjectCard';

import Plantrol from '../images/plantrol.jpeg';
import uniLeague from '../images/unileague.jpeg';
import Accessibility from '../images/accessibility.jpeg';

function IndexPage() {
  return (
    <main>
      <About />
      <h2>My Projects</h2>
      <section className='projects'>
            <ProjectCard image={Plantrol} title='Plantrol – Web Project' link='/plantrol' />
            <ProjectCard image={uniLeague} title='uniLeague – Bachelor Project' link='/unileague' />
            <ProjectCard image={Accessibility} title='7-Minute-Workout – Accessibility Exam' link='/workout' />
        </section>
    </main>
  );
}

export default IndexPage;