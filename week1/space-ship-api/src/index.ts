import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use((req, res, next) => {
  console.log(`request made with url: ${req.url} and method: ${req.method}`);
  next();
});

app.use(bodyParser.json());

app.get('/test', (req, res) => {
  console.log('req processed!!!!!!!!');
  res.send('Here is the response data!');
});

app.post('/test', (req, res) => {
  console.log('posted to test');
  let body = req.body;
  console.log(body);
  res.send('saved test call');
})

app.get('/hello', (req, res) => {
  res.send('hello world');
});


app.listen(8080);
console.log('end of index');