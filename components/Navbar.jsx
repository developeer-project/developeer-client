import React from "react";
import Link from "next/link";
import { Button, Text } from "@mantine/core";
import { Anchor } from "@mantine/core";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const { data: session, status: authStatus } = useSession();
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={styles.nav_wrap}>
      <div className={styles.nav_logo_wrap}>
        <img
          src="https://cdn.discordapp.com/attachments/951426015404654612/952147112060133426/D2_logo.png"
          alt="logo"
        />
      </div>
      <div className={styles.nav_menu_wrap}>
        <ul>
          <li>
            {authStatus === "authenticated" && (
              <div className={styles.drop_nav}>
                <Button variant="outline">👩🏼‍💻 🧑🏼‍💻</Button>
                <div className={styles.drop_nav_items}>
                  <Text weight={500}>
                    {session.user.name || session.user.email}
                  </Text>
                  <Button variant="subtle" onClick={signOut} compact>
                    Sign Out
                  </Button>
                </div>
              </div>
            )}
          </li>
        </ul>
        <Link
          href={authStatus === "authenticated" ? "/app-main" : "/auth/signin"}
          passHref
        >
          <Button
            passHref
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
          >
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
