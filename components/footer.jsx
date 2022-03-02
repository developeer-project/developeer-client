import React from "react";

import styles from "../styles/Navbar.module.scss";

const Footer = () => {
  return (
    <div className={styles.foot_wrap}>
      <div className={styles.foot_logo_wrap}>
       
      </div>
      <div className={styles.foot_menu_wrap}>
        <p>Footer goes brrrrrrrrrrrrrrr</p>
        <ul>
          <li>Home</li>
          <li>Find</li>
          <li>Messages</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
