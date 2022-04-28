// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// // import { PrismaClient } from "@prisma/client";

// import PrismaInstance from "../../../lib/prisma";
// // const prisma = new PrismaClient();

// export default NextAuth({
//   // Configure one or more authentication providers
//   adapter: PrismaAdapter(PrismaInstance),
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//       profile(profile) {
//         return {
//           id: profile.id.toString(),
//           name: profile.name || profile.login,
//           email: profile.email,
//           image: profile.avatar_url,
//         };
//       },
//     }),

//     EmailProvider({
//       server: {
//         host: process.env.SMTP_HOST,
//         port: process.env.SMTP_PORT,
//         auth: {
//           user: process.env.SMTP_USER,
//           pass: process.env.SMTP_PASSWORD,
//         },
//       },
//       from: process.env.EMAIL_FROM,
//     }),
//     // ...add more providers here
//   ],
//   pages: {
//     signIn: "/auth/signin",
//     // signOut: '/auth/signout',
//   },
//   session: {
//     strategy: "jwt",
//   },
//   theme: "dark",
//   callbacks: {
//     async session({ session, token, user }) {
//       console.log("hererer@callback", session, token, user);
//       session.userId = user.id;
//       session.token = user.token;
//       session.extras = user;
//       return session;
//     },
//   },
//   debug: false,
// });
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// import PrismaInstance from "../../../lib/prisma";
const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),

    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
    // signOut: '/auth/signout',
  },
  session: {
    strategy: "jwt",
  },
  theme: "dark",
  debug: true,
});
