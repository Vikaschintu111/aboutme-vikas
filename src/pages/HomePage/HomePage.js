import Header from "@import/src/Components/Header/Header";
import React from "react";
import { Container } from "react-bootstrap";
import Projects from "../Projects/Projects";
import styles from "./HomePage.module.scss";
import Image from "next/image";
import Button from "@import/src/Components/Button/Button";
import Resume from "../Resume/Resume";
import About from "../About/About";

const HomePage = ({ text }) => {
  return (
    <div className={styles.Home}>
      <Header />
      <div className={styles.MainCntr}>
        <div className={styles.Text}>
          <h2 className={styles.Name}>
            Hello, I`M 👇👇👇👇
            <span
              style={{
                color: "red",
                paddingLeft: "10px",
                display: "flex",
                justifyContent: "end",
                paddingTop: "20px",
              }}
            >
              😊 VIKAS REDDY😊
            </span>{" "}
          </h2>
          <h3 className={styles.Head}>💻 Front End / UI Developer 📱</h3>
          <h3 className={styles.Desc}>
            knack of building applications with
            <span style={{ color: "red", paddingLeft: "10px" }}>
              FRONT END OPERATIONS..
            </span>
          </h3>
          <Button text="Contact" />
        </div>
        <img className={styles.Profile} src="/images/profile.jpg" alt="" />
      </div>
      <Projects />
      <Resume />
      <About />
    </div>
  );
};

export default HomePage;
