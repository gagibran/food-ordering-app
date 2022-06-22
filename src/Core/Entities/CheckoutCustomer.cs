namespace Core.Entities;

public class CheckoutCustomer : BaseEntity
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public long PhoneNumberWithAreaCode { get; set; }
    public string Address1 { get; set; } = string.Empty;
    public string Address2 { get; set; } = string.Empty;
    public string Zip { get; set; } = string.Empty;
    public List<Dish> DishesOrdered { get; set; } = default!;
    public decimal Total { get; set; }
}
