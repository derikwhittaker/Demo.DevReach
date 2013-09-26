/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module TypeDefinitions {
    export class MainViewModel {
        
        constructor() {

        }

        public createMammal() {
            return new Mammal("dog");
        }

        public handleClick() {

        }
    }
    export class Mammal {
        public mammalType: string = "";

        constructor(type) {
            this.mammalType = type;
        }

        public walk(steps) {
            console.log("Walking the " + this.mammalType + " " + steps + " steps" );
        }
    }

}