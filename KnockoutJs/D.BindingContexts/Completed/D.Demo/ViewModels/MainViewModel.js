/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />
var KO4Xaml;
(function (KO4Xaml) {
    var MainViewModel = (function () {
        function MainViewModel() {
            this.People = ko.observableArray([]);
            this.People.push(this.createPerson());
        }
        MainViewModel.prototype.createPerson = function () {
            var person = new Person();
            person.FirstName("Derik");
            person.LastName("Whittaker");
            person.Age(35);

            var address = new Address();
            address.Address("123 Main");
            address.City("SomeCity");
            address.State("NC");
            address.Zip("12345");
            person.Address(address);

            return person;
        };

        MainViewModel.prototype.addPerson = function () {
            this.People.push(this.createPerson());
        };

        MainViewModel.prototype.deletePerson = function (person) {
            this.People.remove(person);
        };
        return MainViewModel;
    })();
    KO4Xaml.MainViewModel = MainViewModel;

    var Person = (function () {
        function Person() {
            this.FirstName = ko.observable("");
            this.LastName = ko.observable("");
            this.Age = ko.observable(0);
            this.Address = ko.observable(new Address());
        }
        return Person;
    })();
    KO4Xaml.Person = Person;

    var Address = (function () {
        function Address() {
            this.Address = ko.observable("");
            this.City = ko.observable("");
            this.State = ko.observable("");
            this.Zip = ko.observable("");
        }
        return Address;
    })();
    KO4Xaml.Address = Address;
})(KO4Xaml || (KO4Xaml = {}));
