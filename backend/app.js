const express = require('express');

const app = express();


app.use('/api/v1/courses', (req, res, next) => {
  let courses = [];

  res.status(200).json()
});


module.exports = app;
