"use strict";
// the save game / load game file will be an example of encapuslation
exports.__esModule = true;
/*encapsulation is the process of ensuring that certain data (properties)
are protected as they're passed around an application. */
var loadGame = /** @class */ (function () {
    function loadGame(saveNumber) {
        this.saveNumber = saveNumber;
    }
    return loadGame;
}());
exports["default"] = loadGame;
