import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 5100;
app.use(express.json());

app.post("/register",async (req,res)=>{
  await prisma.user.create({name:"john",age:"22"})
})

app.listen(port, () => {
  console.log(`Server has started on port ${port}.`);
});
