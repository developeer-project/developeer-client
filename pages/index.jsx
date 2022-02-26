import styles from "../styles/Homepage.module.scss";
import TestPage from "../components/test";
import { useSession, signIn, signOut } from "next-auth/react";

export default function IndexPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user} <br />
        <TestPage />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
