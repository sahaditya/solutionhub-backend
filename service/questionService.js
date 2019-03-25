const QuestionDetail = require('../models/question')


//General call to check service working fine
exports.testFunction = (req, res) =>{
    res.json("Yes! Service :) is working...");
}

//Create a question entry
exports.createQuestion = (req, res)=>{
    const questionDetail = new QuestionDetail({
        question : req.body.question,
        context:req.body.context,
        urgency :req.body.urgency,
        technology :req.body.technology,
        description:req.body.description,
        comment:req.body.comment,
        clapsOnQuestion:req.body.clapsToQuestion,
        clapsOnAnswer:req.body.clapsToAnswer,
        answer:req.body.answer
    });
    questionDetail.save( (error)=>{
        if(error){
            return console.log("Error occured",error);
        }
        res.json("Data saved successfully");
    });
}

//Get all question details
exports.getQuestionDetails =(req, res)=>{
    QuestionDetail.find(function(err, questionDetail){
        if(err) console.log(err);
        res.json(questionDetail)
    })
}

//Update a question
exports.updateQuestion = (req, res) =>{
    const id = req.params.id;
    QuestionDetail.findById(id,(err, question)=>{
        question.comment = req.body.comment?req.body.comment :  question.comment;
        question.clapsOnQuestion = req.body.clapsOnQuestion ?req.body.clapsOnQuestion:question.clapsOnQuestion;
        question.clapsOnAnswer = req.body.clapsOnAnswer ? req.body.clapsOnAnswer : question.clapsOnAnswer;
        question.answer = req.body.answer?req.body.answer: question.answer;
        question.save((err, savedData)=>{
            if(err) console.log(err);
            res.json(savedData);
        })
    });
}

//Delete a/all question 
exports.deleteQuestion = (req, res) =>{
    if(req.query.id){
        QuestionDetail.deleteOne({_id: req.query.id},function(err, question){
            if(err) console.log("Erro occured",err);
            if(question.deletedCount===0){
                res.json(req.query.id+" this id does not exist ");
            }else{
                res.json(req.query.id+" entry deleted successfully");
            }
        })
    }else{
        QuestionDetail.deleteMany(function(err,question){
            if(err) console.log("Erro occured",err);
            res.json("All entry deleted successfully");
        })  
    }
}
