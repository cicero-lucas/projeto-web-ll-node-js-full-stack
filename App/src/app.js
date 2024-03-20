require('dotenv').config();
const express = require('express');
const path= require("path");
const Router = require('./Route/Rotas')
const {init: template} = require('./Helpers/Templete');

const app=express()

app.use(express.static(path.join(__dirname,"assets/css")))


app.use(Router);

template(app);

app.listen(process.env.PORT || 3000 );