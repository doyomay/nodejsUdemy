/**
 * Created by doyomay on 5/1/15.
 */
var express = require('express'),
    app = express(),
    path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

//router de la app

app.route('/').get(function (req, res, next) {
    //res.send('<h1> Hola mundo !</h1>')
    res.render('index', {title: 'Este es el titulo'});
});

app.listen(3000, function () {
    console.log('Aplicacion iniciada en el puerto 3000');
});