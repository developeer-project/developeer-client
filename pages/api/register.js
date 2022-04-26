import { getSession } from "next-auth/react";
// import { PrismaClient } from "@prisma/client";
import prisma from '../../lib/prisma';


// const prisma = new PrismaClient();


export default async function register(req, res, next) {
  console.log("API REGISTER se bol raha idhar", req.body);
  const session = await getSession({ req });
  console.log("SESSION:::", session.user.email)
  const _user = await prisma.User.findUnique({
    where: {
      email: session.user.email,
    },
  })
  
  const _userId = _user.id
  console.log("USER::", _userId)
  if (req.method === "POST") {
    const {
      name,
      college_name,
      bio,
      location,
      interests,
      has_registered,
      skills,
      portfolio_link,
      linkedInProfile: linkedin,
      githubProfile: github,
      twitterProfile: twitter,
      other_links,
      user_profile_id,
      projects,
    } = req.body;
    
    const userProfile = await prisma.UserProfile.create({
      data: {
        name,
        college_name,
        bio,
        location,
        interests,
        user_id: _userId,
        skills,
        has_registered,
        links: {
          create: {
            portfolio_link,
            linkedin,
            github,
            twitter,
            other_links,
          },
        },
        projects: {
          create: projects,
        },
      },
    });

    // const updateUser = await prisma.User.update({

    // })
    res.json({ message: "profile saved" });
  }
}