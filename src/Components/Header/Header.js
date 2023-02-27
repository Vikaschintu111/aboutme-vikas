import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <Container>
      <div className={styles.HeaderCntr}>
        <div className={styles.CntrWrap}>
          <h2 className={styles.Header}>VIKAS REDDY MAHESHWARAM</h2>
          <div className={styles.TitleWrap}>
            <h3 className={styles.Titles}>Home</h3>
            <h3 className={styles.Titles}>Projects</h3>
            <h3 className={styles.Titles}>Resume</h3>
            <h3 className={styles.Titles}>About</h3>
            <h3 className={styles.Titles}>Contact</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
