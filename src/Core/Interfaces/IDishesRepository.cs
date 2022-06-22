using Core.Entities;

namespace Core.Interfaces;

public interface IDishesRepository : IGenericRepository<Dish>
{
    Task UpdateDishAsync(Dish dish, Guid id);
    Task<bool> SaveDishesAsync();
}
