const leet = require('./models/LeetOps') ;

async function getAll(req, res, next){
    const prbs = await leet.getAll();
    res.json(prbs) ;
}

module.exports = {
    getAll
}


