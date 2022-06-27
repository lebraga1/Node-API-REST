const express = require("express");
const app = express();
let consign = require("consign");

app.set("view engine", "ejs");
app.set("views", "./src/views");

consign()
    .include("src/routes")
    .then("src/models")
    .then("src/controllers")
    .into(app);

app.get("/user", (req, res) => {
    return res.json({usuario: "Michelle"});
});

const server = app.listen(3000, () => {
    const port = server.address().port;
    console.log(`Servidor ativado - porta: ${port}`);
});