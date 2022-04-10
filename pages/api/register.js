import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function register(req, res, next) {
  if (req.method === "POST") {
    const {
      name,
      college_name,
      bio,
      location,
      interests,
      user_id,
      has_registered,
      skills_id,
      portfolio_link,
      linkedin,
      github,
      other_links,
      user_profile_id,
      projects: _projects,
    } = req.body;

    const userProfile = await prisma.UserProfile.create({
      data: {
        name,
        college_name,
        bio,
        location,
        interests,
        user_id,
        skills_id,
        has_registered,
        links: {
          create: {
            portfolio_link,
            linkedin,
            github,
            other_links,
          },
        },
        projects: {
          create: _projects,
        },
      },
    });
    res.json({ message: "profile saved" });
  }
}
