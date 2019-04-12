import { PoolClient } from 'pg';
import { connectionPool } from '.';
import { Spaceship } from '../model/spaceship';
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

export async function save(ship: Spaceship) {
  let client: PoolClient;
  try {
    client = await connectionPool.connect();
    const queryString = `INSERT INTO spaceship.spaceship
    (ship_owner, ship_name, weight, speed, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING ship_id as shipId`;
    const params = [ship.owner, ship.name, ship.weight, ship.speed, ship.description];
    const result = await client.query(queryString, params);

    return result.rows[0];
  } catch (err) {
    console.log(err);
    return undefined;
  } finally {
    client && client.release();
  }
}