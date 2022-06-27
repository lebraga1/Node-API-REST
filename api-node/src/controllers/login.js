module.exports.index = function(app, req, res){
    let loginModel = new app.src.models.login();

    loginModel.getLogin((err, result) => {
        res.render("login/index", {login : result});
    });
}