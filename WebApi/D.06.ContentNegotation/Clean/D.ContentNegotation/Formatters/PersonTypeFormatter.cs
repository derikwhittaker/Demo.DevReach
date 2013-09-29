using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using D.Actions.Models;

namespace D.Actions.Formatters
{
    public class PersonTypeFormatter : MediaTypeFormatter
    {
        private const string MediaType = "application/person";

        public PersonTypeFormatter()
        {
            SupportedMediaTypes.Add(new MediaTypeHeaderValue(MediaType));
        }

        public override bool CanReadType(Type type)
        {
            return type == typeof(Person);
        }

        public override bool CanWriteType(Type type)
        {
            return type == typeof(Person);
        }

        public override async Task WriteToStreamAsync(Type type, object value, Stream writeStream, HttpContent content,
            TransportContext transportContext)
        {
            
            using (var writer = new StreamWriter(writeStream))
            {
                writer.WriteLine("Person was found");
            }

            writeStream.Close();
        }
    }
}