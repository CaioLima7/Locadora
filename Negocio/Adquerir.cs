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

        public Adquerir(IProdutoRepositorio produtoRepositorio) 
        {
            _produtoRepositorio = produtoRepositorio;
        }

        public string Alugar(ItemPedido model)   
        {
            Produto produto = _produtoRepositorio.ObterPorId(model.ProdutoId);

            int QtdEstoque = produto.QtdEstoque;

            if (model.Quantidade > QtdEstoque)
            {
                return "Quantidade excede quantidade de estoque!";
            }
            if(model.Quantidade == QtdEstoque)
            {
                produto.Status = 0;
                _produtoRepositorio.Atualizar(produto);
                return $"Sucesso, agora o produto não possui mais estoque";
            }
            else
            {
                produto.QtdEstoque = QtdEstoque - model.Quantidade;
                _produtoRepositorio.Atualizar(produto);
                return $@"Sucesso, agora o produto possui essa quantia de estoque: 
                        {produto.QtdEstoque}";
            }
        }
        public string Comprar(ItemPedido model)
        {
            Produto produto = _produtoRepositorio.ObterPorId(model.ProdutoId);

            int QtdEstoque = produto.QtdEstoque;

            if (model.Quantidade > QtdEstoque)
            {
                return "Quantidade excede quantidade de estoque!";
            }
            if (model.Quantidade == QtdEstoque)
            {
                produto.Status = 0;
                _produtoRepositorio.Atualizar(produto);
                return $"Sucesso, agora o produto não possui mais estoque";
            }
            else
            {
                produto.QtdEstoque = QtdEstoque - model.Quantidade;
                _produtoRepositorio.Atualizar(produto);
                return $"Sucesso, agora o produto possui essa quantia de estoque: {produto.QtdEstoque}";
            }
        }

    }
}
