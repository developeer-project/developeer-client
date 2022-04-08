import React from "react";
import Link from "next/link";
import { Button, Text } from "@mantine/core";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const { data: session, status: authStatus } = useSession();
  const { asPath } = useRouter();

  const isApp = asPath.slice(0, 4) === "/app";
  const isHome = asPath === "/";

  const getStartedPath = () => {
    if (isHome && authStatus === "unauthenticated") return "/auth/signin";
    if (isApp && authStatus === "authenticated") return "/app/profile";
    return "/app";
  };

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
                <Button variant="outline">👩🏼‍💻 </Button>
                <div className={styles.drop_nav_items}>
                  <Text color="orange" size="sm" style={{ padding: "5px" }}>
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
        <Link href={getStartedPath()} passHref>
          <Button
            passHref
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}>
            {isHome && authStatus == "authenticated"
              ? "Get Started"
              : "My Profile"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
