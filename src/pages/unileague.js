import React from 'react';
import ProjectDescription from '../components/ProjectDescription';

import uniLeague from '../images/unileague.jpeg';

function UniLeague(){
    return (
        <main>
            <h1>uniLeague – Bachelor Project</h1>
            <ProjectDescription title='uniLeague – Bachelor Project' image={uniLeague} github='https://github.com/Bachelorproject-Spring-22' demo='https://unileague.netlify.app/' />
        </main>
    );
}

export default UniLeague;