using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repositório.Models
{
    public class UsuarioModel
    {
        public string NomeUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string NomeCompleto { get; set; }

        public string Role { get; set; }
    }
}
