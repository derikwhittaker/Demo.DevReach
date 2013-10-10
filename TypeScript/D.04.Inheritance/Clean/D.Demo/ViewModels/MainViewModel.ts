/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module DevReach {

    export enum MammalType{
        Unknown,
        Dog,
        Wolf,
        Dolphin
    }

    export class MainViewModel {

        public MammalType: KnockoutObservable<MammalType> = ko.observable(MammalType.Unknown);

        constructor() {

        }

        public createMammal() {
            switch (this.MammalType()) {
                case MammalType.Dog:
                    return new Dog();
                case MammalType.Wolf:
                    return new Wolf();
                case MammalType.Dolphin:
                    return new Dolphin();
            }

            return new Mammal();
        }

        public run() {
            var mammal = this.createMammal();
            mammal.speak();
        }
    }

    export class Mammal {
        public mammalType: MammalType = MammalType.Unknown;
        public saysWhat: string = "I'm a mammal";
        
        public speak() {
            console.log("Mammal says " + this.saysWhat );
        }
    }

    export class Dog extends Mammal {

        constructor() {
            super();

            this.saysWhat = "I'm a Dog";
        }
    }

    export class Wolf extends Mammal {

        constructor() {
            super();

            this.saysWhat = "I'm a Wolf";
        }
    }

    export class Dolphin extends Mammal {

        constructor() {
            super();

            this.saysWhat = "I'm a Dolphin";
        }
    }

}