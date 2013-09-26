/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var TypeDefinitions;
(function (TypeDefinitions) {
    var MainViewModel = (function () {
        function MainViewModel() {
        }
        MainViewModel.prototype.createMammal = function () {
            return new Mammal("dog");
        };

        MainViewModel.prototype.handleClick = function () {
            var mammal = new Mammal("Dog");
            mammal.walk(new Steps(23));
        };
        return MainViewModel;
    })();
    TypeDefinitions.MainViewModel = MainViewModel;
    var Mammal = (function () {
        function Mammal(type) {
            this.mammalType = "";
            this.mammalType = type;
        }
        Mammal.prototype.walk = function (steps) {
            console.log("Walking the " + this.mammalType + " " + steps.Steps + " steps");
        };
        return Mammal;
    })();
    TypeDefinitions.Mammal = Mammal;

    var Steps = (function () {
        function Steps(steps) {
            this.Steps = 0;
            this.Steps = steps;
        }
        return Steps;
    })();
    TypeDefinitions.Steps = Steps;
})(TypeDefinitions || (TypeDefinitions = {}));
