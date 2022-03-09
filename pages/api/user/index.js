import prisma from "../../../lib/prisma";

export default async function getUser(req, res, next){
      if(req.method === 'GET'){
            const user = await prisma.UserProfile.findMany({
                  where:{
                        has_registered: true,
                  },
            });
            res.send({user})
      }
}