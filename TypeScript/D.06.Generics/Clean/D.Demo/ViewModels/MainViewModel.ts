/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module DevReach {


    export class MainViewModel {
        public Animals = new Array();
        public Dogs :Array<Dog> = new Array<Dog>();
        public Cats: Array<Cat> = new Array<Cat>();

        public run() {
            this.Dogs.push(new Dog());
            this.Dogs.push(new Cat());
            this.Dogs.push({});


        }
    }

    export class Dog { }
    export class Cat { }

}