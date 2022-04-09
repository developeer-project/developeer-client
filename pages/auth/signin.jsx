import {
  getProviders,
  getSession,
  signIn,
  getCsrfToken,
} from "next-auth/react";
import { Button, Center, Input } from "@mantine/core";
import Image from "next/image";
import { useForm } from "@mantine/hooks";

import styles from "../../styles/signin.module.scss";
import { useState } from "react";

export default function SignIn({ providers, csrfToken }) {
  return (
    <div className={styles.page_body}>
      <div className={styles.hero_box}>
        <Image
          layout="fill"
          objectFit="cover"
          src="https://cdn.discordapp.com/attachments/792301782507585539/948520311140253716/pexels-rodolfo-clix-1036936.jpg"
        />
      </div>
      {/* map all selected providers */}
      <div className={styles.form_wrap}>
        <div className={styles.input_wrap}>
          <ProviderOpts providers={providers} />
          <EmailForm csrfToken={csrfToken} />
        </div>
      </div>
    </div>
  );
}

const ProviderOpts = ({ providers }) => {
  return Object.values(providers).map((provider) => {
    if (provider.name === "Email") return;
    return (
      <Button
        className={styles.buttonProvider}
        onClick={() => signIn(provider.id)}
        key={provider.id}
        size="lg"
        fullWidth>
        Sign in with {provider.name}
      </Button>
    );
  });
};

const EmailForm = ({ csrfToken }) => {
  const [valid, setvalid] = useState(null);

  const validateEmail = (e) => {
    let isVal = String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    return setvalid(isVal);
  };

  return (
    <>
      <form
        method="post"
        action="/api/auth/signin/email"
        className={styles.email_form_wrap}>
        <input
          className={styles.input}
          name="csrfToken"
          type="hidden"
          defaultValue={csrfToken}
        />
        <Input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          // icon = { <MailIcon/> }
          placeholder="Enter your email"
          size="md"
          onChange={validateEmail}
        />

        <Button
          size="lg"
          disabled={!valid}
          fullWidth
          type="submit"
          variant="light">
          Sign in with Email
        </Button>
      </form>
    </>
  );
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/

// import { providers, signIn, getSession, csrfToken } from "next-auth/react";

// function signin({ providers }) {
//   return (
//     <div>
//       {Object.values(providers).map((provider) => {
//         return (
//           <div key={provider.name}>
//             <button onClick={() => signIn(provider.id)}>
//               Sign in with {provider.name}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default signin;

// export async function getServerSideProps(context) {
//       const { req } = context;
//       const session = await getSession({ req });

//       if (session) {
//         return {
//           redirect: { destination: "/" },
//         };
//       }

//       return {
//         props: {
//           providers: await providers(context),
//           csrfToken: await csrfToken(context),
//         },
//       };
// }
