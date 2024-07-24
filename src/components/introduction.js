import React from 'react';
import styles from './introduction.module.css';
import Typewriter from 'typewriter-effect';

function Introduction() {
    const Type = () => (
        <div className={styles.typeEffect}>
            <Typewriter
                options={{
                    strings: ['Full stack development', 'Machine Learning', 'Hardware', 'Software Engineering'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 20,
                }}
            />
        </div>
    );

    return (
        <div id="introduction" className={styles.introtextContainer}>
            <div className={styles.introtext}>
                <h1>Hi, my name is <span className={styles.name}>Stephen Monahan</span></h1>
                <h2>
                    and I am a computer engineering student. <br />
                    <Type />
                </h2>
            </div>
            <img className={styles.image} src='/images/stephen.jpg' alt='Stephen Monahan' />
        </div>
    );
}

export default Introduction;



