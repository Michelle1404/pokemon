# Pokémon-Kampfsimulator

Ein einfacher Pokémon-Kampfsimulator, der in JavaScript geschrieben ist.

## Installation

Es ist keine Installation erforderlich, da es sich um einfache JavaScript-Klassen handelt. Kopieren Sie den Code einfach in Ihr Projekt.

## Verwendung

Erstellen Sie Instanzen der Pokemon- und AttackSkill-Klassen und führen Sie Angriffe zwischen Pokémon aus:

```javascript
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
```
