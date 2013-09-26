/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DevReach;
(function (DevReach) {
    (function (Speakers) {
        Speakers[Speakers["Unknown"] = 0] = "Unknown";
        Speakers[Speakers["Dog"] = 1] = "Dog";
        Speakers[Speakers["Wolf"] = 2] = "Wolf";
        Speakers[Speakers["Dolphin"] = 3] = "Dolphin";
        Speakers[Speakers["Bird"] = 4] = "Bird";
    })(DevReach.Speakers || (DevReach.Speakers = {}));
    var Speakers = DevReach.Speakers;

    var MainViewModel = (function () {
        function MainViewModel() {
            this.SpeakerType = ko.observable(Speakers.Unknown);
        }
        MainViewModel.prototype.createSpeaker = function () {
            switch (this.SpeakerType()) {
                case Speakers.Dog:
                    return new Dog();
                case Speakers.Wolf:
                    return new Wolf();
                case Speakers.Dolphin:
                    return new Dolphin();
                case Speakers.Bird:
                    return new Bird();
            }

            return new Mammal();
        };

        MainViewModel.prototype.run = function () {
            var speaker = this.createSpeaker();

            speaker.speak();
        };
        return MainViewModel;
    })();
    DevReach.MainViewModel = MainViewModel;

    var Mammal = (function () {
        function Mammal() {
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

    var Bird = (function () {
        function Bird() {
        }
        Bird.prototype.speak = function () {
            console.log("Bird says chirp chirp");
        };
        return Bird;
    })();
    DevReach.Bird = Bird;
})(DevReach || (DevReach = {}));
