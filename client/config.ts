// the variable holds the URL to the Express backend service in order to make HTTP requests from Vue through Axios
const development = {
  apiUrl: "http://localhost:8000",
};

const production = {
  apiUrl: "https://thoughts-backend-9t4f.onrender.com",
};

const config = process.env.NODE_ENV === "production" ? production : development;

export default config;
