import React from "react";
import styles from '../components/projects.module.css';

function WeatherApp() {
    return (
        <div className={styles.blockproject} data-aos="fade-right">
            <video className={styles.video} autoPlay loop muted >
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
    );
}

export default WeatherApp;
