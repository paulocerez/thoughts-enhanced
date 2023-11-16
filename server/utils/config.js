require("dotenv").config();

const PORT = process.env.PORT || 3000;
const POSTGRES_DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;

// Simple validation
if (!POSTGRES_DATABASE_URL) {
  throw new Error("Missing required environment variable: DATABASE_URL");
}
if (!JWT_SECRET) {
  throw new Error("Missing required environment variable: JWT_SECRET");
}

module.exports = {
  POSTGRES_DATABASE_URL,
  PORT,
  JWT_SECRET,
};
