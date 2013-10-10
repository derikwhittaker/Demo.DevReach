/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module KO4Xaml {
    export class MainViewModel {
        public ToDoItems: KnockoutObservableArray<ToDo> = ko.observableArray([]);

        constructor() {

            this.ToDoItems.push(new ToDo("Item 1", "overdue"));
            this.ToDoItems.push(new ToDo("Item 2", "normal"));
            this.ToDoItems.push(new ToDo("Item 3", "early"));

        }
    }

    export class ToDo {
        public Name: KnockoutObservable<string> = ko.observable("");
        public Status: KnockoutObservable<string> = ko.observable("");

        public StatusStyle: KnockoutComputed<string> = ko.computed(() => {
            if (this.Status() == "overdue") {
                return "overdue-status";
            }
            return "normal-status";
        });

        constructor(name: string, status: string) {
            this.Name(name);
            this.Status(status);
        }
    }
    
}