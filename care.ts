// the plant care file using polymorphism
/* polymorphism is the ability of an object
to take on different forms depending on context. */

//initial object
class PlantCare {
  constructor(
    public type: string,
    public time: number,
    public points: number
  ) {}

  selectCareMethod(): string {
    return `${this.type} takes ${this.time} seconds and gives you ${this.points} bonus points!`;
  }
}

//changes as it goes through the different plant care objects
class WateringCan extends PlantCare {
  constructor(
    type: string,
    time: number,
    points: number,
    public allowedSessions: number
  ) {
    super(type, time, points);
  }
}

class PlantFood extends PlantCare {
  constructor(
    type: string,
    time: number,
    points: number,
    public allowedSessions: number
  ) {
    super(type, time, points);
  }
}

class PlantScissors extends PlantCare {
  constructor(
    type: string,
    time: number,
    points: number,
    public allowedSessions: number
  ) {
    super(type, time, points);
  }
}

const confirmCare = (plantCare: PlantCare) => {
  return (
    plantCare.selectCareMethod() +
    `you are allowed ${this.allowedSessions} times to do this action in one session.`
  );
};

let sessionZero = new PlantCare('talking', 0, 0); //talking takes 0 seconds and gives you 0 bonus points! <- just used to show difference
let sessionOne = new PlantFood('fertilizing', 30, 50, 5);
/*fertilizing takes 30 seconds and gives you 50 bonus points! 
you are allowed 5 times to do this action in one session.*/
let sessionTwo = new PlantScissors('pruning', 60, 100, 2);
/*pruning takes 60 seconds and gives you 100 bonus points! 
you are allowed 2 times to do this action in one session.*/
let sessionThree = new WateringCan('watering', 45, 75, 3);
/*watering takes 45 seconds and gives you 75 bonus points! 
you are allowed 3 times to do this action in one session.*/
