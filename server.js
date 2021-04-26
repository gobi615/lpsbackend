require('dotenv').config()
const express = require('express') ;
const api = require('./api')
const middleware = require('./middleware');
const app = express();



app.listen(process.env.PORT || 8080, ()=>console.log('server started!!'))
app.use(middleware.cors)
app.get('/all', api.getAll);
console.log('env:'+process.env)