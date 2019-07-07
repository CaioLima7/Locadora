using Dominio.Contratos;
using Dominio.Entidades;
using Repositorio.Banco;
using Repositorio.Repositorios;

namespace Repositorio.Banco.Repositorios
{
    public class ItemPedidoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ItemPedidoRepositorio(Contexto contexto) : base(contexto)
        {

        }
    }
}
