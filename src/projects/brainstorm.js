import React from "react";
import styles from '../components/projects.module.css';

function Brainstorm() {
    return(
        <div className={styles.blockproject} data-aos="fade-right">
            <video className={styles.video} autoPlay loop muted >
                <source src="/images/brainstormai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.content}>
                <p className={styles.title}>Brainstorm.ai</p>
                <p className={styles.description}>Project Recommender full-stack app using AI to match projects to your resume, attracting 50 users within 24 hours during a hackathon before API tokens ran out.</p>
                <ul className={styles.skills}>
                    <li>Next.js</li>
                    <li>OpenAI API</li>
                    <li>Firebase</li>
                </ul>
            </div>
        </div>
    )
}

export default Brainstorm;