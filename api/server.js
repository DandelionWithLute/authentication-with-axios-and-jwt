import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 5100;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server has started on port ${port}.`);
});
