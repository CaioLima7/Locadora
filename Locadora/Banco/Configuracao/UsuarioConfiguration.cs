﻿using Locadora.Banco.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositorio.Config
{
    class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);

            //Builder utiliza o padrão Fluent

            builder.Property(u => u.Email)
                .IsRequired().HasMaxLength(50);

            builder.Property(u => u.Nome)
                .IsRequired().HasMaxLength(50); /*.HasColumnType("nvarchar");*/

            builder.Property(u => u.Senha)
                .IsRequired()
                .HasMaxLength(400);

            builder.HasMany(u => u.Pedidos)
                .WithOne(p => p.Usuario);

        }
    }
}