import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './projects.module.css';

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 500, // Adjust this value as needed
        });
    }, []);

    return (
        <section id="projects" className={styles.projects}>
            <h1>Projects</h1>
            <div className={styles.bigproject}>
                <div className={styles.blockproject} data-aos="fade-right">
                    <video className={styles.video} autoPlay loop muted controls>
                        <source src="/images/weather_demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className={styles.content}>
                        <p className={styles.title}>Weather app back end</p>
                        <p className={styles.description}>Developed a weather app back end using C++ and libraries such as httplib and nlohmann/json</p>
                        <ul className={styles.skills}>
                            <li>C++</li>
                        </ul>
                    </div>
                </div>
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
            </div>
        </section>
    );
}

export default Projects;


