import React from 'react';
import styles from './about.module.css';

function About() {
    return (
        <section id='about' className={styles.about}>
            <div className={styles.line}></div>
            <div className={styles.row}>
                <img className={styles.gif} src='/images/coding.gif' alt='AI Gif'/>
                <div className={`${styles.text} ${styles.text1}`}>
                    <h2>About <span className={styles.high}>me</span></h2>
                    <p>
                        I am currently a Junior at <span className={styles.high}>Rutgers University</span>, passionate about full stack development and machine learning.
                    </p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.text} ${styles.text2}`}>
                    <p>
                        I am also part of Rutgers's electrical and computer engineering <span className={styles.high}>honors society</span> where 
                        I get the chance to learn from professionals.
                    </p>
                </div>
                <img className={styles.gif} src='/images/ai.gif' alt='Coding Gif'/>
            </div>
            <div className={styles.row}>
                <img className={styles.gif} src='/images/hardware.gif' alt='Hardware Gif'/>
                <div className={`${styles.text} ${styles.text3}`}>
                    <p>
                        I am also interested in <span className={styles.high}>hardware</span>, this includes computer architecture and circuit design!
                    </p>
                </div>
            </div>
            <div className={styles.line}></div>
        </section>
    );
}

export default About;

