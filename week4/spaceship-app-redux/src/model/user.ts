import { Role } from './role';

export class User {
  userId: number;
  username: string;
  password: string;
  name: string;
  role?: Role;

  constructor(userId = 0, username = '', password = '', name = '', role?: Role) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.name = name;
    this.role = role;
  }
}