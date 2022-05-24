import React from 'react';
import '../css/project.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdOpenInBrowser } from 'react-icons/md'

function ProjectDescription({ image, title, github, demo }) {
    return (
        <section className='project-description'>
            <img src={image} alt={`A project Glenn has created called ${title}`} />
            <article>
                <a href={github} rel='noreferrer' target='_blank'>
                    <AiOutlineGithub size='3em' />
                    <p>See GitHub</p>
                </a>
                <a href={demo} rel='noreferrer' target='_blank'>
                    <MdOpenInBrowser size='3em' />
                    <p>See Demo</p>
                </a>
            </article>
        </section>
    );
}

export default ProjectDescription;