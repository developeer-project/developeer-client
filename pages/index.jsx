// import styles from "../styles/Homepage.module.scss";
import TestPage from "../components/test";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";
import HomePage from "./home";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();
  // redirect to app page if user is logged in
  const { data: session, status: authStatus } = useSession();
  if (authStatus === "authenticated") {
    return <HomePage />;
  } else {
    router.push("/auth/signin");
  }
  return null;
}
