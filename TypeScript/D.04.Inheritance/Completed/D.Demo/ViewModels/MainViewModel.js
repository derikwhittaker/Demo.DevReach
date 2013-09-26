/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
            switch (this.MammalType()) {
                case MammalType.Dog:
                    return new Dog();
                case MammalType.Wolf:
                    return new Wolf();
                case MammalType.Dolphin:
                    return new Dolphin();
            }

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

    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            _super.call(this);

            this.saysWhat = "I'm a Dog";
        }
        return Dog;
    })(Mammal);
    DevReach.Dog = Dog;

    var Wolf = (function (_super) {
        __extends(Wolf, _super);
        function Wolf() {
            _super.call(this);

            this.saysWhat = "I'm a Wolf";
        }
        return Wolf;
    })(Mammal);
    DevReach.Wolf = Wolf;

    var Dolphin = (function (_super) {
        __extends(Dolphin, _super);
        function Dolphin() {
            _super.call(this);

            this.saysWhat = "I'm a Dolphin";
        }
        return Dolphin;
    })(Mammal);
    DevReach.Dolphin = Dolphin;
})(DevReach || (DevReach = {}));
