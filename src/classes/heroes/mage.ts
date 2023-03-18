import Character from '../character';

export default class Mage extends Character {
  class = 'Mage';
  maxHealth = 10;
  currentHealth = 10;
  attack = 10;
  speed = 5;

  firestorm() {
    //deals damage to all foes
  }

  buffAttack() {
    //buffs the attack of an ally on their next turn
  }
}
