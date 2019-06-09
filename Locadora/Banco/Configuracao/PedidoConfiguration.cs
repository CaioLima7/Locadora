using Locadora.Banco.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositorio.Config
{
    class PedidoCOnfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {

            builder.HasKey(p => p.Id);

            builder.Property(p => p.DataPedido)
                .IsRequired();

            builder.Property(p => p.DataPrevisaoEntrega)
                .IsRequired();

            builder.HasOne(p => p.Usuario);

        }
    }
}
