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
            console.log("Walking the " + this.mammalType + " " + steps + " steps");
        };
        return Mammal;
    })();
    TypeDefinitions.Mammal = Mammal;
})(TypeDefinitions || (TypeDefinitions = {}));
