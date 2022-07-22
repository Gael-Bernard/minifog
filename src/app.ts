import express from 'express'

console.log("Starting server...");

const app = express();

const port = 3000;


/*
app.get('/', (_, res) => {
  //res.status(200).send("src/front/index.html");
});
*/

app.use(express.static("dist/front/public"));
app.use(express.static("src/front/public"));

app.listen(port, () => console.log(`Running on port ${port}`));