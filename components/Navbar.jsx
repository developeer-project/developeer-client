import React from "react";
import { Button } from "@mantine/core";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_logo_wrap}>
        <img
          src="https://cdn.discordapp.com/attachments/792429986094907392/814376607225085962/ferris_wheel.gif"
          alt="logo"
        />
      </div>
      <div className={styles.nav_menu_wrap}>
        <ul>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
        </ul>

        <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
