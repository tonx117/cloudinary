const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const fileUpload = require("express-fileupload");

dotenv.config({ path: ".env" });

const { sequelize } = require("./db/config");

const app = express();

const port = process.env.PORT || 4660;
//configuración del motor de plantillas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(morgan("dev"));

app.use(fileUpload());

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a base de datos exitosa");
  })
  .catch((error) => console.log("Error al conectar a base de datos", error));

app.use("/", require("./routes/galeria.routes"));

app.listen(process.env.PORT, () => console.log("Server on port: " + port));
