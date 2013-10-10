using System.Web.Http;

namespace D.Actions.Controllers
{
    public class AwesomeController : ApiController
    {
        [HttpGet]
        public string Status()
        {
            return "Your Awesome";
        }

        [HttpGet]
        public string Status(string status)
        {
            return string.Format("Status of {0} was provided", status);
        }

        [HttpGet]
        public string AnotherStatus()
        {
            return "Your Awesome -- Another";
        }

        [HttpPost]
        [ActionName("Status")]
        public string Status_IDONTLIKELONGNAMES(string status)
        {
            return string.Format("Status of {0} was posted", status);
        }

        public string PutStatus(string status)
        {
            return string.Format("Status of {0} was Put", status);
        }

        public string DeleteStatus(string status)
        {
            return string.Format("Status of {0} was Delete", status);
        } 
    }

}