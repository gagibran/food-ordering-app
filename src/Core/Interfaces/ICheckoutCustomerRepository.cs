using Core.Entities;

namespace Core.Interfaces;

public interface ICheckoutCustomerRepository : IGenericRepository<CheckoutCustomer>
{
    Task UpdateCheckoutCustomerAsync(CheckoutCustomer checkoutCustomer, Guid id);
}
