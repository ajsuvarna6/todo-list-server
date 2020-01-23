const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = require('../documents/Todo');

router.get('/list', (req, res) => {
    new Todo({ title: 'sdfsdf', 'description': 'dsfsdfsd', userId: mongoose.mongo.ObjectId() })
        .save((err) => console.log(err));
    Todo.find({}, (err, todos) => {
        console.log(todos);
        res.send({ 'data': todos });
    })
});

module.exports = router;