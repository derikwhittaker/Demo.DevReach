/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var Demo;
(function (Demo) {
    var ModelBindingViewModel = (function () {
        function ModelBindingViewModel() {
            this.FirstName = ko.observable("Demo");
            this.MiddleName = ko.observable("-- Middle --");
            this.LastName = ko.observable("Dude");
            this.FullName = ko.observable("");
            this.Age = ko.observable(0);
            this.ShowBindingLogic = ko.observable(false);
            this.ShowOverBindingLogic = ko.observable(false);
            this.ShowBindingValidationLogic = ko.observable(true);
        }
        ModelBindingViewModel.prototype.bindingPost = function () {
            var _this = this;
            var url = "http://localhost:30976/api/Awesome/ModelBinding";

            var model = {
                FirstName: this.FirstName(),
                LastName: this.LastName()
            };

            $.post(url, model).done(function (results) {
                _this.FullName(results);
            }).fail(function (results) {
                console.log(results);
            });
        };

        ModelBindingViewModel.prototype.overBindingPost = function () {
            var _this = this;
            var url = "http://localhost:30976/api/Awesome/OverModelBinding";

            var model = {
                FName: this.FirstName(),
                LastName: this.LastName(),
                MiddleName: this.MiddleName()
            };

            $.post(url, model).done(function (results) {
                _this.FullName(results);
            });
        };

        ModelBindingViewModel.prototype.validationBindingPost = function () {
            var _this = this;
            var url = "http://localhost:30976/api/Awesome/ValidationModelBinding";

            var model = {
                FirstName: this.FirstName(),
                LastName: this.LastName(),
                Age: this.Age()
            };

            $.post(url, model).done(function (results) {
                _this.FullName(results);
            }).fail(function (results) {
                var x = results;
            });
        };
        return ModelBindingViewModel;
    })();
    Demo.ModelBindingViewModel = ModelBindingViewModel;
})(Demo || (Demo = {}));
