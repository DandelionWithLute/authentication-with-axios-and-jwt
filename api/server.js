import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();
const port = 5100;
app.use(express.json());
app.use(cors());

app.get("/api/register", async (req, res) => {
  console.log(req.body());
  return res.status(200).send({ message: "How's the day?" });
});

app.post("/api/register", async (req, res) => {
  const { email, password } = await req.body;
  console.log(req.body);
  // await prisma.user.create({name:"john",age:"22"})
  // (await prisma.$connect) && console.log("DB has connected!");
  // prisma.user.create({ data: { email, password } });
});

app.listen(port, () => {
  console.log(`Server has started on port http://localhost:${port}.`);
});
