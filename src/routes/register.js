const path = require('path');
const express = require('express');
const router = express.Router();



// los get para llamar los archivos y el path y el archivo que esta en la ruta ../public/home.html 
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/register.html'));
});

module.exports = router;