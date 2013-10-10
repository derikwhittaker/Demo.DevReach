/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module KO4Xaml {
    export class MainViewModel {
        public FirstObservable: KnockoutObservable<string> = ko.observable("Say Hello to Knockout");
        public FirstObservableCollection: KnockoutObservableArray<ToDo> = ko.observableArray([]);
        public FirstComputed: KnockoutComputed<string>;

        constructor() {
            this.FirstObservableCollection.push(new ToDo("Item 1", "Message 1"));
            this.FirstObservableCollection.push(new ToDo("Item 2", "Message 2"));
            this.FirstObservableCollection.push(new ToDo("Item 3", "Message 3"));

            this.FirstComputed = ko.computed(() => {
                return this.FirstObservable() + " From Computed";
            });
        }
    }

    export class ToDo{
        public Title: KnockoutObservable<string> = ko.observable("");
        public Message: KnockoutObservable<string> = ko.observable("");

        constructor(title: string, message: string) {
            this.Title(title);
            this.Message(message);
        }
    }
}