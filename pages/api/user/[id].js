import { validate } from '../../../lib/validate';
import { profileSchema } from '../../../schemas/Profile';
import  prisma from "../../../lib/prisma"

export  async function userApi(req, res, next){
      if(req.method === 'GET'){
            const { id }  = req.query;
            console.log(id)
            const user = await prisma.UserProfile.findUnique({
                  where:{
                        id: Number(id),
                  },
            });
            res.send({'message':user})
      }

      if(req.method === 'DELETE'){
            const { id }  = req.query;
            const user = await prisma.UserProfile.delete({
                  where:{
                        id: Number(id),
                  },
            });
            res.send({'message':"user deleted"})
      }

      if(req.method === 'PUT'){
            const myData = req.body;
            const project = await prisma.Projects.update({
                  where:{
                        id: Number(id),
                  },
                  data:myData,
            });
            res.send({'message':"user detail(s) updated"})
      }
}

export default validate(profileSchema, userApi);