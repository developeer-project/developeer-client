import React from "react";

import styles from "../styles/Navbar.module.scss";

const Footer = () => {
  return (
    <div className={styles.foot_wrap}>

      <div className={styles.foot_left_wrap}>
      <img  src="https://cdn.discordapp.com/attachments/746292114429837313/948179323725181030/Letter_D_GIF.gif" alt="logo" />
      </div>

      <div className={styles.foot_right_wrap}>

      
      <div className={styles.foot_menu_wrap}>
      <div className="d1">Home</div>
  <div className="d2">Contact us</div>
  <div className="d3">Disclaimer</div>
  <div className="d4">Terms & Conditions</div>
  <div className="d5">Report Bugs</div>
         </div>



      </div>
    </div>
  );
};

export default Footer;
