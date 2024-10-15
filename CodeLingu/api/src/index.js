const express = require("express");
const routes = require("./routes");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const cors = require("cors");
require('dotenv').config()

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.use(routes);


app.listen(3000, () =>
  console.log("Servidor Iniciado em http://localhost:3000")
);



