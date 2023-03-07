import React from "react";
import styles from "./Contact.module.scss";
import { BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsTelephoneOutbound } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <h1 className={styles.Header}>CONTACT</h1>
      <div className={styles.ContactWrap}>
        <div className={styles.Container}>
          <a
            className={styles.Images}
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRsqHRqNrHkvmqGSLsGMfpZRSJplMKPXFnNsfqdMRPfwFFNpxGwLKmdGVDgKgTHTbpdvtRG"
          >
            <GrMail style={{ color: "red" }} size={40} />
            <h2 className={styles.Social}>
              {" "}
              <Typewriter
                options={{
                  strings: ["Mail"],
                  autoStart: true,
                  loop: Infinity,
                }}
              />
            </h2>
          </a>
          <a className={styles.Images} href="https://github.com/Vikaschintu111">
            <BsGithub style={{ color: "black" }} size={40} />
            <h2 className={styles.Social}>
              {" "}
              <Typewriter
                options={{
                  strings: ["Git"],
                  autoStart: true,
                  loop: Infinity,
                }}
              />
            </h2>
          </a>
          <a
            className={styles.Images}
            href="https://www.linkedin.com/in/maheshwaram-vikasreddy-14b792228/"
          >
            <BsLinkedin style={{ color: "blue" }} size={40} />
            <h2 className={styles.Social}>
              {" "}
              <Typewriter
                options={{
                  strings: ["Linkdin"],
                  autoStart: true,
                  loop: Infinity,
                }}
              />
            </h2>
          </a>
          <a
            className={styles.Images}
            href="https://www.instagram.com/vikas_reddie_6668/?next=%2F"
          >
            <BsInstagram style={{ color: "red" }} size={40} />
            <h2 className={styles.Social}>
              {" "}
              <Typewriter
                options={{
                  strings: ["Instagram"],
                  autoStart: true,
                  loop: Infinity,
                }}
              />
            </h2>
          </a>

          <a className={styles.Images} href="tel:9573313869">
            <BsTelephoneOutbound style={{ color: "green" }} size={40} />
            <h2 className={styles.Social}>
              {" "}
              <Typewriter
                options={{
                  strings: ["Phone"],
                  autoStart: true,
                  loop: Infinity,
                }}
              />
            </h2>
          </a>
        </div>
        <div className={styles.InCntr}>
          <form action="https://formspree.io/f/xgebyjvg" method="POST">
            <input type="text" name="name" placeholder="name" required />
            <input
              type="email"
              name="name"
              placeholder="...@gmail.com"
              required
            />
            <select className={styles.Selector} name="Continent" required>
              <option>none</option>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Pune</option>
              <option>Maharashtra</option>
              <option>Chennai</option>
            </select>
            <textarea
              className={styles.Text}
              name="message"
              placeholder="Message"
            ></textarea>
            <button className={styles.Btn}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
