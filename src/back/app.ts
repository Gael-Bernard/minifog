import express from "express"

let app = express();

app.use( express.static("src/front/dist") );


app.listen(3000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:3000`);
});