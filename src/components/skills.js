import React from "react";
import styles from "./skills.module.css";

const skills = [
  { name: 'Python', src: '/images/python_logo.png', alt: 'Python logo' },
  { name: 'C++', src: '/images/c++_logo.png', alt: 'C++ logo' },
  { name: 'AWS', src: '/images/aws_logo.png', alt: 'AWS logo' },
  { name: 'CSS', src: '/images/css_logo.png', alt: 'CSS logo' },
  { name: 'HTML', src: '/images/html_logo.png', alt: 'HTML logo' },
  { name: 'React', src: '/images/react_logo.png', alt: 'React logo' },
  { name: 'JavaScript', src: '/images/js_logo.png', alt: 'JavaScript logo' },
  { name: 'Firebase', src: '/images/firebase_logo.png', alt: 'Firebase logo' },
  { name: 'Next.js', src: '/images/nextjs_logo.png', alt: 'Next.js logo' },
  
];

const SkillCard = ({ img, title, alt }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillImageContainer}>
        <img src={img} alt={alt} />
      </div>
      <p className={styles.skillName}>{title}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.title}>
      
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.logos}>
          <div className={styles.logosSlide}>
            {skills.map((skill, id) => (
              <SkillCard key={id} img={skill.src} title={skill.name} alt={skill.alt} />
            ))}
            {skills.map((skill, id) => (
              <SkillCard key={id + skills.length} img={skill.src} title={skill.name} alt={skill.alt} />
            ))}
          </div>
        </div>
        <div className={`${styles.gradient} ${styles.gradientLeft}`}></div>
        <div className={`${styles.gradient} ${styles.gradientRight}`}></div>
      </div>
    </section>
  );
};

export default Skills;
