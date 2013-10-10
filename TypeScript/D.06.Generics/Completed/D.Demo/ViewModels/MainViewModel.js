var DevReach;
(function (DevReach) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.Animals = new Array();
            this.Dogs = new Array();
            this.Cats = new Array();
        }
        MainViewModel.prototype.run = function () {
            this.Animals.push(new Dog());
            this.Animals.push(new Cat());

            this.Animals.push({ type: 'Dog' });

            this.Dogs.push(new Cat());
            this.Dogs.push(new Dog());
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
            this.foo = "";
        }
        return Cat;
    })();
    DevReach.Cat = Cat;
})(DevReach || (DevReach = {}));
