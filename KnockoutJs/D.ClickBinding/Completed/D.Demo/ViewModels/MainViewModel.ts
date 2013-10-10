/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module KO4Xaml {
    export class MainViewModel {
        public IsValid: KnockoutComputed<boolean>;
        public FirstName: KnockoutObservable<string> = ko.observable("");
        public Message: KnockoutObservable<string> = ko.observable("");

        constructor() {

            this.IsValid = ko.computed(() => {
                return this.FirstName().length > 0;
            });

        }

        public save() {
            this.Message("Save was clicked");
        }

        public saveWithParms(message: string) {
            this.Message(message);
        }
    }

}