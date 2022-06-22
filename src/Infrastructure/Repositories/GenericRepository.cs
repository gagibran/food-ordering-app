namespace Infrastructure.Repositories;

public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : BaseEntity
{
    private readonly AppDbContext _appDbContext;
    private readonly DbSet<TEntity> _entities;

    public GenericRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
        _entities = _appDbContext.Set<TEntity>();
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync()
    {
        return await _entities.ToListAsync();
    }

    public async Task<TEntity> GetByIdAsync(Guid id)
    {
        TEntity? entity = await _entities.FindAsync(id);

        if (entity is null)
        {
            throw new NotFoundException();
        }

        return entity;
    }

    public async Task CreateAsync(TEntity entity)
    {
        await _entities.AddAsync(entity);
    }

    public async Task DeleteAsync(Guid id)
    {
        TEntity? entityToBeRemoved = await _entities.FindAsync(id);

        if (entityToBeRemoved is null)
        {
            throw new NotFoundException();
        }

        _entities.Remove(entityToBeRemoved);
    }

    public async Task<bool> SaveAsync()
    {
        return await _appDbContext.SaveChangesAsync() > 0;
    }
}
