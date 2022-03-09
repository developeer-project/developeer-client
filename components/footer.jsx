import React from "react";

import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.foot_wrap}>
      <div className={styles.foot_left_wrap}>
        <img
          src="https://cdn.discordapp.com/attachments/746292114429837313/948179323725181030/Letter_D_GIF.gif"
          alt="logo"
        />
        <div className={styles.text_below_logo}>
          © 2022 Registered Trademark
        </div>
      </div>

      <div className={styles.foot_right_wrap}>
        <div className={styles.foot_menu_wrap}>
          <div className="d1">
            <ul>
              <li>
                <b>Home</b>
              </li>
              <li>Find</li>
              <li>Messages</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
                <b>Contact</b>
              </li>
              <li>Find</li>
              <li>Messages</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
                <b>Disclaimer</b>
              </li>
              <li>Find</li>
              <li>Messages</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
                <b>T and C</b>
              </li>
              <li>Find</li>
              <li>Messages</li>
            </ul>
          </div>
          <div className="d1">
            <ul>
              <li>
                <b>Help</b>
              </li>
              <li>Find</li>
              <li>Messages</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
