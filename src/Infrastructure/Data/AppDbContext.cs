namespace Infrastructure.Data;

public class AppDbContext : DbContext
{
    public DbSet<Dish> Dishes { get; set; } = default!;
    public DbSet<CheckoutCustomer> CheckoutCustomers { get; set; } = default!;

    public AppDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
    {
    }
}
