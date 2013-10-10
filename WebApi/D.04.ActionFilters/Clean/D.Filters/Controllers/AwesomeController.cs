using System.Web.Http;
using D.Actions.Filters;

namespace D.Actions.Controllers
{

    
    public class AwesomeController : ApiController
    {
        [HttpGet]
        public string Status()
        {
            return "Your Awesome";
        }

        [DemoActionFilter]
        [HttpGet]
        public string Status(string id)
        {
            return string.Format("Status of {0} was provided", id);
        }

    }

}