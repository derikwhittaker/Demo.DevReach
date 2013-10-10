/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var TypeDefinitions;
(function (TypeDefinitions) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.Items = ko.observableArray([]);
            this.Items.push(new ToDoItem("Item 1", "Description 1"));
            this.Items.push(new ToDoItem("Item 2", "Description 2"));
            this.Items.push(new ToDoItem("Item 3", "Description 3"));
            this.Items.push(new ToDoItem("Item 4", "Description 4"));
            this.Items.push(new ToDoItem("Item 5", "Description 5"));
            this.Items.push(new ToDoItem("Item 6", "Description 6"));
        }
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
