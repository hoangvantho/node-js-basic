const express = require('express');
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
// const path = require('path');
// const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.get('/about',(req,res)=>{
    res.send('I am Hoang Van THo')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})