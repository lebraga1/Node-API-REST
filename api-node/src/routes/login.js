module.exports = function(app){
    app.get("/", (req, res) => {
        app.src.controllers.login.index(app, req, res);
    });
}