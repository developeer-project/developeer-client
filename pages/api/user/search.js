import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getSearchedProject(req, res, next){
      if(req.method === 'GET'){
            const {title, skill} = req.query;
            const perPage = Number(req.query.perPage) || 2;
            const currPage = Number(req.query.currPage) || 1;

            if (skill !== ""){
                  const searchedUsers = await prisma.UserProfile.findMany({
                        where:{
                              name:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                              skills:{
                                    has: skill,
                              },
                        },
                        skip: (currPage - 1) * perPage,
                        take:perPage,
                  });
                  const totalCount = await prisma.UserProfile.count({
                        where:{
                              name:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                              skills:{
                                    has: skill,
                              },
                        },
                  });
                  res.send({
                        searchedUsers,
                        totalCount,
                  })
            }else  if(skill === ""){
                  const searchedUsers = await prisma.UserProfile.findMany({
                        where:{
                              name:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                        },
                        skip: (currPage - 1) * perPage,
                        take:perPage,
                  });
                  const totalCount = await prisma.UserProfile.count({
                        where:{
                              name:{
                                    contains: title,
                                    mode: 'insensitive',
                              },
                        },
                  });
                  res.send({
                        searchedUsers,
                        totalCount,
                  })
            }
      }
}