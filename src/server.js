const express = require('express');
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
// const path = require('path');
// const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})