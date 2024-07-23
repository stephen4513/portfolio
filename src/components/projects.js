import React from "react";
import styles from './projects.module.css';

function Projects(){
    return(
        <section id="projects" className={styles.projects}>
            <h1>Projects</h1>
        <div className={styles.bigproject}>
            <div className={styles.blockproject}>
                <p className={styles.title}>Weather app back end</p>
                <img className={styles.image} src="/images/weather.png" alt="react" />
                <p className={styles.description}>Developted a weather app back end using C++ and libraries such as httplib and nlohmann/json</p>
                <ul className={styles.skills}>
                    <li>C++</li>
                </ul>
            </div>
            <div className={styles.blockproject}>
                 <p className={styles.title}>This portfolio</p>
                <img className={styles.image} src="/images/portfoliopic.jpg"  alt="Stephen Monahan"/>
                <p className={styles.description}>Made this portfolio to showcase my projects and skills </p>
                <ul className={styles.skills}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
            </div>

        </div>

            
        </section>

    );
}


export default Projects;