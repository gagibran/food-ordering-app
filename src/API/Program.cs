using Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
var developmentCorsPolicy = "DevelopmentCorsPolicy";

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("AppDatabase"));
});
builder.Services.AddScoped<IDishRepository, DishRepository>();
builder.Services.AddScoped<ICheckoutCustomerRepository, CheckoutCustomerRepository>();
if (builder.Environment.IsDevelopment())
{
    builder.WebHost.UseUrls("http://+:5000"); // HTTPS doesn't work very well with Docker.
    builder.Services.AddCors(options =>
    {
        options.AddPolicy(developmentCorsPolicy, policy =>
        {
            policy.WithOrigins("http://localhost:3000")
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
    });
}

WebApplication app = builder.Build();
ILogger logger = app.Services.GetRequiredService<ILogger<Program>>();
using IServiceScope scope = app.Services.CreateScope();
IServiceProvider services = scope.ServiceProvider;

// Configure the HTTP request pipeline.
if (app.Environment.IsProduction())
{
    app.UseHttpsRedirection();
}
else if (app.Environment.IsDevelopment())
{
    app.UseCors(developmentCorsPolicy);
    AppDbContext appDbContext = services.GetRequiredService<AppDbContext>();
    try
    {
        await appDbContext.Database.MigrateAsync();
        await AppDbContextSeeds.SeedDishesAsync(appDbContext);
    }
    catch (Exception exception)
    {
        logger.LogError($"An error ocurred during migration: {exception}.");
    }
}
app.UseAuthorization();
app.MapControllers();
app.Run();
