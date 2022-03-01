// const express = require("express");
// const app = express();


// app.listen(3000, () =>{
//       console.log("Listening to 3000.....")
// })

export default function handler(req, res, next){
      if (req.method === 'GET'){
            res.status(200).json({'message':'GET request'})
      }
}