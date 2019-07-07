using System;
using System.Collections.Generic;
using System.Text;
using Entidades;

namespace Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public float Preco { get; set; }
        public int QtdEstoque { get; set; }
        public byte Status { get; set; }
        public override void Validate()
        {
            throw new NotImplementedException();
        }
    }
}
