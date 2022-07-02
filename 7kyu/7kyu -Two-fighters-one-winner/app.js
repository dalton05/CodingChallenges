// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:

//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.


// Parameters: (thoughts, edge cases, etc.)
// Examples:
// Pseudo Code:

// GIVEN CODE BY THE PROBLEM:
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

// MY SOLUTION
function declareWinner(fighter1, fighter2, firstAttacker) {
  
    let first = fighter1.name === firstAttacker ? fighter1 : fighter2
    let second = fighter1.name != firstAttacker ? fighter1 : fighter2
    let turn = 0
    
    while (first.health >= 0 && second.health >= 0) {
          
      if (turn % 2 === 0) {
        second.health -= first.damagePerAttack
      } else {
        first.health -= second.damagePerAttack 
      }
      
      if (first.health <= 0) {  
        return second.name
      }
      
      if (second.health <= 0) {
        return first.name
      }
      
      turn++
    }
  }