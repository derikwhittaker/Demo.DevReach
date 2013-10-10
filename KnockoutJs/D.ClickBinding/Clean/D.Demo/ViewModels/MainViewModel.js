/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var KO4Xaml;
(function (KO4Xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            var _this = this;
            this.FirstName = ko.observable("");
            this.Message = ko.observable("");
            this.IsValid = ko.computed(function () {
                return _this.FirstName().length > 0;
            });
        }
        MainViewModel.prototype.save = function (data) {
            this.Message("Save was clicked");
        };
        return MainViewModel;
    })();
    KO4Xaml.MainViewModel = MainViewModel;
})(KO4Xaml || (KO4Xaml = {}));
