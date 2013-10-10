/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var KO4Xaml;
(function (KO4Xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.ToDoItems = ko.observableArray([]);
            this.ToDoItems.push(new ToDo("Item 1", "overdue"));
            this.ToDoItems.push(new ToDo("Item 2", "normal"));
            this.ToDoItems.push(new ToDo("Item 3", "early"));
        }
        return MainViewModel;
    })();
    KO4Xaml.MainViewModel = MainViewModel;

    var ToDo = (function () {
        function ToDo(name, status) {
            var _this = this;
            this.Name = ko.observable("");
            this.Status = ko.observable("");
            this.StatusStyle = ko.computed(function () {
                if (_this.Status() == "overdue") {
                    return "overdue-status";
                }
                return "normal-status";
            });
            this.Name(name);
            this.Status(status);
        }
        return ToDo;
    })();
    KO4Xaml.ToDo = ToDo;
})(KO4Xaml || (KO4Xaml = {}));
