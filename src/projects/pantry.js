import React from "react";
import styles from '../components/projects.module.css';

function Pantry() {
    return(
        <div className={styles.blockproject} data-aos="fade-right">
            <video className={styles.video} autoPlay loop muted >
                <source src="/images/Pantry.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.content}>
                <p className={styles.title}>Inventory System</p>
                <p className={styles.description}>Full-stack inventory app with an AI assistant and machine vision to track objects via a camera to improve accuracy and efficiency.</p>
                <ul className={styles.skills}>
                    <li>Next.js</li>
                    <li>OpenAI API</li>
                    <li>Firebase</li>
                    <li>Google Cloud Vision API</li>
                </ul>
            </div>
        </div>
    )
}

export default Pantry;