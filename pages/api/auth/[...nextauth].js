// import { NextApiHandler } from "next";
// import NextAuth from "next-auth";
// // import Providers from "next-auth/providers";
// // import Adapters from "next-auth/adapters";
// import { PrismaAdapter } from "@next-auth/prisma-adapter"

// import { PrismaClient } from "@prisma/client";

// import GithubProvider from "next-auth/providers/github"
// import EmailProvider from "next-auth/providers/email"

// const prisma = new PrismaClient();

// // we will define `options` up next
// const authHandler = (req, res) => NextAuth(req, res, options);

// const options = {
//       providers: [
//       GithubProvider({
//           clientId: process.env.GITHUB_ID,
//           clientSecret: process.env.GITHUB_SECRET,
//         }),

//       EmailProvider({
//             server: {
//               host: process.env.SMTP_HOST,
//               port: Number(process.env.SMTP_PORT),
//               auth: {
//                 user: process.env.SMTP_USER,
//                 pass: process.env.SMTP_PASSWORD,
//               },
//             },
//             from: process.env.SMTP_FROM, // The "from" address that you want to use
//           }),
//       ],
//       adapter: PrismaAdapter(prisma),
//       secret: process.env.SECRET,
//     };
// export default authHandler;


import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";
// import prisma from '../../../lib/prisma';

const prisma = new PrismaClient();

export default NextAuth({

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
//   adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
})


// import NextAuth from 'next-auth';
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import GitHubProvider from 'next-auth/providers/github';
// import prisma from '../../../lib/prisma';

// const authHandler = (req, res) => NextAuth(req, res, options);
// export default authHandler;

// const options = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//   ],
//   session:{
//         strategy:"jwt",
//   },
//   secret: process.env.SECRET,
// };