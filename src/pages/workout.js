import React from 'react';
import BackArrow from '../components/BackArrow';
import ProjectCard from '../components/ProjectCard';
import ProjectDescription from '../components/ProjectDescription';

import Accessibility from '../images/accessibility.jpeg';
import Plantrol from '../images/plantrol.jpeg';
import uniLeague from '../images/unileague.jpeg';
import Modal from '../images/workout-modal.png';
import Code from '../images/workout-code.png';

function Workout(){
    return (
        <main>
            <BackArrow />
            <h1>7-Minute-Workout – Accessibility Exam</h1>
            <ProjectDescription image={Accessibility} title='7-Minute-Workout – Accessibility Exam' github='https://github.com/glennispotatis/eksamen-tilgjengelighet-2020' demo='https://folk.ntnu.no/glenneha/idg2012/' />
            <section className='problem-description'>
                <h2>Project Outline</h2>
                <h3 className='code'>const quickFacts = &#123;</h3>
                <ul className='code'>
                    <li>Timeline: November – December 2022</li>
                    <li>Type: Group Project</li>
                    <li>Course: IDG2012 - Accessibility</li>
                    <li>Role: Front-end Developer</li>
                    <li>Tools: HTML5, CSS3, JavaScript</li>
                    <li>Client: Associate Professor at Department of Design at NTNU in Gjøvik</li>
                </ul>
                <h3>Problem Description</h3>
                <p>
                    The task was to develop a single-page website that displays, in a usable and accessible way, the same exercise instructions shown in the provided starting image. 
                    The starting image depict the 7-minute workout, a series of calisthenics exercises to be carried out in 7 minutes, doing each exercise for 30 seconds and resting for 5 seconds between exercises. 
                    Some exercises require changing sides. There are 4 different personas with different disabilities such as blindness, shaky hands, physical disability and small mobile screen.
                </p>

                <h3>Our Solution</h3>
                <p>
                    7-minute-workout is a single page application created with HTML, CSS and vanilla JavaScript. 
                    It has text-to-speech to combat blindness, big buttons to make the clicking easier for people with shaky hands, the ability to select only certain exercises or specific body parts you want to exercise and is responsive, making it available for everyone. 
                    It uses different ARIA-Labels to make it accessible.
                </p>
            </section>
            <section className='my-work'>
                <h2>Improving 7-Minute-Workout</h2>
                <h3>My role in the project</h3>
                <article>
                    <figure>
                        <img src={Modal} alt='A snippet of the website 7-Minute-Workout showing different exercises' />
                    </figure>
                    <div>
                        <p>
                            For this project, I was mainly responsible for setting up the HTML, CSS and making it accessible with ARIA-labels. 
                            I also wrote the logic for modal-windows in JavaScript and figuring out which exercises that were supposed to be included in the 7-minute-workout.
                        </p>
                    </div>
                </article>

                <h3>Using a JS Framework</h3>
                <article>
                    <div>
                        <p>
                            A big improvement for this project could be to use a JavaScript framework such as React. 
                            By using React, I could further improve the user experience and sustainability of the web page. 
                            Using techniques like code-splitting, bringing information to the front, subsetting fonts and using svg-sprites I could reduce the bundle size, resulting in an even more accessible website.
                        </p>
                        <p>
                            Furthermore, reformatting the code, as shown in the image, into a single function would also be quite preferrable. 
                            As of right now, there is a function for each button. 
                            This is not very modular. 
                            Instead, it should be made modular by compressing all the funtions into a single modular function that can accomplish the same task. 
                            This will also help improve sustainability.
                        </p>
                    </div>
                    <figure>
                        <img src={Code} alt='code showing the logic behind a form element' />
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