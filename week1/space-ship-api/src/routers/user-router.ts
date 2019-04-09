import express from 'express';
import { users } from '../state';
import { User } from '../model/user';
import { authMiddleware } from '../middleware/auth.middleware';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const userRouter = express.Router();


/**
 * find all users
 * endpoint: /users
 */
userRouter.get('', [
  authMiddleware(['admin']),
  (req, res) => {
    console.log('retreiving all users');
    res.json(users);
  }]);

/**
 * find user by id
 * endpoint: /users/:id
 */
userRouter.get('/:id', (req, res) => {
  const id: number = +req.params.id;
  console.log(`retreiving user with id: ${id}`);
  const user = users.find(u => u.userId === id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});


userRouter.post('', (req, res) => {
  console.log(`creating user`, req.body);
  const user: User = req.body;
  user.userId = Math.floor(Math.random() * 10000000);
  users.push(user);
  res.status(201);
  res.send(user);
});

userRouter.patch('', (req, res) => {
  const { body } = req; // destructuring
  console.log(`updating user`, body);
  const user = users.find((u) => {
    // console.log(`u = `, u);
    return u.userId === body.userId;
  });
  if (!user) {
    res.sendStatus(404);
  } else {
    for (const field in user) {
      if (body[field] !== undefined) {
        user[field] = body[field];
      }
    }
    res.json(user);
  }

});


userRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // attach the user data to the session object
    req.session.user = user;
    res.end();
  } else {
    res.sendStatus(401);
  }
});