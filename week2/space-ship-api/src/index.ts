import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routers/user-router';
import { spaceshipRouter } from './routers/spaceship-router';
import { sessionMiddleware } from './middleware/session.middleware';

const app = express();
const port = process.env.SHIP_PORT || 8080;


app.get('/dummy', (req, res) => {
   res.send('duummy data');
})

app.use((req, res, next) => {
  console.log(`request made with url: ${req.url} and method: ${req.method}`);
  // const headers = req.rawHeaders;
  // console.log(headers);
  next();
});

// attach an actual object to req.body
app.use(bodyParser.json());

// attach the specific users session data to req.session
app.use(sessionMiddleware);

// allow cross origins
app.use((req, resp, next) => {
  console.log(req.get('host'));
  (process.env.SHIP_API_STAGE === 'prod')
    ? resp.header('Access-Control-Allow-Origin', process.env.SHIP_APP_URL)
    : resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  resp.header('Access-Control-Allow-Credentials', 'true');
  resp.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, PATCH');
  next();
});

/**
 * Register Routers
 */
app.use('/users', userRouter);
app.use('/spaceships', spaceshipRouter);

// start up the application
app.listen(port, () => {
  console.log(`application started on port:` + port);
});
