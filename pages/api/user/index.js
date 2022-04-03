import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUser(req, res, next){
      if(req.method === 'GET'){
            const perPage = Number(req.query.perPage) || 2;
            const currPage = Number(req.query.currPage) || 1;

            const users = await prisma.UserProfile.findMany({
                  where:{
                        has_registered: true,
                  },
                  skip: (currPage - 1) * perPage,
                  take:perPage,
            });

            const totalCount = users.length;
            res.send({users, totalCount})

      }
}