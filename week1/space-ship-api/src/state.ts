import { User } from './model/user';
import { Spaceship } from './model/spaceship';

export let users: User[] = [
  new User(1, 'blake', 'pass', 'blake', 'admin'),
  new User(2, 'Bradley', 'pass', 'Bradley'),
  new User(3, 'Shahram', 'pass', 'Shahram'),
  new User(4, 'Pj', 'pass', 'Pj'),
  new User(5, 'Danae', 'pass', 'Danae'),
  new User(6, 'Fred', 'pass', 'Fred'),
];

export let spaceships: Spaceship[] = [
  new Spaceship(1, 2, 'Enterprise', 5000, 5000, 'its a ship'),
  new Spaceship(2, 2, 'Tesla', 5000, 5000, 'its a ship'),
  new Spaceship(3, 2, 'SS Minow', 5000, 5000, 'its a ship'),
  new Spaceship(4, 2, 'X-Wing', 5000, 5000, 'its a ship'),
  new Spaceship(5, 4, 'Salmon Catcher', 5000, 5000, 'its a ship'),
  new Spaceship(6, 6, 'Serrenity', 5000, 5000, 'its a ship'),
  new Spaceship(7, 3, 'Yes', 5000, 5000, 'its a ship'),
];
