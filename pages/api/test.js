import { getSession } from "next-auth/react";
<<<<<<< HEAD

export default async function test(req, res, next) {
  const session = await getSession({ req });
  console.log(session);

=======
import prisma from '../../lib/prisma';


export default async function test(req, res, next) {
  const session = await getSession({ req });
  const _user = await prisma.User.findUnique({
    where: {
      email: session.user.email,
    },
  })
  const _userId = _user.id
  console.log("USER::", _userId)
>>>>>>> cf8c2c49f15470dcf24c931ffe8a4a876870c654
  if (req.method == "POST") {
    console.log("API se bol raha idhar", req.body);
    return res.status(200).json(req.body);
  }
}