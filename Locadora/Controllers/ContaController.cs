using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Locadora.Banco.Entidades;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Locadora.Controllers
{
    public class ContaController : Controller
    {
        public string Email { get; set; }
        public string Senha { get; set; }

        [HttpPost("registrar")]
        public async Task<IActionResult> Login()
        {
            Usuario u = new Usuario();
            if (Email == u.Email)
            {
                return Ok();
            }
            if (Email == u.Senha)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
