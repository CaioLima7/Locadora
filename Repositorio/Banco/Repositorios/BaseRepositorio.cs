using System.Collections.Generic;
using System.Linq;
using Dominio.Contratos;
using Repositorio.Banco;

namespace Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {

        protected readonly Contexto Contexto;

        public BaseRepositorio(Contexto contexto)
        {
            Contexto = contexto;
        }

        public void Adicionar(TEntity entity)
        {
            Contexto.Set<TEntity>().Add(entity);
            Contexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            Contexto.Set<TEntity>().Update(entity);
            Contexto.SaveChanges();
        }

        public TEntity ObterPorId(int id)
        {
            return Contexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return Contexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            Contexto.Remove(entity);
            Contexto.SaveChanges();
        }

        public void Dispose()
        {
            Contexto.Dispose();
        }
    }
}
