import React from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  const [navbar, setNavbar] = useState(false);

  const changeBackground = (e) => {
    console.log("scroll event called");
    console.log(e);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <div
      onScroll={changeBackground}
      className={
        navbar ? `${styles.nav_wrap} ${styles.active}` : styles.nav_wrap
      }
    >
      <div className={styles.nav_logo_wrap}>
        <img
          src="https://cdn.discordapp.com/attachments/951426015404654612/952147112060133426/D2_logo.png"
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
