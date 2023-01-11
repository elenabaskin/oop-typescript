// why learn typescript?
/* javascript is a dynamic and weak programming language by nature, 
    so typescript turns it into a strong and static language 
    to catch mistakes or weird logic before the application runs. 
    typescript is a superset of javascript to catch mistakes as they happen. */
// ------------------------------------------------
// for example:
/* 
    const add = (a, b) => a + b;
    console.log(add(4,8)); // 12
    console.log(add(4, "8")) // 48 <- a bug we don't want to happen
    */

// typescript version:
/*
    onst add = (a: number, b: number) => a + b;
    console.log(add(4, '8')); //argument of type "string" is not assignable to parameter of type "number"
    */

// correct typscript version:
/*
    const add = (a: number, b: number) => a + b;
    console.log(add(4, 8));
    */
// ------------------------------------------------

// object oriented programming (oop)
/*
    object oriented programming is a programming model that relies on classes and objects.
    it's used to create simple, reusable classes to create individual objects.

    we're going to cover the (4) pillars of object oriented programming:
    - encapsulation
    - abstraction
    - inheritance
    - polymorphism
*/

/* to create my examples of these (4) types, let's pretend i am creating
a cozy game that allows the user to de-compress by caring for a few of my plants 
without thinking too deeply about all of the extra code 
i would need to make this a real thing.
the 3 plant options:
- georgie: neon pathos
- kiki: marble queen pathos
- binnie: heart leaf philodendron

the user can use these methods to take care of my plants:
- water() - console.log('thank you for the water :)')
- feed() - console.log('thanks for the plant food :)')
- prune() - console.log('thank you for caring for my leaves :D')

and the user has some customization options:
 - music() - they can select 1 out of 3 options: 33.3fm for kpop and city pop 
 (but would probably just loop newjeans and seventeen songs, to be honest), 
 88.8fm for bedroom pop and indie music, or 99.9fm for slowcore and dreampop
 - decor() - 1 out of 3 room aesthetics: plant cozycore, danish pastel kidcore, or cozy minimalist
 - drink() - 1 out of 3 drink choices (purely for decoration): vanilla oat milk, iced roobios tea, fresh strawberry juice
*/

/* 
encapsulation will be demonstrated in the save.ts file -> userName, gameNumber, plantChoice
abstraction will be demonstrated in the settings.ts file -> abstract class SetRoom -> private music, private decor, private drinkChoice
inheritance will be demonstrated in the plants.ts file -> class PlantCare class Water extends PlantCare
polymorphism will be demonstrated in the care.ts file -> Plant class, methods available to all plants
 */
