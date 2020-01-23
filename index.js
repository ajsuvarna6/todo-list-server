const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

require('./src/helpers/dbconnect');

const todos = require('./src/routes/todos');
const accounts = require('./src/routes/accounts');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todos', todos);
app.use('/account', accounts);

app.listen(port, () => console.log('Server started!', port));