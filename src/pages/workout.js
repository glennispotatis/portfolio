import React from 'react';
import BackArrow from '../components/BackArrow';
import ProjectCard from '../components/ProjectCard';
import ProjectDescription from '../components/ProjectDescription';

import Accessibility from '../images/accessibility.jpeg';
import Plantrol from '../images/plantrol.jpeg';
import uniLeague from '../images/unileague.jpeg';

function Workout(){
    return (
        <main>
            <BackArrow />
            <h1>7-Minute-Workout – Accessibility Exam</h1>
            <ProjectDescription image={Accessibility} title='7-Minute-Workout – Accessibility Exam' github='https://github.com/glennispotatis/eksamen-tilgjengelighet-2020' demo='https://folk.ntnu.no/glenneha/idg2012/' />
            <section className='problem-description'>
                <h2>Project Outline</h2>
                <h3>Quick Facts <code>= &#123;</code></h3>
                <ul>
                    <li><span className='strong'>Timeline:</span> November – December 2022</li>
                    <li><span className='strong'>Type:</span> Group Project</li>
                    <li><span className='strong'>Course:</span> IDG2012 - Accessibility</li>
                    <li><span className='strong'>Role:</span> Front-end Developer</li>
                    <li><span className='strong'>Tools:</span> HTML5, CSS3, JavaScript</li>
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
                <ProjectCard image={uniLeague} title='uniLeague – Bachelor Project' link='/unileague' />
            </section>
        </main>
    );
}

export default Workout;