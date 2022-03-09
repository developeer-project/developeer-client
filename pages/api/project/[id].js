import { validate } from '../../../lib/validate';
import { projectSchema } from "../../../schemas/Project";
import  prisma from "../../../lib/prisma"

export async function projectApi(req, res, next){
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
            const { id }  = req.query;
            try {

                  const project = await prisma.Projects.delete({
                        where:{
                              id: Number(id),
                        },
                  });
            } catch(e) {
                  res.status(500).send({'message':e})
            }
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



export default validate(projectSchema, projectApi);