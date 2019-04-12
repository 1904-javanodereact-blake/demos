import { connectionPool } from '.';
import { PoolClient } from 'pg';
import { convertSqlShip } from '../util/sql-spaceship-conveter';

export async function findAllSpaceship() {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const result = await client.query('SELECT * FROM spaceship.spaceship');
    return result.rows.map(convertSqlShip);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findById(id: number) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = 'SELECT * FROM spaceship.spaceship WHERE ship_id = $1';
    const result = await client.query(queryString, [id]);
    console.log(result.rows);
    return result.rows[0] && convertSqlShip(result.rows[0]);
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}

export async function findByOwner(ownerId: number) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = 'SELECT * FROM spaceship.spaceship WHERE ship_owner = $1';
    const result = await client.query(queryString, [ownerId]);

    // convert db results into actual spaceships
    const ships = result.rows.map(convertSqlShip);
    console.log(ships);
    return ships;
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}