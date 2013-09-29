using System.Web.Http;
using D.Actions.Models;

namespace D.Actions.Controllers
{
    
    public class AwesomeController : ApiController
    {
        [HttpPost]
        public string ModelBinding(Person person)
        {
            return string.Format("{0} {1}", person.FirstName, person.LastName);
        }

        [HttpPost]
        public string OverModelBinding(Person person)
        {
            return string.Format("{0} {1} with Over Binding", person.FirstName, person.LastName);
        }

        [HttpPost]
        public string ValidationModelBinding(Person person)
        {
            var isValid = ModelState.IsValid;
            var message = !isValid ? "Not Valid" : "Valid";

            return string.Format("{0} {1} with validation -- is {2}", person.FirstName, person.LastName, message);
        }

    }

}