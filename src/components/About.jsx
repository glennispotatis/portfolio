import React from 'react';
import Glenn from '../images/glenn.png';

function About() {
    return (
        <section className='description'>
            <article className='about-image'>
                <h1>Glenn Eirik Hansen</h1>
                <img src={Glenn} alt='Glenn Eirik Hansen posing in black and white' />
            </article>
            <article className='about-description'>
                <p>You'll find me soaring through the skies in an airplane or sitting behind a desk writing code on my computer.</p>
                <p>
                    Hi there! My name is Glenn Eirik Hansen, and I am a fullstack web developer. I am an enthusiastic and kind guy that
                    that want's the best out of his life. As of writing this, I am studying Web Development at NTNU and is currently writing
                    my bachelor thesis. On the private side, I am very interested in airplanes and is currently working towards my pilots license.
                    Music is also a big passion in my life, I play the drums, but can also play the guitar, bass and keyboard somewhat... (I won't call myself a pro though...)
                    My favorite genre is metal and favorite band is the "Neue Deutsche Härte"-band Rammstein. I also love the smell and fresh air of nature,
                    going on camping trips is a lot of fun. Some may say I am a gun nut, as I am participating in IPSC (International Practical Shooting Confederation),
                    where I am a certified Range Officer.
                </p>
                <p>As you can see, I am quite the active person with a lot of hobbies and interests! While you're here, check out my projects below ;)</p>
            </article>
        </section>
    );
}

export default About;