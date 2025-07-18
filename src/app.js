/*
  Essential module imports:
  - express: web framework
  - cors: handling cross-origin resource sharing (CORS) requests
  - config: configuration file
  - db: database connection
*/

const express = require("express");
const cors = require("cors");
const config = require("./config/env");
const db = require("./config/database");

// Swager imports
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

/*
  Router imports:
  - userRouter: routes for user management
  - authRouter: routes for user authentication
*/
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");
const salesRouter = require("./routes/salesRoutes");
// IMPORTAMOS SWAGGER
const swaggerDocument = YAML.load("./docs/swagger.yaml");

const initModels = require("./models/initModels");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutes
app.get("/", (req, res) => {
  res.status(200).json({message:"Welcome to the E-commerce API"});
});
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use("/sales", salesRouter);
// Swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Connection to the database
const initDatabase = async () => {
  try {
    await db.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
    await db.sync({ alert: true });
    console.log("DB Synced");
    await initModels();
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

initDatabase();

// Start the server and listen on the specified port
app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
