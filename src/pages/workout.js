import React from 'react';
import ProjectDescription from '../components/ProjectDescription';

import Accessibility from '../images/accessibility.jpeg';

function Workout(){
    return (
        <main>
            <h1>7-Minute-Workout – Accessibility Exam</h1>
            <ProjectDescription image={Accessibility} title='7-Minute-Workout – Accessibility Exam' github='https://github.com/glennispotatis/eksamen-tilgjengelighet-2020' demo='https://folk.ntnu.no/glenneha/idg2012/' />
        </main>
    );
}

export default Workout;