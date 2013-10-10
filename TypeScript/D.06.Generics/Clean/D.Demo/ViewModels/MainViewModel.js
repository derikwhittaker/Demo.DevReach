/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var DevReach;
(function (DevReach) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.Animals = new Array();
            this.Dogs = new Array();
            this.Cats = new Array();
        }
        MainViewModel.prototype.run = function () {
            this.Dogs.push(new Dog());
            this.Dogs.push(new Cat());
            this.Dogs.push({});
        };
        return MainViewModel;
    })();
    DevReach.MainViewModel = MainViewModel;

    var Dog = (function () {
        function Dog() {
        }
        return Dog;
    })();
    DevReach.Dog = Dog;
    var Cat = (function () {
        function Cat() {
        }
        return Cat;
    })();
    DevReach.Cat = Cat;
})(DevReach || (DevReach = {}));
