using Domínio.Contratos;
using Domínio.Entidades;
using Repositório.Banco;

namespace Repositório.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(Contexto contexto) : base(contexto)
        {
        }
    }
}
