/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module KO4Xaml {
    export class MainViewModel {
        public FirstName: KnockoutObservable<string> = ko.observable("");
        public Message: KnockoutObservable<string> = ko.observable("");
        public IsValid: KnockoutComputed<boolean>;

        constructor() {

            this.IsValid = ko.computed(() => {
                return this.FirstName().length > 0;
            });

        }
        public save(data) {
            this.Message("Save was clicked");
        }
    }

}