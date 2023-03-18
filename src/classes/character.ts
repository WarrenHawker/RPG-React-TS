export default class Character {
  name: string;
  maxHealth: number;
  currentHealth: number;
  attack: number;
  target: string | undefined;
  speed: number;
  isActing: boolean;

  constructor(name: string, health: number, attack: number, speed: number) {
    this.name = name;
    this.maxHealth = health;
    this.currentHealth = health;
    this.attack = attack;
    this.target = undefined;
    this.speed = speed;
    this.isActing = false;
  }
}
