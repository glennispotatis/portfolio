import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDescription from '../components/ProjectDescription';

import uniLeague from '../images/unileague.jpeg';
import Plantrol from '../images/plantrol.jpeg';
import uniLeagueResults from '../images/unileague-results.png';
import uniLeagueCode from '../images/unileague-code.png';
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
                <h3 className='code'>const quickFacts = &#123;</h3>
                <ul className='code'>
                    <li>Timeline: Late December – May 2022</li>
                    <li>Type: Group Project</li>
                    <li>Course: IDG3920 - Bachelor Project</li>
                    <li>Role: Low-fidelity Design, Full-stack Developer</li>
                    <li>Tools: Balsamiq, MongoDB Express React Node (MERN)</li>
                    <li>Client: Associate Professor at Department of Design at NTNU in Gjøvik</li>
                </ul>

                <h3>Problem Description</h3>
                <p>
                    An associate professor at NTNU in Gjøvik is holding Kahoot-quizzes at the end of each lecture. 
                    At the end of the semester, all the scores from the Kahoot-quizzes gets summarized. 
                    The student with the most points will win a prize for their efforts during the course. 
                    However, summarizing the scores is a tedious task where human error can be a factor.
                </p>

                <h3>Our Solution</h3>
                <p>
                    uniLeague is a web application where a teacher can upload an excel-file they get when downloading the scores after the Kahoot-quiz. 
                    The application will take the scores and automatically summarize them, and then display them for both students and teachers to see. 
                    A student can see their individual quiz performance, while the teachers can see how the students are ranking on the leaderboard in their course.
                </p>
            </section>
            <section className='my-work'>
                <h2>Improving uniLeague</h2>
                <h3>My role in the project</h3>
                <article>
                    <figure>
                        <img src={uniLeagueResults} alt='The resultpage for the course IDG2100 on the application uniLeague' />
                    </figure>
                    <div>
                        <p>
                            In this project, I was responsible for the front-end and connecting the front-end to the back-end. 
                            I have used HOCs, writing stateless and stateful components, writing logic for logic-based components, and created the user authorization for the front-end by using a context-provider.
                        </p>
                    </div>
                </article>
                <h3>Code Optimization</h3>
                <article>
                    <div>
                        <p>
                            For this project, I would like to optimize the code. 
                            The whole front-end was created in 2 weeks to make it ready for testing. 
                            This meant that a lot of shortcuts were taken to be able to finish the project within the timeframe that were set. 
                            Instead of using ternary operators, I could have used conditional rendering with && operator. 
                            This would remove a lot of unnecessary “: null” code-snippets. 
                            Furthermore, the “hide/show password” button in the login-component could be improved. 
                            As of now it is more or less forced into place and thus it is less “accessible” that it can be.
                        </p>
                    </div>
                    <figure>
                        <img src={uniLeagueCode} alt='Code showing the toggle between hide/show password' />
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