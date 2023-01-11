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
    object oriented programming is...
*/
/* to create my examples of these (4) types, let's pretend i am creating
a cozy game that allows the user to de-compress by caring for a few of my plants:
- georgie: neon pathos
- arlo / kiki (their name changes weekly,
    but i'll go with arlo): marble queen pathos
- binnie: heart leaf philodendron
the user can use these methods to take care of my plants:
- water() - console.log('thank you for the water :)')
- feed() - console.log('thanks for the plant food :)')
- prune() - console.log('thank you for caring for my leaves :D')
*/
