import express, { Application, Request, Response } from "express";

var cors = require("cors");

const app: Application = express();
const port: number = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Data Management App is Ready");
});

app.listen(port, () => {
  console.log(`App is listeing on port ${port}`);
});

export default app;
