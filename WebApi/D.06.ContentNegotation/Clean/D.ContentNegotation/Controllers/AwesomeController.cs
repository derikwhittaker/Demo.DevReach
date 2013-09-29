using System.Net;
using System.Net.Http;
using System.Web.Http;
using D.Actions.Models;

namespace D.Actions.Controllers
{
    
    public class AwesomeController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Person()
        {
            var person = new Person
            {
                FirstName = "Clark",
                LastName = "Kent",
                Age = 21,
                Address = new Address
                {
                    Street = "123 Main",
                    City = "Smallville",
                    State = "KS",
                    Zip = "12345"
                }
            };

            return Request.CreateResponse(HttpStatusCode.OK, person);
        }


    }

}