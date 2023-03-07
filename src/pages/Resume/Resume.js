import Button from "@import/src/Components/Button/Button";
import React from "react";
import styles from "./Resume.module.scss";
import Typewriter from "typewriter-effect";

const Resume = () => {
  return (
    <div className={styles.Resume}>
      <h1 className={styles.HeadCntr}>
        <Typewriter
          options={{
            strings: ["Resume & Cover Letter"],
            autoStart: true,
            loop: Infinity,
          }}
        />
      </h1>
      <div className={styles.Cntr}>
        <div className={styles.Cover}>
          <h1>COVER LETTER</h1>
          <h1 className={styles.Resu}>Resume</h1>
        </div>

        <div className={styles.Wrap}>
          <p className={styles.Desc}>
            As a Front End Developer with 0.6 years of experience, I have honed
            my skills in HTML, CSS, JavaScript, React.js,Next.js and various web
            development frameworks. I have developed websites and applications
            that are optimized for user experience, functionality, and
            accessibility. One of my strongest assets is my ability to
            collaborate with designers, developers, and stakeholders to
            understand their vision and translate it into a functional product.
            I am also experienced in using version control tools like Git, and I
            am comfortable working with agile methodologies. In addition to
            technical skills, I am a problem-solver and a critical thinker. I am
            able to identify and resolve issues in a timely manner, and I am
            constantly seeking to improve my skills and stay up-to-date with the
            latest industry trends. I am excited about the opportunity to
            contribute my skills to your company, and I am confident that I can
            bring value to your team. Thank you for considering my application.
            I look forward to discussing my qualifications in further detail.
          </p>
          <div className={styles.ResCntr}>
            <h1 className={styles.Mbresu}>Resume</h1>
            <img className={styles.ImgCntr} src="/images/res.png" />
            <div className={styles.Btn}>
              <Button text="Download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
