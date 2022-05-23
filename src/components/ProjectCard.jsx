import { Link } from 'gatsby';
import React from 'react';

function ProjectCard({ image, title }) {
    return (
        <article className='project-card'>
            <Link to='/'>
                <div>
                    <img src={image} alt={`"A project Glenn has created called ${title}`} />
                    <h3>{title}</h3>
                </div>
            </Link>
        </article>
    );
}

export default ProjectCard;