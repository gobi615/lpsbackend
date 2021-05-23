const db = require('../db')
const cuid = require('cuid');

const Leet = db.model('Model',{
    _id: { type: String, default: cuid },
    id:{type: String },
    title : {type : String}, 
    isPremium : {type : Boolean},
    isSolved : {type : Boolean},
    frequency : {type : String}, 
    url : {type : String}, 
    difficulty : {type : String},
    tag : [String]
}, 'alltaged') ;

async function getAll(){    
    try{
        const obj = await Leet.find();
        // console.log(obj);
        return obj;
    }catch(ex){
        console.log(ex)
    }
}
async function update(_id, change){
    // const leet = await Leet.findOne({_id});
    // console.log(change)
    // console.log(_id)
    
    // Object.keys(change).forEach((key)=>{
    //     leet[key] = change[key];
    // });
    // await leet.save();

    await Leet.updateOne(
        { _id: _id},
           {$set : {
               "isSolved" : change.isSolved
           }}) ;
    return change;
}
module.exports = {
    getAll,
    update,
    model : Leet
}