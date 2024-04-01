const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoute = require("./route/blog");

const app = express();

//*connect cloud database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Error: ", err));

//*middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//*router
app.use('/api', blogRoute)

//*port runner
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Start server in port ${port}`);
});
