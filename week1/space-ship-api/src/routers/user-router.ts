import express from 'express';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const userRouter = express.Router();


/**
 * find all users
 * endpoint: /users
 */
userRouter.get('', (req, res) => {
  console.log('retreiving all users')
  res.send('all users')
})

/**
 * find user by id
 * endpoint: /users/:id
 */
userRouter.get('/:id', (req, res) => {
  console.log(`retreiving user with id: ${req.params.id}`);
  res.send(`here is the user with id: ${req.params.id}`);
})