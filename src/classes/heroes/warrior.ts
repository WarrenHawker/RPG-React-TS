import Character from '../character';

export default class Warrior extends Character {
  class = 'Warrior';
  maxHealth = 20;
  currentHealth = 20;
  attack = 5;
  speed = 2;

  singleTaunt() {
    //taunts a single foe for 3 turns
  }

  aoeTaunt() {
    //taunts all foes for 2 turns
  }
}
