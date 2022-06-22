namespace Core.Interfaces;

public interface IGenericRepository<TEntity> where TEntity : class
{
    Task<IEnumerable<TEntity>> GetAllAsync();
    Task<TEntity> GetByIdAsync(Guid id);
    Task CreateAsync(TEntity entity);
    Task DeleteAsync(Guid id);
}
