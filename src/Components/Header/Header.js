import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useWindowSize from "../hooks/useWindowSize";
import styles from "./Header.module.scss";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

import { useSpring } from "react-spring";
import MbMenu from "@import/src/pages/MbMenu/MbMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { width } = useWindowSize();
  const navAnimation = useSpring({
    transform: menu ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
  });
  return (
    <Container>
      {menu ? <MbMenu setMenu={setMenu} style={navAnimation} /> : ""}
      <div className={styles.HeaderCntr}>
        <div className={styles.CntrWrap}>
          <h2 className={styles.Header}>VIKAS REDDY MAHESHWARAM</h2>
          {width > 786 ? (
            <div className={styles.TitleWrap}>
              <Link href="/">
                <h3 className={styles.Titles}>Home</h3>
              </Link>
              <Link href="/#projects">
                <h3 className={styles.Titles}>Projects</h3>
              </Link>
              <Link href="/#resume">
                <h3 className={styles.Titles}>Resume & Cover</h3>
              </Link>
              <Link href="/#about">
                <h3 className={styles.Titles}>About</h3>
              </Link>
              <Link href="/#contact">
                <h3 className={styles.Titles}>Contact</h3>
              </Link>
            </div>
          ) : (
            <FiMenu size={24} onClick={() => setMenu(true)} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
