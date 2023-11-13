require("dotenv").config();

const PORT = process.env.PORT;
const POSTGRES_DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  POSTGRES_DATABASE_URL,
  PORT,
};
