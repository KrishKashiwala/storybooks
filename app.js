const express = require('express')
const dotenv = require('dotenv');
const morgan  = require('morgan')
const exphbs = require('express-handlebars');
const connectDB = require('./config/db')

dotenv.config({path : './config/config.env'})
connectDB();
const app = express();
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// routes
app.use('/' , require('./routes/index'))
app.engine('.hbs' , exphbs({defaultLayout : 'main' , extname : './hbs'}))
app.set('view engine', '.hbs')
const PORT = process.env.PORT || 5000
app.listen(PORT , () => console.log(` server running in ${process.env.NODE_ENV} mode on port ${PORT}`))