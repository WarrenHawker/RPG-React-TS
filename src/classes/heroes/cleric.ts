import Character from '../character';

export default class Cleric extends Character {
  class = 'Cleric';
  maxHealth = 10;
  currentHealth = 10;
  attack = 5;
  speed = 3;

  heal() {
    //heals single target
  }

  cure() {
    //cures debuffs
  }
}
