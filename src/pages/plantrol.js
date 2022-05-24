import React from 'react';
import ProjectDescription from '../components/ProjectDescription';

import PlantrolImg from '../images/plantrol.jpeg';

function Plantrol(){
    return (
        <main>
            <h1>Plantrol – Web Project</h1>
            <ProjectDescription image={PlantrolImg} title='Plantrol – Web Project' github='https://github.com/Webproject-exam' demo='https://webproject-exam.netlify.app/' />
        </main>
    );
}

export default Plantrol;