using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dominio.Contratos;
using Dominio.Entidades;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Negocio;

namespace Locadora.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly IItemPedidoRepositorio _itemPedidoRepositorio;
        private readonly IProdutoRepositorio _produtoRepositorio;

        public ProdutoController(IItemPedidoRepositorio itemPedidoRepositorio, IProdutoRepositorio produtoRepositorio)
        {
            _itemPedidoRepositorio = itemPedidoRepositorio;
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

        [HttpPost]
        [Route("Alugar")]
        public IActionResult Alugar(ItemPedido model)
        {
            Adquerir adquerir = new Adquerir(_produtoRepositorio);

            var VerificarRegra = adquerir.Alugar(model);

            try
            {
                _itemPedidoRepositorio.Adicionar(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok($"{VerificarRegra}");
        }

        [HttpPost]
        [Route("ComprarDVD")]
        public IActionResult Comprar(ItemPedido model)
        {
            Adquerir adquerir = new Adquerir(_produtoRepositorio);

            var VerificarRegra = adquerir.Comprar(model);

            try
            {
                _itemPedidoRepositorio.Adicionar(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            return Ok(VerificarRegra);
        }

    }
}