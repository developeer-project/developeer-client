import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getSearchedProject(req, res, next){
      if(req.method === 'GET'){
            const {title, techStack} = req.query;
            if (techStack !== ""){
                  const searchedProject = await prisma.Projects.findMany({
                        where:{
                              title:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                              tech_stack:{
                                    has: techStack,
                              }
                        }
                  });
                  res.send({searchedProject})
            }else  if(techStack === ""){
                  const searchedProject = await prisma.Projects.findMany({
                        where:{
                              title:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                        }
                  });
                  res.send({searchedProject})
            }
      }
}