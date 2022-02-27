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
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google";

// import { Mailer } from 'nodemailer-react'
// import prisma from '../../../lib/prisma';

const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    EmailProvider({
                //   server: {
                //     server: process.env.EMAIL_SERVER,
                //     from: process.env.EMAIL_FROM,
                //   },
                // }),
                server: {
                  host: process.env.SMTP_HOST,
                  port: process.env.SMTP_PORT,
                  auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                  }
                },
                from: process.env.EMAIL_FROM
              }),
  ],
  secret: process.env.SECRET,
  // session:{
  //   jwt:true
  // },

  jwt:{

  },

  pages:{

  },

  callbacks:{

  },
  events:{

  },

  theme: 'dark',
  debug:false,
})
