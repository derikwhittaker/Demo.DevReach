/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module DevReach {

    export enum Speakers{
        Unknown,
        Dog,
        Wolf,
        Dolphin,
        Bird
    }

    export class MainViewModel {

        public SpeakerType: KnockoutObservable<Speakers> = ko.observable(Speakers.Unknown);
        
        public createSpeaker() : ISpeaker {
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
        }

        public run() {
            var speaker: ISpeaker = this.createSpeaker();
            
            speaker.speak();
        }
    }

    export interface ISpeaker{
        speak(): void;
    }

    export class Mammal implements ISpeaker {
        public saysWhat: string = "I'm a mammal";
        
        public speak() {
            console.log("Mammal says " + this.saysWhat );
        }
    }

    export class Dog extends Mammal {

        constructor() {
            super()

            this.saysWhat = "I'm a Dog";
        }
    }

    export class Wolf extends Mammal {

        constructor() {
            super()

            this.saysWhat = "I'm a Wolf";
        }
    }

    export class Dolphin extends Mammal {

        constructor() {
            super()

            this.saysWhat = "I'm a Dolphin";
        }
    }

    export class Bird implements ISpeaker{

        public speak() {
            console.log("Bird says chirp chirp");
        }
    }

}