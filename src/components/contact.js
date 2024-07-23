import React from 'react';
import styles from './contact.module.css';

function Contact() {
    return (
        <section id='contact' className={styles.contact}>
            <h2 className={styles.title}>Contact Me</h2>
            <div className={styles.contactInfo}>
                <div className={styles.linkedin}>
                    <a href='https://www.linkedin.com/in/stephen-monahan-90580b264/' target='_blank' rel='noopener noreferrer'>
                        <img className={styles.icon} src='/images/linkedin.png' alt='LinkedIn' />
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className={styles.email}>
                    <span>stephen.monahan4513@gmail.com</span>
                </div>
            </div>
        </section>
    );
}

export default Contact;




         // {  <nav>
           //     <ul className = {styles.navigation}> 
             //       <li className={styles.socials}>
               //         <img className={styles.icon} src='/images/linkedin.png' alt='linkedin' />
                 //       <a className={styles.linkdn} href='https://www.linkedin.com/in/stephen-monahan-90580b264/' target='_blank' rel='noonpener noreferrer'>LinkedIn</a> </li>
                   // <li className={styles.socials}>
                     //   <img className={styles.icon} src='/images/46951.png' alt = 'email'/>
                       // <p>stephen.monahan4513@gmail.com</p></li>
                        
                //</ul>
            //</nav>