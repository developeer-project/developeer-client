import styles from "../styles/Homepage.module.scss";
import TestPage from "../components/test";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";

export default function IndexPage() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <TestPage/>
        <Button onClick={signOut} > Sign out</Button>
      </>
    );
  }

  return <Button onClick={signIn}>Sign in</Button>;
}
