import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routers/user-router';
import { spaceshipRouter } from './routers/spaceship-router';
import { sessionMiddleware } from './middleware/session.middleware';

const app = express();

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

/**
 * Register Routers
 */
app.use('/users', userRouter);
app.use('/spaceships', spaceshipRouter);

// start up the application
app.listen(8080, () => {
  console.log(`application started`);
});