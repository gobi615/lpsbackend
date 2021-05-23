require('dotenv').config()
const express = require('express') ;
const api = require('./api')
const middleware = require('./middleware');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.listen(process.env.PORT || 8080, ()=>console.log('server started!!'))
app.use(middleware.cors)
app.get('/all', api.getAll);
app.put('/leet/:id',api.updateProblem);
console.log('env:'+process.env)