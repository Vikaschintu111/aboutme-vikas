import React from "react";
import styles from "./Projects.module.scss";
import Typewriter from "typewriter-effect";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.Container}>
        <h1 className={styles.Head}>
          <Typewriter
            options={{
              strings: ["Projects"],
              autoStart: true,
              loop: Infinity,
            }}
          />
        </h1>
      </div>
      <div className={styles.MainWrap}>
        <div className={styles.Wrap}>
          <img className={styles.ImgCntr} src="/images/todo.png" />
          <a href="https://todo-list-application-henna.vercel.app/">
            <button className={styles.Btn}>click to open project</button>
          </a>
        </div>
      </div>
      {/* <div className={styles.MainWrap}>
        <div className={styles.Wrap}>
          <img className={styles.ImgCntr} src="/images/todo.png" />{" "}
          <button className={styles.Btn}>click to open project</button>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
