import React, { useState } from 'react';
import styles from './header.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.menu}>
                    <img 
                        className={styles.menuBtn} 
                        src="/images/threelines.png" 
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <ul 
                        className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    >
                        <li className={styles.menuItem}><a className={styles.navLink} href="#about">About me</a></li>
                        <li className={styles.menuItem}><a className={styles.navLink} href="#projects">Projects</a></li>
                        <li className={styles.menuItem}><a className={styles.navLink} href="#contact">Contact me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

