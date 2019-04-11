import { connectionPool } from './connection';
import { PoolClient } from 'pg';

export function findAllSpaceship() {
  connectionPool.connect().then((client) => {
    client.query('SELECT * FROM spaceship.spaceship LIMIT 1')
      .then(res => {
        console.log(res.rows);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        client.release();
      });
    console.log('hello');
  })
    .catch(err => {
      console.log(err);
    });
  console.log('world');
}

export async function findAllSpaceshipBetter() {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const result = await client.query('SELECT * FROM spaceship.spaceship LIMIT 1')
    console.log(result.rows);
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
}