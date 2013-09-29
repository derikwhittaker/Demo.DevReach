using System.ComponentModel.DataAnnotations;

namespace D.Actions.Models
{
    public class Person
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Range(0, 99)]
        public int Age { get; set; }

    }
}