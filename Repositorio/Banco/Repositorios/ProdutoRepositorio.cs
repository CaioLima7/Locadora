using Dominio.Contratos;
using Dominio.Entidades;
using Repositorio.Banco;

namespace Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(Contexto contexto) : base(contexto)
        {

        }
    }
}
