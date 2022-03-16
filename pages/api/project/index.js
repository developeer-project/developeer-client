import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUser(req, res, next){
      if(req.method === 'GET'){
            const projects = await prisma.Projects.findMany({
                  select:{
                        id: true,
                        title: true,
                        repo_link:true,
                        tech_stack:true,
                        description:true,
                        link:true,
                        user_profile_id:true,
                  },
            });
            res.send({projects})
      }
}