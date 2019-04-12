import express from 'express';
import * as spaceshipDao from '../daos/spaceship.dao';
import { authMiddleware } from '../middleware/auth.middleware';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const spaceshipRouter = express.Router();


/**
 * find all spaceships
 * endpoint: /spaceships
 */
spaceshipRouter.get('', [
  authMiddleware(['admin']),
  async (req, res) => {
  const ships = await spaceshipDao.findAllSpaceship();
  res.json(ships);
}]);

/**
 * find spaceship by id
 * endpoint: /spaceships/:id
 */
spaceshipRouter.get('/:id', async (req, res) => {
  const id = +req.params.id;
  console.log(`retreiving spaceship with id: ${id}`);
  res.json(await spaceshipDao.findById(id));
});

/**
 * find spaceships by owner id
 * endpoint: /spaceships/owner/:id
 */
spaceshipRouter.get('/owner/:ownerId', async (req, res) => {
  res.json(await spaceshipDao.findByOwner(+req.params.ownerId));
});

spaceshipRouter.post('', async (req, res) => {
  console.log(`creating spaceship`, req.body);
  const ship = await spaceshipDao.save(req.body);
  res.status(201);
  res.json(ship);
});

spaceshipRouter.patch('', (req, res) => {
  console.log(`updating spaceship`, req.body);
  res.send('updated spaceship');
});