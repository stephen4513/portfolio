import React from 'react';
import styles from './header.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a className={styles.navLink} href='#about'>About me</a></li>
                    <li className={styles.navItem}><a className={styles.navLink} href='#projects'>Projects</a></li>
                    <li className={styles.navItem}><a className={styles.navLink} href='#contact'>Contact me</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;