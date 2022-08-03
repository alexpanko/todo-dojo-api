const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
