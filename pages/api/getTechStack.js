import prisma from '../../lib/prisma';

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function getTechStack(req, res) {
      if(req.method == 'GET'){
            const techStacks = await prisma.TechStack.findMany({
                  select: {
                    tech_stack: true,
                  },
            });
            res.send(techStacks)
      }
}