using Domínio.Contratos;
using Domínio.Entidades;
using Repositório.Banco;

namespace Repositório.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(Contexto contexto) : base(contexto)
        {

        }
    }
}
