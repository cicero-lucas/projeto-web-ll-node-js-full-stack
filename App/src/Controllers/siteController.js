const { MASTEE_DIR } = require("../Helpers/Constantes");

const Home=(req,res)=>{
    return res.render('home',{layout:MASTEE_DIR, title:"home"}) 
}

const Login=(req,res)=>{
    return res.json({mensagem:"pagina Login"});
}

module.exports={
    Home,
    Login
}