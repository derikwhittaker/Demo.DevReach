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

        [HttpPost]
        [ActionName("Status")]
        public string CreateStatus(string status)
        {
            return string.Format("Status of {0} was posted", status);
        }

        [HttpPut]
        [ActionName("Status")]
        public string UpdateStatus(string status)
        {
            return string.Format("Status of {0} was Put", status);
        }

        
        public string DeleteStatus(string status)
        {
            return string.Format("Status of {0} was Delete", status);
        }
    }

}