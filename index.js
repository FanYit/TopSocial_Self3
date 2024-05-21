const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const routerIndex = require("./routes/routerIndex");
app.use("/api", routerIndex);

const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);

const PORT = 80;
app.listen(PORT, () => {
  console.log("TopSocial_Self3 is running on http://localhost:80");
});

module.exports = app;
