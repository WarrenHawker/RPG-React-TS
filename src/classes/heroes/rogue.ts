import Character from '../character';

export default class Rogue extends Character {
  class = 'Rogue';
  maxHealth = 10;
  currentHealth = 10;
  attack = 10;
  speed = 5;

  backstab() {
    //50% crit rate
    //single target (+5 attack damage)
  }

  smokeBomb() {
    //causes a single foe to miss their next attack
  }
}
