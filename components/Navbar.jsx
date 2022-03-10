import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
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
          <a href="#">
            <li>Home</li>
          </a>

          <a href="#">
            <li>Find</li>
          </a>

          <a href="#">
            <li>Messages</li>
          </a>
        </ul>

        <Button
          onClick={() => router.push("./api/auth/signin")}
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
