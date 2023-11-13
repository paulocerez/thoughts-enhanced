// importing application from app.js -> starting the app

const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");

// separating web server code from Express app -> allows testing app at the level of HTTP API calls (without calling via HTTP over the network => faster tests)
app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
