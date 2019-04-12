import { SqlRole } from '../dto/sql-role.dto';
import { Role } from '../model/role';


export function convertSqlRole(role: SqlRole) {
  return new Role(role.id, role.role);
}