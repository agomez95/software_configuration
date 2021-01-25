//MODULES
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//INITIALIZER
const app = express();
//require('./lib');

//SETTINGS
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs-engine', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', 'hbs-engine');

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use((req,res,next) => {
    next();
});

//ROUTES
app.use(require('./routes/principal'));
app.use(require('./routes/auth'));
app.use('/projects', require('./routes/project'));

//SERVER
app.listen(app.get('port'), ()=>{
    console.log("Server on port:",app.get('port'));
});