import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.Container}>
        <div className={styles.Wrap}></div>
        <h1 className={styles.Header}>ABOUT</h1>
        <p className={styles.Desc}>
          Hi, I'm VIKAS REDDY, a FRONT - END DEVELOPER with 0.6 years of
          experience creating beautiful and functional websites. I specialize in
          creating user-friendly, responsive, and fast-loading web pages using
          modern technologies like HTML5, CSS3, and JavaScript,React.js,Next.js
          etc. Throughout my career, I've had the opportunity to work with a
          diverse range of clients, from small startups to large corporations.
          I've contributed to the development of websites for industries . My
          passion for web development drives me to continuously learn new skills
          and stay up-to-date with the latest trends in the industry. My work
          philosophy is centered around collaboration and communication. I
          believe that the best results come from working closely with clients
          to understand their needs and goals. I pride myself on my ability to
          translate complex technical requirements into simple and effective
          solutions. In my free time, I enjoy exploring new technologies,
          attending web development conferences, and contributing to open-source
          projects. When I'm not coding, you can find me hiking, reading, or
          spending time with my family. I'm excited to hear about your project
          and how I can help bring your vision to life. Please don't hesitate to
          get in touch to learn more about my skills and experience or to
          discuss your next project.
        </p>
      </div>
    </div>
  );
};

export default About;
