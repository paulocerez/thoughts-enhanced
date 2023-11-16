// the variable holds the URL to the Express backend service in order to make HTTP requests from Vue through Axios

const baseUrl = "http://localhost:8000/api";

const development = {
  apiUrl: "http://localhost:8000/api",
};

const production = {
  apiUrl: "",
};

const config = process.env.NODE_ENV === "production" ? production : development;

export default config;
