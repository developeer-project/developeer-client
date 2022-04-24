import { getSession } from "next-auth/react";

export default async function test(req, res, next) {
  const session = await getSession({ req });
  console.log(session);

  if (req.method == "POST") {
    console.log("API se bol raha idhar", req.body);
    return res.status(200).json(req.body);
  }
}
