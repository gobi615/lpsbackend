require('dotenv').config()
const express = require('express') ;
const api = require('./api')

const app = express();

app.get('/all', api.getAll);

app.listen(process.env.PORT || 8080, ()=>console.log('server started!!'))

console.log('env:'+process.env)