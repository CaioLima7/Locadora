using Dominio.Contratos;
using Dominio.Entidades;

namespace Repositorio.Banco.Repositorios
{
    public class ItemPedidoRepositorio : BaseRepositorio<ItemPedido>, IItemPedidoRepositorio
    {
        public ItemPedidoRepositorio(Contexto contexto) : base(contexto)
        {

        }
    }
}
