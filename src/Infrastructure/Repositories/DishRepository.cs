namespace Infrastructure.Repositories;

public class DishRepository : GenericRepository<Dish>, IDishRepository
{
    private readonly AppDbContext _appDbContext;
    private readonly DbSet<Dish> _dishes;

    public DishRepository(AppDbContext appDbContext) : base(appDbContext)
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
}
