﻿using Dominio.Contratos;
using Dominio.Entidades;
using Repositorio.Banco;

namespace Repositorio.Banco.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(Contexto contexto) : base(contexto)
        {
        }
    }
}
