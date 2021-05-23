const db = require('../db')
const cuid = require('cuid');

const schema = new db.Schema({
    _id: { type: String, default: cuid },
    id:{type: String },
    title : {type : String}, 
    isPremium : {type : Boolean},
    isSolved : {type : Boolean},
    frequency : {type : String}, 
    url : {type : String}, 
    difficulty : {type : String},
    tag : [String],
}, { versionKey: false });

const Leet = db.model('Model',schema, 'alltaged') ;

async function getAll(){    
    try{
        const obj = await Leet.find();
        // console.log(obj);
        return obj;
    }catch(ex){
        console.log(ex)
    }
}
async function update(id, change){
    // const leet = await Leet.findById(_id);
    // if(!leet) throw new Error('Record not found');
    // console.log(leet);
    // Object.keys(change).forEach((key)=>{
    //     leet.isSolved = change.isSolved;
    // });
    // await leet.save();

    await Leet.updateOne(
        { id: id},
           {$set : {
               "isSolved" : change.isSolved
           }}) ;
    // return leet;
}
module.exports = {
    getAll,
    update,
    model : Leet
}