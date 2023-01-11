// the settings file using abstraction
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* abstraction is the method of masking lower-level details
and only showing the relevant information to users.
it hides complexity from inherited classes and
allow them to function on their own. */
var Settings = /** @class */ (function () {
    function Settings(userName, gameFile, plantChoice, musicStation, decorStyle, drinkChoice) {
        this.userName = userName;
        this.gameFile = gameFile;
        this.plantChoice = plantChoice;
        this.musicStation = musicStation;
        this.decorStyle = decorStyle;
        this.drinkChoice = drinkChoice;
    }
    Object.defineProperty(Settings.prototype, "userInfo", {
        get: function () {
            return "loading settings for save file ".concat(this.gameFile, " for player ").concat(this.userName, ".");
        },
        enumerable: false,
        configurable: true
    });
    Settings.prototype.loadSettings = function () {
        return "loading the ".concat(this.decorStyle, " room, ").concat(this.musicStation, " is playing, \n    ").concat(this.drinkChoice, " is prepared! enjoy taking care of ").concat(this.plantChoice, "!");
    };
    return Settings;
}());
// let player = new Settings //Cannot create an instance of an abstract class.
var PlayerSettings = /** @class */ (function (_super) {
    __extends(PlayerSettings, _super);
    function PlayerSettings(userName, gameFile, plantChoice, musicStation, decorStyle, drinkChoice) {
        return _super.call(this, userName, gameFile, plantChoice, musicStation, decorStyle, drinkChoice) || this;
    }
    PlayerSettings.prototype.userCustomizations = function () {
        return this.loadSettings();
    };
    return PlayerSettings;
}(Settings));
