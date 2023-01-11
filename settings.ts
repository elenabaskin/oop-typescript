// the settings file using abstraction

/* abstraction is the method of masking lower-level details 
and only showing the relevant information to users.
it hides complexity from inherited classes and
allow them to function on their own. */

abstract class Settings {
  constructor(
    private userName: string,
    private gameFile: number,
    private plantChoice: string,
    private musicStation: string,
    private decorStyle: string,
    private drinkChoice: string
  ) {}

  abstract userCustomizations(): string;
  get userInfo(): string {
    return `loading settings for save file ${this.gameFile} for player ${this.userName}.`;
  }
  loadSettings(): string {
    return `loading the ${this.decorStyle} room, ${this.musicStation} is playing, and
    ${this.drinkChoice} is prepared! enjoy taking care of ${this.plantChoice}!`;
  }
}

// let player = new Settings //Cannot create an instance of an abstract class.

class PlayerSettings extends Settings {
  constructor(
    userName: string,
    gameFile: number,
    plantChoice: string,
    musicStation: string,
    decorStyle: string,
    drinkChoice: string
  ) {
    super(
      userName,
      gameFile,
      plantChoice,
      musicStation,
      decorStyle,
      drinkChoice
    );
  }
  userCustomizations(): string {
    return this.loadSettings();
  }
}

let playerOne = new PlayerSettings(
  'ys',
  1,
  'georgie',
  '88.8fm',
  'cozy minimalist',
  'fresh strawberry juice'
);

let playerTwo = new PlayerSettings(
  'bg',
  2,
  'binnie',
  '99.9fm',
  'danish pastel kidcore',
  'vanilla oat milk'
);

let playerThree = new PlayerSettings(
  'j',
  3,
  'kiki',
  '33.3fm',
  'plant cozycore',
  'iced roobios tea'
);
console.log(playerOne.userInfo); //loading settings for save file 1 for player ys.
console.log(playerOne.userCustomizations());
/* loading the cozy minimalist room, 88.8fm is playing,
and fresh strawberry juice is being prepared! enjoy taking care of georgie! */

export {}; // <- had to be done to get rid of duplicate identifier error
