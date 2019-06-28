using Dominio.ObjetoDeValor;
using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }

        // Criar outra cs para isso
        public DateTime DataPrevisaoEntrega { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string Endereco { get; set; }
        public int NumeroEndereco { get; set; }
        public string CEP { get; set; }


        public int FormaPagamentoId { get; set; }
        public virtual FormaPagamento FormaPagamento { get; set; }
        /// <summary>
        /// Pedido deve ter pelo menos um pedido
        /// ou muitos itens de pedidos
        /// </summary>
        public virtual ICollection<ItemPedido> ItensPedido { get; set; }



        public override void Validate()
        {
            LimparMensagensValidacao();

            if (!ItensPedido.Any())
                AdicionarCritica("Crítica - Item de pedido não pode ficar vazio");
            if (string.IsNullOrWhiteSpace(CEP))
                AdicionarCritica("Crítica - cep deve estar preenchido");

        }

    }
}
