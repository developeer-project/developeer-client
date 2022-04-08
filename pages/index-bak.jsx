// import styles from "../styles/Homepage.module.scss";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";

import TestPage from "../components/test";
import HomePage from ".";

export default function IndexPage() {
  const router = useRouter();
  // redirect to app page if user is logged in
  // const { data: session, status: authStatus } = useSession();
  // if (authStatus === "authenticated") {
  return <HomePage />;
  // } else {
  // return <SignIn />;
  // }
  // return null;
}
