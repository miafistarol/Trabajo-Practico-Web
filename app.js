const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "TPFinal", "recursos")));

const paginas = require("./TPFinal/recursos/js/paginas.js");

app.use("/", paginas);

app.listen(3000, () => {
    console.log("Servidor funcionando en puerto 3000");
});