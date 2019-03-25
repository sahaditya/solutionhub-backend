const manogoose = require('mongoose');
const Scheama = manogoose.Schema; 

let questionDetail = new Scheama({
    question : {type : String},
    context:{type : String},
    urgency :{type : String},
    technology :{type : String},
    description:{type : String},
    comment:{type : String},
    clapsOnQuestion:{type : Number},
    clapsOnAnswer:{type : Number},
    answer:{type : String},

});

module.exports = manogoose.model("questionDetail",questionDetail );