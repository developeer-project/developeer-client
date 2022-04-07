import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getUser(req, res, next){
      const { id }  = req.query;
      if(req.method === 'GET'){
            
            const project = await prisma.Projects.findUnique({
                  where:{
                        id: Number(id),
                  },
            });
            res.send({'message':project})
      }

      if(req.method === 'DELETE'){
            const project = await prisma.Projects.delete({
                  where:{
                        id: Number(id),
                  },
            });
            res.send({'message':"project(s) deleted"})
      }
      if(req.method === 'PUT'){
            const myData = req.body;
            const project = await prisma.Projects.update({
                  where:{
                        id: Number(id),
                  },
                  data:myData,
            });
            res.send({'message':"project(s) updated"})
      }
}