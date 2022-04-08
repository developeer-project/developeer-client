export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
  } else if (req.method === "GET") {
    // get URL params
    const { query, queryFor } = req.query;
    console.log(query, queryFor);
  }
}
