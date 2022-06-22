using Core.Entities;

namespace Core.Interfaces;

public interface IDishRepository : IGenericRepository<Dish>
{
    Task UpdateDishAsync(Dish dish, Guid id);
}
