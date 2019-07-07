using Dominio.Contratos;
using Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Negocio
{
    public class Adquerir
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        private readonly IItemPedidoRepositorio _itemPedidoRepositorio;

        public Adquerir(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        public string Alugar(ItemPedido model)   
        {
            Produto produto = _produtoRepositorio.ObterPorId(model.ProdutoId);

            int QtdEstoque = _produtoRepositorio.ObterTodos().Count();

            if (model.Quantidade > QtdEstoque)
            {
                return "Quantidade excede quantidade de estoque!";
            }
            if(model.Quantidade == QtdEstoque)
            {
                produto.Status = 0;
                _produtoRepositorio.Atualizar(produto);
                return "Sucesso";
            }
            else
            {
                return "teste";
            }
        }
        public string Comprar(ItemPedido model, ItemPedido teste)
        {
            int QtdEstoque = _produtoRepositorio.ObterTodos().Count();

            if (model.Quantidade > QtdEstoque)
            {
                return "Quantidade excede quantidade de estoque!";
            }
            else
            {
                var AlteracaoMinimaProduto = _produtoRepositorio.ObterPorId(model.Id);
                AlteracaoMinimaProduto.QtdEstoque = QtdEstoque - model.Quantidade;
                _produtoRepositorio.Atualizar(AlteracaoMinimaProduto);

                _itemPedidoRepositorio.Adicionar(model);

                return "Sucesso";
            }
        }

    }
}
