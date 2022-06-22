namespace Infrastructure.Repositories;

public class CheckoutCustomerRepository : GenericRepository<CheckoutCustomer>, ICheckoutCustomerRepository
{
    private readonly AppDbContext _appDbContext;
    private readonly DbSet<CheckoutCustomer> _checkoutCustomers;

    public CheckoutCustomerRepository(AppDbContext appDbContext) : base(appDbContext)
    {
        _appDbContext = appDbContext;
        _checkoutCustomers = _appDbContext.Set<CheckoutCustomer>();
    }

    public async Task UpdateCheckoutCustomerAsync(CheckoutCustomer checkoutCustomer, Guid id)
    {
        CheckoutCustomer? checkoutCustomerToBeUpdated = await _checkoutCustomers.FindAsync(id);

        if (checkoutCustomerToBeUpdated is null)
        {
            throw new NotFoundException();
        }

        checkoutCustomerToBeUpdated.FirstName = checkoutCustomer.FirstName;
        checkoutCustomerToBeUpdated.LastName = checkoutCustomer.LastName;
        checkoutCustomerToBeUpdated.Email = checkoutCustomer.Email;
        checkoutCustomerToBeUpdated.PhoneNumberWithAreaCode = checkoutCustomer.PhoneNumberWithAreaCode;
        checkoutCustomerToBeUpdated.Address1 = checkoutCustomer.Address1;
        checkoutCustomerToBeUpdated.Address2 = checkoutCustomer.Address2;
        checkoutCustomerToBeUpdated.UpdatedAt = DateTime.UtcNow;

        _checkoutCustomers.Update(checkoutCustomerToBeUpdated);
    }
}
