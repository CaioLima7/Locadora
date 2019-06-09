using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Locadora.Banco.Entidades;
using Microsoft.EntityFrameworkCore;

namespace Locadora.Banco
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options)
            : base(options)
        { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<ItemPedido> ItemPedidos { get; set; }
    }
}
