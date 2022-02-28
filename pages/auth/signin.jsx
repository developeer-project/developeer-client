import { getProviders, getSession, signIn, getCsrfToken } from "next-auth/react"
import { useForm} from '@mantine/hooks';
import { TextInput, Button, Input } from '@mantine/core';

import styles from '../../styles/signin.module.scss';
export default function SignIn({ providers, csrfToken }) {

  // const form = useForm({
  //   initialValues: {
  //     email: '',
  //     termsOfService: false,
  //   },

  //   validationRules: {
  //     email: (value) => /^\S+@\S+$/.test(value),
  //   },
  // });
  return (

    <div className={styles.pageBody}>
      <div className={ styles.emptyDiv }>

      </div>
      <div className={ styles.signinWrap  }> 
          {Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            return (
              <div key={provider.name}>
                    {/* <button onClick={() => signIn(provider.id)}>
                          Sign in with {provider.name}
                        </button> */}

                    <Button className={ styles.buttonProvider } onClick={() => signIn(provider.id)}>
                      Sign in with {provider.name}
                    </Button>
                </div>
              );
            })}


          <hr/>
          
          <form method="post" action="/api/auth/signin/email">
            <input className={ styles.input } name="csrfToken" type="hidden" defaultValue={csrfToken} />
              {/* <input className={ styles.input } type="email" id="email" name="email" /> */}
            <Input className={ styles.input } type="email" id="email" name="email"
              // icon = { <MailIcon/> }
              placeholder = "Your email"
              />
            
            {/* <button className={ styles.submitButton } type="submit">Sign in with Email</button> */}
            <Button className={ styles.submitButton } type="submit"> Sign in with Email </Button>       
          </form>      
        </div>
    </div> 
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session){
        return{
              redirect: { destination: "/" }
        }
  }
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: { 
          providers,
          csrfToken,
      },
  }
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