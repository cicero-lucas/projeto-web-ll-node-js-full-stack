const express= require('express');
const siteController=require('../Controllers/siteController');

const Router = express.Router();

Router.get('/',siteController.Home)
Router.get('/login',siteController.Login)


module.exports=Router;