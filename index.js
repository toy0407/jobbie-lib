const prisma = require("./dist/db/client");
const dotenv = require("dotenv");
async function main() {
  dotenv.config();
  console.log(prisma);
}

main();
