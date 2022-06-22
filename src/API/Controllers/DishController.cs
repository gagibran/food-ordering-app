using Core.Entities;
using Core.Exceptions;

namespace API.Controllers;

public class DishController : BaseController
{
    private readonly IDishRepository _dishRepository;

    public DishController(IDishRepository dishesRepository)
    {
        _dishRepository = dishesRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetDishes()
    {
        IEnumerable<Dish> dishes = await _dishRepository.GetAllAsync();
        return Ok(dishes);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetDish(Guid id)
    {
        try
        {
            Dish dish = await _dishRepository.GetByIdAsync(id);
            return Ok(dish);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<IActionResult> CreateDish(Dish dish)
    {
        var createdDish = new Dish
        {
            Id = Guid.NewGuid(),
            Name = dish.Name,
            Description = dish.Description,
            Price = dish.Price,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = null
        };
        await _dishRepository.CreateAsync(createdDish);
        bool wasSaved = await _dishRepository.SaveAsync();

        if (!wasSaved)
        {
            return BadRequest("Failed to create the dish.");
        }

        return CreatedAtAction(nameof(GetDish), new { id = createdDish.Id }, createdDish);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateDish(Dish dish, Guid id)
    {
        try
        {
            await _dishRepository.UpdateDishAsync(dish, id);
            bool wasSaved = await _dishRepository.SaveAsync();

            if (!wasSaved)
            {
                return BadRequest("Failed to update the dish.");
            }

            return NoContent();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDish(Guid id)
    {
        try
        {
            await _dishRepository.DeleteAsync(id);
            bool wasSaved = await _dishRepository.SaveAsync();
            if (!wasSaved)
            {
                return BadRequest("Failed to delete the dish.");
            }
            return Ok();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }
}
