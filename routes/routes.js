/**
 * Created by doyomay on 5/1/15.
 */

//router de la app
module.exports = function (express, app) {
    var router = express.Router();
    router.get('/', function (req, res, next) {
        res.render('index', {title: 'Chatcat'});
    });


    router.get('/chatrooms', function (req, res, next) {
        res.render('chatrooms', {title: 'Chatrooms'});
    });

    router.get('/setColor', function (req, res, next) {
        req.session.favColor = 'Red';
        res.send('Agregado color favorito');
    });

    router.get('/getColor', function (req, res, next) {
        var colorFavorido = req.session.favColor || 'No haz definido tu coloro favorito';
        res.send('tu color favorito es ->' + colorFavorido);
    });

    app.use('/', router);
};
