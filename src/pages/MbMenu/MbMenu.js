import Link from "next/link";
import React from "react";
import styles from "./MbMenu.module.scss";
import { animated } from "react-spring";

const MbMenu = ({ setMenu, style }) => {
  return (
    <animated.div
      className={styles.MbCntr}
      onClick={() => {
        setMenu(false);
      }}
      style={style}
    >
      <div className={styles.TitleWrap}>
        <Link href="/">
          <h5 className={styles.Title}>HOME</h5>
        </Link>
        <Link href="/#projects">
          <h5 className={styles.Title}>PROJECTS</h5>
        </Link>
        <Link href="/#resume">
          <h5 className={styles.Title}>RESUME & COVER</h5>
        </Link>
        <Link href="/#about">
          <h5 className={styles.Title}>ABOUT</h5>
        </Link>
        <Link href="/#contact">
          <h5 className={styles.Title}>CONTACT</h5>
        </Link>
      </div>
    </animated.div>
  );
};
export default MbMenu;
