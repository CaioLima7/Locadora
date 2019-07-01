using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dominio.Contratos;
using Dominio.Entidades;
//using Dominio.Entidades;
using Locadora.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ObterCompraController : ControllerBase
    {
        private readonly IProdutoRepositorio _produtoRepositorio;

        public ObterCompraController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        [HttpPost]
        public IActionResult AdicionarCompra(Produto model)
        {
            try
            {
                _produtoRepositorio.Adicionar(model);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok("Feito com sucesso");
        }
         
    }
}