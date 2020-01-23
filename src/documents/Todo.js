const mongoose = require('mongoose');

const todo = new mongoose.Schema({
    title: 'string',
    description: 'string',
    userId: mongoose.mongo.ObjectId
});
module.exports = mongoose.model('Todo', todo, 'Todos');