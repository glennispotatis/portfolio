import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectDescription from '../components/ProjectDescription';

import PlantrolImg from '../images/plantrol.jpeg';
import uniLeague from '../images/unileague.jpeg';
import Accessibility from '../images/accessibility.jpeg';
import refresh from '../images/plantrol-refresh.png';
import overview from '../images/plantrol-overview.png';
import BackArrow from '../components/BackArrow';

function Plantrol() {
    return (
        <main>
            <BackArrow />
            <h1>Plantrol – Web Project</h1>
            <ProjectDescription image={PlantrolImg} title='Plantrol – Web Project' github='https://github.com/Webproject-exam' demo='https://webproject-exam.netlify.app/' />
            <section className='problem-description'>
                <h2>Project Outline</h2>
                <h3>Quick Facts = &#123;</h3>
                <ul>
                    <li><span className='strong'>Timeline:</span> March – June 2021</li>
                    <li><span className='strong'>Type:</span> Group Project</li>
                    <li><span className='strong'>Course:</span> IDG2671 - Web Project</li>
                    <li><span className='strong'>Role:</span> Full-stack Developer</li>
                    <li><span className='strong'>Tools:</span> MongoDB Express React Node (MERN)</li>
                    <li><span className='strong'>Client:</span> Higher Executive Officer at Department of Design at NTNU in Gjøvik</li>
                </ul>
                <h3>Problem Description</h3>
                <p>
                    Mustad is part of the NTNU in Gjøvik campus.
                    Mustad is decorated with plants in various places, however, it is hard to remember exactly where the plants are.
                    Additionally, it's challenging to take care of all plants, because every plant has its own requirements.
                </p>

                <h3>Our Solution</h3>
                <p>
                    Plantrol is a website for students and employees at NTNU to keep track of the plants placed around campus.
                    By using Plantrol, anyone can learn more about the plants located at Mustad.
                    Managers can add, edit and remove plants and users.
                    Gardeners can keep track of where a plant is located, how much water it needs, when it needs to be watered, and who watered it last.
                </p>
            </section>
            <section className='my-work'>
                <h2>Improving Plantrol</h2>
                <h3>My role in the project</h3>
                <article>
                    <figure>
                        <img src={overview} alt='an overview of plantrols plant page' />
                    </figure>
                    <div>
                        <p>
                            As responsible for the "Full-stack" of this application, my main tasks have been to connect the front-end to the back-end and write the logic behind most of the components.
                            I have created sorting logic, HOCs, user authentication by using context for the application and all the API-calls.
                        </p>
                    </div>
                </article>

                <h3>Authentication</h3>
                <article>
                    <div>
                        <p>
                            One of the things I was responsible for, was the handling of authenticated users on the front-end.
                            For this project, we used refresh-tokens as a way of authenticating users.
                            This meant that every 15 minutes, the user needed a new refresh- and access-token.
                            As I was fairly new to this concept, I did not know the best practices for doing this.
                            For this application, there is a timer that will trigger every 5 minutes to check if the refresh-token is about to be expired;
                            when it is, the front-end will call the back-end for a new refresh-token.
                            This solution works as expected.
                            However, there is an issue where a user is logged in to the application and closes the browser window and does not visit the page for over a week.
                            When the user comes back to the application, the user will still be "logged in" visually, but not authenticated
                            (because the refresh-token and access-token is not valid anymore).
                            When the user tries to access a restricted page or tries to do an action, they will be redirected to /403 and be logged out.
                        </p>
                        <p>
                            Now, a fix to this user experience issue could be to create a better interceptor for axios, promise based HTTP client for the browser and node.js, that will check if the refresh-token is expired, then call the API and acquire a new refresh-token, and then do the initial call.
                            Also, when the user revisits the page after a week of inactivity, immediately do an API-call to acquire a new-refresh token, if that is not possible, log the user out of the application before the user has the ability to do any action.
                        </p>
                    </div>
                    <figure>
                        <img src={refresh} alt='a code snippet of plantrols solution to acquiring a new refresh-token' />
                    </figure>
                </article>
            </section>
            <h2>Other projects you may like</h2>
            <section className='projects'>
                <ProjectCard image={uniLeague} title='uniLeague – Bachelor Project' link='/unileague' />
                <ProjectCard image={Accessibility} title='7-Minute-Workout – Accessibility Exam' link='/workout' />
            </section>
        </main>
    );
}

export default Plantrol;