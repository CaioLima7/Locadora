using Dominio.Contratos;
using Dominio.Entidades;
using Repositorio.Banco;

namespace Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(Contexto contexto) : base(contexto)
        {
        }
    }
}
