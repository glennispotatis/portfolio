import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDescription from '../components/ProjectDescription';

import uniLeague from '../images/unileague.jpeg';
import Plantrol from '../images/plantrol.jpeg';
import Accessibility from '../images/accessibility.jpeg';
import BackArrow from '../components/BackArrow';

function UniLeague() {
    return (
        <main>
            <BackArrow />
            <h1>uniLeague – Bachelor Project</h1>
            <ProjectDescription title='uniLeague – Bachelor Project' image={uniLeague} github='https://github.com/Bachelorproject-Spring-22' demo='https://unileague.netlify.app/' />
            <section className='problem-description'>
                <h2>Project Outline</h2>
                <h3>Quick Facts <code>= &#123;</code></h3>
                <ul>
                    <li><span className='strong'>Timeline:</span> Late December – May 2022</li>
                    <li><span className='strong'>Type:</span> Group Project</li>
                    <li><span className='strong'>Course:</span> IDG3920 - Bachelor Project</li>
                    <li><span className='strong'>Role:</span> Low-fidelity Design, Full-stack Developer</li>
                    <li><span className='strong'>Tools:</span> Balsamiq, MongoDB Express React Node (MERN)</li>
                    <li><span className='strong'>Client:</span> Associate Professor at Department of Design at NTNU in Gjøvik</li>
                </ul>

                <h3>Problem Description</h3>
                <p>
                    
                </p>

                <h3>Our Solution</h3>
                <p>
                    
                </p>
            </section>
            <section className='my-work'>
                <h2>Improving uniLeague</h2>
                <h3>My role in the project</h3>
                <article>
                    <figure>
                        <img src='https://picsum.photos/500/300' alt='' />
                    </figure>
                    <div>
                        <p>
                            
                        </p>
                    </div>
                </article>

                <h3>Authentication</h3>
                <article>
                    <div>
                        <p>

                        </p>
                        <p>
                            
                        </p>
                    </div>
                    <figure>
                        <img src='https://picsum.photos/500/300' alt='' />
                    </figure>
                </article>
            </section>

            <h2>Other projects you may like</h2>
            <section className='projects'>
                <ProjectCard image={Plantrol} title='Plantrol – Web Project' link='/plantrol' />
                <ProjectCard image={Accessibility} title='7-Minute-Workout – Accessibility Exam' link='/workout' />
            </section>
        </main>
    );
}

export default UniLeague;