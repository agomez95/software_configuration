//MODULES
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

//INITIALIZER
const app = express();
require('./lib');

//SETTINGS
app.set('port', process.env.PORT || 4000);

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use((req,res,next) => {

});

//ROUTES
app.use(require('./routes/principal'));
app.use(require('./routes/auth'));
app.use('/projects', require('./routes/project'));

//SERVER
app.listen(app.get('port', ()=>{
    console.log("Server on port:",app.get('port'));
}));