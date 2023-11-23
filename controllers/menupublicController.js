/*
    defines an object which contains functions executed as callback
    when a client requests for `index` paths in the server
*/
const menupublicController = {
    getMenuPublic: function (req, res) {
        // render `../views/index.hbs`
        res.render('menu-public');
    }
}

/*
    exports the object `controller` (defined above)
    when another script exports from this file
*/
module.exports = menupublicController;