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

}