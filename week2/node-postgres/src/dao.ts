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

export async function findByUsernameAndPassword(username: string, password: string) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    // use parameters to prevent sql injection
    const queryString = `SELECT * FROM spaceship.app_user WHERE
  username = $1 AND user_password = $2 LIMIT 1`;
    const result = await client.query(queryString, [username, password]);


  // this code below allows sql injection
  //   const queryString = `SELECT * FROM spaceship.app_user WHERE
  // username = '${username}' AND user_password = '${password}' LIMIT 1`;
  //   const result = await client.query(queryString);


    console.log(result.rows);
  } catch (err) {
    console.log(err);
  } finally {
    client && client.release();
  }
}