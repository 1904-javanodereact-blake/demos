import { connectionPool } from '.';

export function findAllSpaceship() {
  connectionPool.connect().then((client) => {
    client.query('SELECT * FROM spaceship.spaceship')
      .then(res => {
        console.log(res.rows);
      })
      .catch(err => {
        console.log(err);
      });
    client.release();
  })
  .catch(err => {
    console.log(err);
  });
}

findAllSpaceship();