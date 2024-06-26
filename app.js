const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileupload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('ThabaServicosSession'));
app.use(session({
    secret: 'ThabaServicosSession',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
app.use(fileupload);


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(port, () => console.log(`Server Running`));