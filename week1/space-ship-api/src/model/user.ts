export class User {
  userId: number;
  username: string;
  password: string;
  name: string;

  constructor(userId = 0, username = '', password = '', name = '') {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.name = name;
  }
}