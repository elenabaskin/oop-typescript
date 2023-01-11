// the save game / load game file using encapuslation

/*encapsulation is the process of ensuring that certain data (properties) 
are protected as they're passed around an application. the properties can still
be viewed, but they're not able to be accessed from the outside */

class Game {
  constructor(
    private userName: string,
    private gameFile: number,
    private plantChoice: string
  ) {}

  loadScreen(): void {
    console.log(
      `welcome back ${this.userName}! loading game slot ${this.gameFile} with ${this.plantChoice}. take care!`
    );
  }
}

// create gameSession object
const gameSession = new Game('elena', 1, 'georgie');

// attempt to access properties of the object
// console.log(gameSession.userName); //Property 'userName' is private and only accessible within class 'Game'.

// use loadScreen method for the gameSession object
gameSession.loadScreen(); //"welcome back elena! loading game slot 1 with georgie. take care!"
