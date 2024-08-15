import React from "react";
import styles from '../components/projects.module.css';

function Portfolio() {
    return (
        <div className={styles.blockproject} data-aos="fade-left" data-aos-delay="200">
            <img className={styles.image} src="/images/portfoliopic.jpg" alt="Stephen Monahan" />
            <div className={styles.content}>
                <p className={styles.title}>This portfolio</p>
                <p className={styles.description}>Made this portfolio to showcase my projects and skills</p>
                <ul className={styles.skills}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    );
}

export default Portfolio;
