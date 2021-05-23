const leet = require('./models/LeetOps') ;

async function getAll(req, res, next){
    const prbs = await leet.getAll();
    res.json(prbs) ;
}
async function updateProblem(req,res,next){
    const leetprobs = await leet.update(req.params.id, req.body);
    res.json(leetprobs);
}

module.exports = {
    getAll,
    updateProblem
}


