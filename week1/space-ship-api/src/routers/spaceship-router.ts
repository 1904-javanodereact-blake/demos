import express from 'express';
import { spaceships } from '../state';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const spaceshipRouter = express.Router();


/**
 * find all spaceships
 * endpoint: /spaceships
 */
spaceshipRouter.get('', (req, res) => {
  res.json(spaceships);
})

/**
 * find spaceship by id
 * endpoint: /spaceships/:id
 */
spaceshipRouter.get('/:id', (req, res) => {
  console.log(`retreiving spaceship with id: ${req.params.id}`);
  res.send(`here is the spaceship with id: ${req.params.id}`);
})

/**
 * find spaceships by owner id
 * endpoint: /spaceships/owner/:id
 */
spaceshipRouter.get('/owner/:ownerId', (req, res) => {
  const ships = spaceships.filter(ship => ship.owner === +req.params.ownerId);
  res.json(ships);
})

spaceshipRouter.post('', (req, res) => {
  console.log(`creating spaceship`, req.body);
  res.status(201);
  res.send('created spaceship');
})

spaceshipRouter.patch('', (req, res) => {
  console.log(`updating spaceship`, req.body);
  res.send('updated spaceship');
})