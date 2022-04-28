import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  const router = useRouter();
  const { chat_with } = router.query;
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Message {chat_with}</h1>
        <AblyChatComponent />
      </main>

      {/* <style jsx>{`
        ...       
      `}</style>

      <style jsx global>{`
        ...        
      `}</style> */}
    </div>
  )
}