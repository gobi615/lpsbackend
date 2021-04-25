const db = require('../db')

const Leet = db.model('allprobs',{
    _id : {type : String},
    id : {type : String},
    title : {type : String}, 
    isPremium : {type : Boolean},
    isSolved : {type : Boolean},
    frequency : {type : String}, 
    url : {type : String}, 
    difficulty : {type : String} 
}) ;

async function getAll(){
    const obj = await Leet.find();
    return obj;
}

module.exports = {
    getAll,
    model : Leet
}