/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var DevReach;
(function (DevReach) {
    (function (MammalType) {
        MammalType[MammalType["Unknown"] = 0] = "Unknown";
        MammalType[MammalType["Dog"] = 1] = "Dog";
        MammalType[MammalType["Wolf"] = 2] = "Wolf";
        MammalType[MammalType["Dolphin"] = 3] = "Dolphin";
    })(DevReach.MammalType || (DevReach.MammalType = {}));
    var MammalType = DevReach.MammalType;

    var MainViewModel = (function () {
        function MainViewModel() {
            this.MammalType = ko.observable(MammalType.Unknown);
        }
        MainViewModel.prototype.createMammal = function () {
            return new Mammal();
        };

        MainViewModel.prototype.run = function () {
            var mammal = this.createMammal();
            mammal.speak();
        };
        return MainViewModel;
    })();
    DevReach.MainViewModel = MainViewModel;

    var Mammal = (function () {
        function Mammal() {
            this.mammalType = MammalType.Unknown;
            this.saysWhat = "I'm a mammal";
        }
        Mammal.prototype.speak = function () {
            console.log("Mammal says " + this.saysWhat);
        };
        return Mammal;
    })();
    DevReach.Mammal = Mammal;
})(DevReach || (DevReach = {}));
