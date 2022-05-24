import { Link } from 'gatsby';
import React from 'react';

function ProjectCard({ image, title, link }) {
    return (
        <article className='project-card'>
            <Link to={link}>
                <div>
                    <img src={image} alt={`A project Glenn has created called ${title}`} />
                    <h3 className='title'>{title}</h3>
                </div>
            </Link>
        </article>
    );
}

export default ProjectCard;