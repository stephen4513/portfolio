import React, { useState } from 'react';
import styles from './hero.module.css';

function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToIntroduction = () => {
        document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div
            className={styles.hero}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/richard.jpg)`
            }}
        >
            <header className={styles.header}>
                <div className={styles.menu}>
                    <img 
                        className={styles.menuBtn} 
                        src={`${process.env.PUBLIC_URL}/images/threelines.png`}
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                        <li className={styles.menuItem}><a className={styles.navLink} href="#about">About</a></li>
                        <li className={styles.menuItem}><a className={styles.navLink} href="#projects">Projects</a></li>
                        <li className={styles.menuItem}><a className={styles.navLink} href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Stephen Monahan's Portfolio</h1>
                <button className={styles.scrollButton} onClick={scrollToIntroduction}>
                    &#x25BC; {/* Down arrow symbol */}
                </button>
            </div>
        </div>
    );
}

export default Hero;

