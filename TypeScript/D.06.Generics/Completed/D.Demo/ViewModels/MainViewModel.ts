/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module DevReach {


    export class MainViewModel {

        public Animals = new Array();
        public Dogs = new Array<Dog>();
        public Cats = new Array<Cat>();

        public run() {
            this.Animals.push(new Dog());
            this.Animals.push(new Cat());

            this.Animals.push({type: 'Dog' });

            //this.Dogs.push(new Cat());
            this.Dogs.push(new Dog());
        }
    }

    export class Dog{

    }

    export class Cat{
    }
}