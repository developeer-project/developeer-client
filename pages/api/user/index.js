import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUser(req, res, next){
      if(req.method === 'GET'){
            const users = await prisma.UserProfile.findMany({
                  where:{
                        has_registered: true,
                  },
            });

            const count = users.length;
            res.send({users, count})
      }
}