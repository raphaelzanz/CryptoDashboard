const express = require('express');

const guestsRouter = require('./routes/guests')
const usersRouter = require('./routes/users');
const githubRouter = require('./routes/github');


const pageNotFound = require('./middlewares/404')
const error = require('./middlewares/error');

const app = express();

const port = 3000;
const host = 'localhost';


app.use('/', guestsRouter);
app.use('/', usersRouter);
app.use('/github', githubRouter);
//app.use('/github', githubRouter);



app.use(pageNotFound);

app.listen(port,host, () => {
    console.log(`CryptoDashboard - listening on port ${port}`)
})