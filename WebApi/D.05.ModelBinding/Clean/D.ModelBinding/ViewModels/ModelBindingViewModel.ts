/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />

module Demo {
    export class ModelBindingViewModel {

        public FirstName: KnockoutObservable<string> = ko.observable("Demo");
        public MiddleName: KnockoutObservable<string> = ko.observable("-- Middle --");
        public LastName: KnockoutObservable<string> = ko.observable("Dude");
        public FullName: KnockoutObservable<string> = ko.observable("");
        public Age: KnockoutObservable<number> = ko.observable(0);

        public ShowBindingLogic: KnockoutObservable<boolean> = ko.observable(false);
        public ShowOverBindingLogic: KnockoutObservable<boolean> = ko.observable(false);
        public ShowBindingValidationLogic: KnockoutObservable<boolean> = ko.observable(true);

        bindingPost() {
            var url = "http://localhost:30976/api/Awesome/ModelBinding";

            var model = {
                FirstName: this.FirstName(),
                LastName: this.LastName()
            };

            $.post(url, model)
                .done(results => {
                    this.FullName(results);
                })
                .fail(results => {
                    console.log(results);
                });
        }

        overBindingPost() {
            var url = "http://localhost:30976/api/Awesome/OverModelBinding";

            var model = {
                FName: this.FirstName(),
                LastName: this.LastName(),
                MiddleName: this.MiddleName()
            };

            $.post(url, model)
                .done(results => {
                    this.FullName(results);
                });
        }

        validationBindingPost() {
            var url = "http://localhost:30976/api/Awesome/ValidationModelBinding";

            var model = {
                FirstName: this.FirstName(),
                LastName: this.LastName(),
                Age: this.Age()
            };

            $.post(url, model)
                .done(results => {
                    this.FullName(results);
                })
                .fail(results => {
                    var x = results;
                })
            ;
        }

    }
}
