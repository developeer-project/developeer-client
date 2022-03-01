import React from "react";
import { Button } from "@mantine/core";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_logo_wrap}>
        <img
          src="https://cdn.discordapp.com/attachments/746292114429837313/948179323725181030/Letter_D_GIF.gif"
          alt="logo"
        />
      </div>
      <div className={styles.nav_menu_wrap}>
        <ul>
          <li>Home</li>
          <li>Find</li>
          <li>Messages</li>
          <li>Settings</li>
        </ul>

        <Button variant="gradient" gradient={{ from: "orange", to: "red" }}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
