const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: true }));

console.log(process.env.DB);
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(PORT, () => {
      console.log('We are live on ' + PORT);
    });
  })