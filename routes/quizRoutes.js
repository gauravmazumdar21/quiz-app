const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/', async (req, res) => {
    try {
        const questions = await Question.find();
        res.render('index', { questions });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/submit', async (req, res) => {
    try {
        const userAnswers = Object.keys(req.body).map((key) => parseInt(req.body[key]));
        const questions = await Question.find();
        let score = 0;

        questions.forEach((q, index) => {
            if (userAnswers[index] === q.correctOption) {
                score++;
            }
        });

        res.send(`Your score is: ${score} out of ${questions.length}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
