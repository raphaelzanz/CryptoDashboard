const express = require('express');
const config = require('config');

console.log(config.get('app.host'));
console.log(config.get('app.port'));

const guestsRouter = require('./routes/guests')
const usersRouter = require('./routes/users');
const githubRouter = require('./routes/github');


const pageNotFound = require('./middlewares/404')
const error = require('./middlewares/error');


const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 3000;
const host = 'localhost';


app.use('/', guestsRouter);
app.use('/', usersRouter);
app.use('/github', githubRouter);
//app.use('/github', githubRouter);

app.use(error)
app.use(pageNotFound);


app.listen(port,host, () => {
    console.log(`CryptoDashboard - listening on port ${port}`)
})