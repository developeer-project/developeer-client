import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUser(req, res, next){
      if(req.method === 'GET'){
            const user = await prisma.UserProfile.findMany({
                  where:{
                        has_registered: true,
                  },
            });
            res.send({'message':user})
      }
}