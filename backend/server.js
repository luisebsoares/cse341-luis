const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Luis Brasil Soares - CSE 341 - Web Development II');
});

const port = 5500;
 
app.listen(process.env.PORT || 5500, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 5500));
});