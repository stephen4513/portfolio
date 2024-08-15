import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from './projects.module.css';
import WeatherApp from '../projects/weatherApp';
import Portfolio from '../projects/portfolio';
import Pantry from "../projects/pantry";
import Brainstorm from "../projects/brainstorm";
import Robinhood from "../projects/robinhood";

function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 100, // Adjust this value as needed
        });
    }, []);

    return (
        <section id="projects" className={styles.projects}>
            <h1>Projects</h1>
            <div className={styles.bigproject}>
                <WeatherApp />
                <Portfolio />
                <Pantry />
                <Brainstorm />
                <Robinhood />
            </div>
        </section>
    );
}

export default Projects;
