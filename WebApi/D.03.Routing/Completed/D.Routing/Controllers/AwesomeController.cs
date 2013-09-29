using System.Web.Http;

namespace D.Actions.Controllers
{
    public class StatusController : ApiController
    {
        [HttpGet("api/teams/{teamId}/status")]
        public string TeamStatus(int teamId)
        {
            return string.Format("Team {0} status is 'something'", teamId);
        }
    }

    public class AwesomeController : ApiController
    {
        [HttpGet]
        public string Status()
        {
            return "Your Awesome";
        }

        [HttpGet]
        public string Status(string id)
        {
            return string.Format("Status of {0} was provided", id);
        }

        [HttpGet]
        public string AnotherStatus(string id)
        {
            return string.Format("Another staus of {0} was provided", id);
        }
        
    }

}