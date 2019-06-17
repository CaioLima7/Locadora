using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using unirest_net.http;

namespace Locadora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiController : ControllerBase
    {
        //[HttpGet()]
        //public async Task<IActionResult> Teste()
        //{
        //    Task<HttpResponse<ApiController>> response = Unirest.get("https://tvjan-tvmaze-v1.p.rapidapi.com/shows/3")
        //    .header("x-rapidapi-host", "tvjan-tvmaze-v1.p.rapidapi.com")
        //    .header("x-rapidapi-key", "46931229f5msha33daabec077287p1e719fjsn1a2115661625")
        //    .asJsonAsync<ApiController>();

        //    return Ok(response);
        //}

        [HttpPost()]
        public IActionResult teste2(Array Dados)
        {

            return Ok();
        }
    }
}