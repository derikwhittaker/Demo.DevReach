/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module TypeDefinitions {
    export class MainViewModel {
        
        constructor() {

        }

        public createMammal() {
            return new Mammal("dog");
        }

        public handleClick() {
            var mammal = new Mammal("Dog");
            mammal.walk(new Steps(22));
        }
    }
    export class Mammal {
        public mammalType: string = "";

        constructor(type) {
            this.mammalType = type;
        }

        public walk(steps: Steps) {
            console.log("Walking the " + this.mammalType + " " + steps.Steps + " steps" );
        }
    }

    export class Steps {
        public Steps: number = 0;
        constructor(steps) {
            this.Steps = steps;
        }
    }

}