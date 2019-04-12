import { SqlShip } from '../dto/sql-ship.dto';
import { Spaceship } from '../model/spaceship';


export function convertSqlShip(ship: SqlShip) {
  return new Spaceship(ship.ship_id, ship.ship_owner, 
    ship.ship_name, ship.weight, ship.speed, ship.description);
}