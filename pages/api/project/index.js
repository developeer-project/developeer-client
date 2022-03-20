import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getProject(req, res, next){
      if(req.method === 'GET'){
            const perPage = 1;
            const currPage = req.query.currPage || 1;
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
                  skip: (currPage - 1) * perPage,
                  take:perPage,
            });
            const totalCount = await prisma.Projects.count();
            res.send({
                  projects,
                  totalCount,
            })
      }
}