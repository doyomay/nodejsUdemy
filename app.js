/**
 * Created by doyomay on 5/1/15.
 */
var express = require('express'),
    app = express(),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    config = require('./config/config.js'),
    ConnectMongo = require('connect-mongo')(session);

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

//sesiones y cookies
var env = process.env.NODE_ENV || 'development';

if (env == 'development'){

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true,
            maxAge: new Date(Date.now() + 3600000)
            }
        })
    );
} else {
    app.use(session({
        secret: config.sessionSecret,
        store : new ConnectMongo({
            url:config.dbUrl,
            stringify:true
        })
    }));
}


app.use(cookieParser());


require('./routes/routes.js')(express, app);

app.listen(3000, function () {
    console.log('Aplicacion iniciada en el puerto 3000');
    console.log(env);
});