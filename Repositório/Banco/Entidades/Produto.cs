using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repositório.Banco.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public float Preco { get; set; }

        public override void Validate()
        {
            throw new NotImplementedException();
        }
    }
}
