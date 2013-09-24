/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module TypeDefinitions {
    export class MainViewModel {

        public Items: KnockoutObservableArray<ToDoItem> = ko.observableArray([]);

        constructor() {
            this.Items.push(new ToDoItem("Item 1", "Description 1"));
            this.Items.push(new ToDoItem("Item 2", "Description 2"));
            this.Items.push(new ToDoItem("Item 3", "Description 3"));
            this.Items.push(new ToDoItem("Item 4", "Description 4"));
            this.Items.push(new ToDoItem("Item 5", "Description 5"));
            this.Items.push(new ToDoItem("Item 6", "Description 6"));
        }
    }

    export class ToDoItem{
        public Name: KnockoutObservable<string> = ko.observable("");
        public Description: KnockoutObservable<string> = ko.observable("");

        constructor(name: string, description: string) {
            this.Name(name);
            this.Description(description);
        }
    }
}