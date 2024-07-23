import React from 'react'
import styles from './about.module.css'

function About(){
    return (
        <section id='about' className={styles.about}>
            <div className={styles.text}>
                <h2>About me</h2>
                <p>
                Hey there! I am currently a junior at Rutgers University majoring in computer engineering.
                 I am mainly interested in full stack development and machine learning, but I am also interested in hardware.
                 This includes circuit design and computer architecture. I am also part of IEEE Eta Kappa Nu,
                 Rutgers's electrical and computer engineering honors society where I get the chance to attend several conferences
                 about machine learning. Whether you're interested in exploring my projects, sharing your thoughts, or discussing potential collaborations,
                 I'm excited to connect with you. Feel free to reach out, let's embrace progress, passion, and the journey of continuous learning together!
                </p>
            </div>
            <div className={styles.pics}>
                <img className={styles.hkn} src='/images/hkn.jpg'  alt='Stephen Monahan'/>
                <img className={styles.coding} src='/images/coding.jpg' alt='Stephen Monahan'/>
                <img className={styles.hardware} src='/images/hardware.jpg' alt='Stephen Monahan' />
            </div>
        </section>

    );
}

export default About;