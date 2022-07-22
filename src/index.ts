import express from 'express'

console.log("Starting server...");

const app = express();

const port = 3000;

app.get('/', (_, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => console.log(`Running on port ${port}`));