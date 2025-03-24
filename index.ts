import dotenv from "dotenv";
import { getPrismaClient } from "./src/db/client";

async function main() {
  console.log("Starting...");
  dotenv.config();
  const user = await getPrismaClient().user.findMany();
  console.log("User: " + user);
  console.log("Done!");
}

main();
