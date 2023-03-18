export default abstract class Character {
  name!: string;
  readonly class!: string;
  readonly maxHealth!: number;
  currentHealth!: number;
  attack!: number;
  target: string | undefined;
  readonly speed!: number;
  isActing: boolean = false;

  constructor(name: string) {
    this.name = name;
  }

  takeDamage(damage: number) {
    return this.currentHealth - damage;
  }

  takeHealing(healing: number) {
    return this.currentHealth + healing;
  }
}
