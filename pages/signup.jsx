import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session, loading } = useSession()

  if (loading) {
      return <div>Loading...</div>;
    }
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}