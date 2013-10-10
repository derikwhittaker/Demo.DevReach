/// <reference path="../Scripts/typings/knockout/knockout.d.ts" />


module KO4Xaml {
    export class MainViewModel {
        public People: KnockoutObservableArray<Person> = ko.observableArray([]);
      
        constructor() {
            this.People.push(this.createPerson());
        }

        private createPerson() {
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
        }

        public addPerson() {
            this.People.push(this.createPerson());
        }

        public deletePerson(person: Person) {            
            this.People.remove(person);
        }
    }

    export class Person {
        public FirstName: KnockoutObservable<string> = ko.observable("");
        public LastName: KnockoutObservable<string> = ko.observable("");
        public Age: KnockoutObservable<number> = ko.observable(0);
        public Address: KnockoutObservable<Address> = ko.observable(new Address());
    }

    export class Address {
        public Address: KnockoutObservable<string> = ko.observable("");
        public City: KnockoutObservable<string> = ko.observable("");
        public State: KnockoutObservable<string> = ko.observable("");
        public Zip: KnockoutObservable<string> = ko.observable("");
    }
}