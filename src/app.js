require("dotenv").config();
const express = require("express");
const app = express();

const morgan = require("morgan");
const connectDB = require("./utils/connectDb");
const notFound = require("./middlewares/notFound")

app.use(express.json());
app.use(morgan("dev"));

app.use("/Services/v1/api" , require("./routes/service.routes"));
app.use("/Customer/v1/api" , require("./routes/customer.routes"));
app.use("/Request/v1/api" , require("./routes/request.routes"));
app.use("/Reviews/v1/api" , require("./routes/review.routes"));

app.use(notFound);

connectDB(app);