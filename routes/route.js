const express = require('express');
const router = express.Router();
const questionService = require('../service/questionService');
router.get('/test', questionService.testFunction);

router.post('/question', questionService.createQuestion);
router.get('/question', questionService.getQuestionDetails);
router.delete('/question', questionService.deleteQuestion); 
router.put('/question/:id', questionService.updateQuestion);

module.exports = router;