import Header from "@import/src/Components/Header/Header";
import React from "react";
import { Container } from "react-bootstrap";
import Projects from "../Projects/Projects";
import styles from "./HomePage.module.scss";
import Image from "next/image";
import Button from "@import/src/Components/Button/Button";
import Resume from "../Resume/Resume";
import About from "../About/About";
import Typewriter from "typewriter-effect";
import Contact from "../Contact/Contact";

const HomePage = ({ text }) => {
  return (
    <div className={styles.Home}>
      <Header />
      <Container>
        <div className={styles.MainCntr}>
          <div className={styles.Text}>
            <h2 className={styles.Name}>
              📱HELLO, I`M 👇
              <span
                style={{
                  color: "red",
                  paddingLeft: "10px",
                  display: "flex",
                  justifyContent: "end",
                  paddingTop: "20px",
                }}
              >
                <Typewriter
                  options={{
                    strings: ["VIKAS REDDY"],
                    autoStart: true,
                    loop: Infinity,
                  }}
                />
              </span>
            </h2>
            <img
              className={styles.MbProfile}
              src="/images/profile.jpg"
              alt=""
            />
            <h3 className={styles.Head}>
              <Typewriter
                options={{
                  strings: ["FRONT END 📱DEVELOPER💻"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <h3 className={styles.Desc}>
              knack of building applications with
              <span className={styles.Oper}>FRONT END OPERATIONS..</span>
            </h3>
            <button className={styles.Btn}>Contact</button>
          </div>
          <img className={styles.Profile} src="/images/profile.jpg" alt="" />
        </div>
        <Projects />
        <Resume />
        <About />
        <Contact />
      </Container>
    </div>
  );
};

export default HomePage;
