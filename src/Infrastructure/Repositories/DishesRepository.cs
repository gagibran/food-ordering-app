namespace Infrastructure.Repositories;

public class DishesRepository : GenericRepository<Dish>, IDishesRepository
{
    private readonly AppDbContext _appDbContext;
    private readonly DbSet<Dish> _dishes;

    public DishesRepository(AppDbContext appDbContext) : base(appDbContext)
    {
        _appDbContext = appDbContext;
        _dishes = _appDbContext.Set<Dish>();
    }

    public async Task UpdateDishAsync(Dish dish, Guid id)
    {
        Dish? dishToBeUpdated = await _dishes.FindAsync(id);

        if (dishToBeUpdated is null)
        {
            throw new NotFoundException();
        }

        dishToBeUpdated.Name = dish.Name;
        dishToBeUpdated.Description = dish.Description;
        dishToBeUpdated.Price = dish.Price;
        dishToBeUpdated.UpdatedAt = DateTime.UtcNow;

        _dishes.Update(dishToBeUpdated);
    }

    public async Task<bool> SaveDishesAsync()
    {
        return await _appDbContext.SaveChangesAsync() > 0;
    }

}
