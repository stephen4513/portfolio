import React from "react";
import styles from '../components/projects.module.css';

function Robinhood() {
    return(
        <div className={styles.blockproject} data-aos="fade-right">
            <video className={styles.video} autoPlay loop muted >
                <source src="/images/robinhood.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.content}>
                <p className={styles.title}>Robinhood.ai</p>
                <p className={styles.description}>full-stack financial advisor app that offers friendly, sarcastic financial advice and provides real-time stock information</p>
                <ul className={styles.skills}>
                    <li>Next.js</li>
                    <li>OpenAI API</li>
                    <li>Firebase</li>
                    <li>Python</li>
                    <li>Fine-tuning</li>
                    <li>LLM orchestration</li>
                </ul>
            </div>
        </div>
    )
}

export default Robinhood;