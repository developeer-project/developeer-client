export default async function test(req, res, next) {
  if (req.method == "POST") {
    console.log("API se bol raha idhar", req.body);
    return res.status(200).json(req.body);
  }
}