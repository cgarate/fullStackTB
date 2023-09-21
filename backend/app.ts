import express, { Request, Response } from 'express';
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3000

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function(req: Request, res: Response) {
  res.send('hello world')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
