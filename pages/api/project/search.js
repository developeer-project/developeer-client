import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getSearchedProject(req, res, next){
      if(req.method === 'GET'){
            const {title, techStack} = req.query;
            console.log("TECHSTACK in API::",techStack)
            const perPage = Number(req.query.perPage) || 2;
            const currPage = Number(req.query.currPage) || 1;

            if (techStack !== ""){
                  const searchedProject = await prisma.Projects.findMany({
                        where:{
                              title:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                              tech_stack:{
                                    has: techStack,
                              },
                        },
                        skip: (currPage - 1) * perPage,
                        take:perPage,
                  });
                  const totalCount = await prisma.Projects.count({
                        where:{
                              title:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                              tech_stack:{
                                    has: techStack,
                              },
                        },
                  });
                  res.send({
                        searchedProject,
                        totalCount,
                  })
            }else  if(techStack === ""){
                  const searchedProject = await prisma.Projects.findMany({
                        where:{
                              title:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                        },
                        skip: (currPage - 1) * perPage,
                        take:perPage,
                  });
                  const totalCount = await prisma.Projects.count({
                        where:{
                              title:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                        },
                  });
                  res.send({
                        searchedProject,
                        totalCount,
                  })
            }
      }
}