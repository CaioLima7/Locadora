using Dominio.Contratos;
using Dominio.Entidades;
using Repositorio.Repositorios;
using System;
using System.Collections.Generic;
using System.Text;

namespace Negocio
{
    public class Parcele
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        public float CalculoJuros(ItemPedido model)
        {
            Produto _produto = _produtoRepositorio.ObterPorId(model.ProdutoId);

            return _produto.Preco * model.Quantidade;
        }
    }

}
