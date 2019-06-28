using Repositorio.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Repositorio.Banco.Entidades;

namespace Repositorio.Banco
{
    public class Contexto : IdentityDbContext
    {
        public Contexto(DbContextOptions<Contexto> options)
            : base(options)
        { }

        public DbSet<AppUsuario> ApplicationUsers { get; set; }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<ItemPedido> ItemPedidos { get; set; }
    }
}
