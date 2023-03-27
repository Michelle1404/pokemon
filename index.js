class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }
  learnAttackSkill(attack) {
    this.skills.push(attack);
  }
  showStatus() {
    console.log(
      `${this.name} status:\nmagic: ${this.magic}\nhealth: ${this.health}`
    );
  }
  attack(index, attacked) {
    let attack = this.skills[index];
    if (this.magic >= attack.magic && attacked.health > 0 && this.health > 0) {
      attacked.health -= attack.damage;
      this.magic -= attack.magic;
      console.log(
        `${this.name} launched skill ${attack.name} successfully!\n${attacked.name} got ${attack.damage} damage`
      );
      if (attacked.health <= 0) {
        console.log(`${attacked.name} is killed`);
      }
    } else if (attacked.health <= 0) {
      console.log(`${attacked.name} is already dead`);
    } else if (this.magic < attack.magic) {
      console.log("Not enough magic, cannot launch attack!");
    } else if (this.health < 0) {
      console.log(`${this.name} is already dead`);
    }
  }
  getMagic() {
    this.magic += 20;
    console.log(`${this.name} got 20 magic back`);
  }
}

class AttackSkill {
  constructor(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
}

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

pikachu.attack(0, bulbasaur);
console.log("--------");
bulbasaur.attack(0, pikachu);
console.log("--------");
pikachu.showStatus();
console.log("--------");
bulbasaur.showStatus();
console.log("--------");
pikachu.attack(0, bulbasaur);
console.log("--------");
pikachu.attack(0, bulbasaur);
console.log("--------");
pikachu.getMagic();
console.log("--------");
pikachu.attack(0, bulbasaur);
console.log("--------");
bulbasaur.attack(0, pikachu);
