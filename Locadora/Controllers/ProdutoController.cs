using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dominio.Contratos;
using Dominio.Entidades;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Locadora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoRepositorio _produtoRepositorio;

        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        [HttpGet]
        public IActionResult obterProdutos()
        {
            return Ok(_produtoRepositorio.ObterTodos());
        }
        [HttpPost]
        public IActionResult DeletarProduto(Produto model)
        {
            try
            {
                _produtoRepositorio.Remover(model);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok("Removido com sucesso");
        }

        [HttpPost]
        public IActionResult CriarProduto(Produto model)
        {
            try
            {
                _produtoRepositorio.Adicionar(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok("Criado com sucesso");
        }

        [HttpPost]
        public IActionResult AtualizarProduto(Produto model)
        {
            try
            {
                _produtoRepositorio.Atualizar(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok("Atualizado com sucesso");
        }


    }
}