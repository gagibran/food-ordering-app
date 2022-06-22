namespace Infrastructure.Data;

public class AppDbContextSeeds
{
    public static async Task SeedDishesAsync(AppDbContext appDbContext)
    {
        if (appDbContext.Dishes.Any())
        {
            return;
        }

        var dishes = new List<Dish>
        {
            new Dish
            {
                Name = "Risotto alla Milanese",
                Description = "Risotto with Parmesan & Saffron.",
                Price = 15.99M
            },
            new Dish
            {
                Name = "Pasta alla Norma",
                Description = "Sicilian pasta dish with eggplant, marinara and basil.",
                Price = 10.99M
            },
            new Dish
            {
                Name = "Pizza Margherita",
                Description = "Tomato sauce, mozzarella and basil.",
                Price = 11.99M
            },
            new Dish
            {
                Name = "Bistecca alla Fiorentina",
                Description = "Porterhouse steak done Florentine style.",
                Price = 25.99M
            },
            new Dish
            {
                Name = "Ragù alla Bolognese",
                Description = "Pasta with Bolognese sauce.",
                Price = 7.99M
            }
        };

        await appDbContext.Dishes.AddRangeAsync(dishes);
        await appDbContext.SaveChangesAsync();
    }
}
