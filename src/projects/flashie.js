import React from "react";
import styles from '../components/projects.module.css';

function Flashie() {
    return(
        <div className={styles.blockproject} data-aos="fade-right">
            <video className={styles.video} autoPlay loop muted >
                <source src="/images/flashiee.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.content}>
                <p className={styles.title}>Flashie.ai</p>
                <p className={styles.description}>Flashcard Generator full-stack SaaS app enabling users to create tailored flashcards for study or work, featuring authentication, flexible payments, and AI-driven card generation.</p>
                <ul className={styles.skills}>
                    <li>Next.js</li>
                    <li>OpenAI API</li>
                    <li>Firebase</li>
                    <li>Fine-tuning</li>
                    <li>Python</li>
                    <li>Clerk API</li>
                    <li>Stripe API</li>
                </ul>
            </div>
        </div>
    )
}

export default Flashie;