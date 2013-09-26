/// <reference path="../Scripts/typings/underscore/underscore.d.ts" />
/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var TypeDefinitions;
(function (TypeDefinitions) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.Items = ko.observableArray([]);
            this.FilteredItems = ko.observableArray([]);
            this.Items.push(new ToDoItem("Item 1", "Description 1"));
            this.Items.push(new ToDoItem("Item 2", "Description 2"));
            this.Items.push(new ToDoItem("Item 3", "Description 3"));
            this.Items.push(new ToDoItem("Item 4", "Description 4"));
            this.Items.push(new ToDoItem("Item 5", "Description 5"));
            this.Items.push(new ToDoItem("Item 6", "Description 6"));
        }
        MainViewModel.prototype.filter = function () {
            //var filtered = _.filter(this.Items(), function (item) {
            //    return item.Name() == "Item 2";
            //});
            var filtered = _.filter(this.Items(), function (item) {
                return item.Name() == "Item 3";
            });

            this.FilteredItems(filtered);
        };

        MainViewModel.prototype.reset = function () {
            this.FilteredItems([]);
        };
        return MainViewModel;
    })();
    TypeDefinitions.MainViewModel = MainViewModel;

    var ToDoItem = (function () {
        function ToDoItem(name, description) {
            this.Name = ko.observable("");
            this.Description = ko.observable("");
            this.Name(name);
            this.Description(description);
        }
        return ToDoItem;
    })();
    TypeDefinitions.ToDoItem = ToDoItem;
})(TypeDefinitions || (TypeDefinitions = {}));
