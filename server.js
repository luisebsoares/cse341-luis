const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.emilyRoute);
app.get('/hannah', lesson1Controller.hannahRoute);

const port = 5500;
 
app.listen(process.env.PORT || 5500, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 5500));
});