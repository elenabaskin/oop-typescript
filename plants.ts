// the plant options file using inheritance
/* inheritance allows one class to derive the properties of another class.
the class that inherits the properties and methods is the child class.
the class whose properties and methods are inherited is the parent class.
inheritance allows a class to reuse the functionality of an exisiting
class without rewriting it.*/

class PlantNursery {
  constructor(
    private name: string,
    private species: string,
    private variation: string
  ) {
    this.name = name;
    this.species = species;
    this.variation = variation;
  }
  displayInfo(): string {
    return `${this.name} is a ${this.variation} ${this.species} :)`;
  }
}

class Plant extends PlantNursery {
  constructor(
    name: string,
    species: string,
    variation: string,
    private plantPot: string
  ) {
    // invokes the constructor of PlantNursery class
    // super allows the child class to call the constructor/properties/methods of parent class
    super(name, species, variation);
  }
  // overriding original method
  displayInfo(): string {
    return (
      super.displayInfo() + `you chose a ${this.plantPot} plant pot for them!`
    );
  }
}

let plantOne = new Plant('georgie', 'pathos', 'neon', 'pastel yellow');
console.log(plantOne.displayInfo());
/* georgie is a neon pathos :) 
you chose a pastel yellow plant pot for them! */

let plantTwo = new Plant('kiki', 'pathos', 'marble queen', 'soft pink');
console.log(plantTwo.displayInfo());
/* kiki is a marble queen pathos :) 
you chose a soft pink plant pot for them! */

let plantThree = new Plant(
  'binnie',
  'philodendron',
  'heart leaf',
  'sage green'
);
console.log(plantThree.displayInfo());
/* binnie is a heart leaf philodendron :) 
you chose a sage green plant pot for them! */
