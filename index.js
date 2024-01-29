require("dotenv").config();
const logger = require("./src/lib/logging");
const app = require("./src/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
     logger.info(`Server is running on port ${port}`);
});
