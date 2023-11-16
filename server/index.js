// importing application from app.js -> starting the app

const app = require("./app");
const config = require("./utils/config");

// separating web server code from Express app -> allows testing app at the level of HTTP API calls (without calling via HTTP over the network => faster tests)
async function main() {
  // Connect to the database
  await prisma.$connect();

  // Start the server
  //   check for PORT env variable -> global object in Node.js providing access to environment varibales (process.env)
  const PORT = config.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main().catch((error) => {
  console.error("Error connecting to database:", error);
});
