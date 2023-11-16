// file that starts the server

import app from "./app";
import { prisma } from "./db";

async function startServer() {
  await prisma.$connect();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Error connecting to database:", error);
});
