const express = require('express') ;
const api = require('./api')
require('dotenv').config()

const app = express();

app.get('/all', api.getAll);

app.listen(80, ()=>console.log('server started!!'))

console.log(process.env)