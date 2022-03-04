import React from "react";

import styles from "../styles/Navbar.module.scss";

const Footer = () => {
  return (
    <div className={styles.foot_wrap}>
      <div className={styles.foot_menu_wrap}>
      <div class="d1">About us</div>
  <div class="d2">Contact us</div>
  <div class="d3">Terms & Conditions</div>
  <div class="d4">Pickachu</div>
      </div>
    </div>
  );
};

export default Footer;
