
require("dotenv").config(); // ejecuto la funcion para acceder a las variebles que estan en .env

const express = require("express"); // express para generar el servidor

const app = express(); // inicializar la aplicacion express

// requerimos los enrutadores.
const homeRoutes = require('../src/routes/home'); 
const productRoutes = require('../src/routes/product'); 
const detailRoutes = require('../src/routes/detail'); 
const loginRoutes = require('../src/routes/login'); 
const registerRoutes = require('../src/routes/register'); 
const cartRoutes = require('../src/routes/cart'); 


// para utilizar las rutas o enrutadores debo de llamarla
app.use("/",homeRoutes);
app.use("/products",productRoutes);
app.use("/detail",detailRoutes);
app.use("/login",loginRoutes);
app.use("/register",registerRoutes);
app.use("/cart",cartRoutes);
 





// le debemos de pasar los dos parametros, el puerto con dotenv y segundo parametro el callback
// listen es para escuchar el servidor
app.listen(process.env.PORT, () =>{ 
    console.log("Server listening on port: ", process.env.PORT);
});


module.exports = app;