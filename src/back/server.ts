import express from "express"
import http from "http"



export default function(__dirname:string) {

  let app = express();
  let server = http.createServer(app);
  server;

  app.get("/", (req, res) => {
    res.sendFile(__dirname+"/dist/front/index.html");
  });

  app.use( express.static("dist/front") );


  app.listen(3000, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:3000`);
  });


}

