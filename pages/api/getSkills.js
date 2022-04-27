import prisma from '../../lib/prisma';

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function getTechStack(req, res) {
      if(req.method == 'GET'){
            const skill = await prisma.Skills.findMany({
                  select: {
                    skill: true,
                  },
            });
            res.send(skill)
      }
}