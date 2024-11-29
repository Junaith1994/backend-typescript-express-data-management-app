import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Junaith");
});

app.listen(port, () => {
  console.log(`App is listeing on port ${port}`);
});
