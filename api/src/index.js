const express = require('express');
const cors = require('cors');

const { connect } = require('./app/config/db');
const routes = require('./routes');

require('dotenv').config();

connect();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3000, () =>
  console.log('Servidor Iniciado em http://localhost:3000'),
);
