const mongoose = require('mongoose');
mongoose.connect('mongodb://172.16.0.1:27018/todo_list', {useNewUrlParser: true, useUnifiedTopology: true})
    // .then(console.log)
    .catch(error => console.log(error));
