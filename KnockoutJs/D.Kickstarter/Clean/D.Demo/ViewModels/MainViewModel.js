/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var KO4Xaml;
(function (KO4Xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            var _this = this;
            this.FirstObservable = ko.observable("Say Hello to Knockout");
            this.FirstObservableCollection = ko.observableArray([]);
            this.FirstObservableCollection.push(new ToDo("Item 1", "Message 1"));
            this.FirstObservableCollection.push(new ToDo("Item 2", "Message 2"));
            this.FirstObservableCollection.push(new ToDo("Item 3", "Message 3"));

            this.FirstComputed = ko.computed(function () {
                return _this.FirstObservable() + " From Computed";
            });
        }
        return MainViewModel;
    })();
    KO4Xaml.MainViewModel = MainViewModel;

    var ToDo = (function () {
        function ToDo(title, message) {
            this.Title = ko.observable("");
            this.Message = ko.observable("");
            this.Title(title);
            this.Message(message);
        }
        return ToDo;
    })();
    KO4Xaml.ToDo = ToDo;
})(KO4Xaml || (KO4Xaml = {}));
