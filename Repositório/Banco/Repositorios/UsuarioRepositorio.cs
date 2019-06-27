using Domínio.Contratos;
using Domínio.Entidades;
using Repositório.Banco;

namespace Repositório.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(Contexto contexto) : base(contexto)
        {
        }
    }
}
