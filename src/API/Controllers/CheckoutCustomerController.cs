using Core.Entities;
using Core.Exceptions;

namespace API.Controllers;

public class CheckoutCustomerController : BaseController
{
    private readonly ICheckoutCustomerRepository _checkoutCustomerRepository;

    public CheckoutCustomerController(ICheckoutCustomerRepository checkoutCustomerRepository)
    {
        _checkoutCustomerRepository = checkoutCustomerRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetCheckoutCustomers()
    {
        IEnumerable<CheckoutCustomer> checkoutCustomers = await _checkoutCustomerRepository.GetAllAsync();
        return Ok(checkoutCustomers);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetCheckoutCustomer(Guid id)
    {
        try
        {
            CheckoutCustomer checkoutCustomer = await _checkoutCustomerRepository.GetByIdAsync(id);
            return Ok(checkoutCustomer);
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<IActionResult> CreateCheckoutCustomer(CheckoutCustomer checkoutCustomer)
    {
        var createdCheckoutCustomer = new CheckoutCustomer
        {
            Id = Guid.NewGuid(),
            FirstName = checkoutCustomer.FirstName,
            LastName = checkoutCustomer.LastName,
            Email = checkoutCustomer.Email,
            PhoneNumberWithAreaCode = checkoutCustomer.PhoneNumberWithAreaCode,
            Address1 = checkoutCustomer.Address1,
            Address2 = checkoutCustomer.Address2,
            Zip = checkoutCustomer.Zip,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = null
        };
        await _checkoutCustomerRepository.CreateAsync(createdCheckoutCustomer);
        bool wasSaved = await _checkoutCustomerRepository.SaveAsync();

        if (!wasSaved)
        {
            return BadRequest("Failed to create the checkoutCustomer.");
        }

        return CreatedAtAction(nameof(GetCheckoutCustomer), new { id = createdCheckoutCustomer.Id }, createdCheckoutCustomer);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCheckoutCustomer(CheckoutCustomer checkoutCustomer, Guid id)
    {
        try
        {
            await _checkoutCustomerRepository.UpdateCheckoutCustomerAsync(checkoutCustomer, id);
            bool wasSaved = await _checkoutCustomerRepository.SaveAsync();

            if (!wasSaved)
            {
                return BadRequest("Failed to update the checkoutCustomer.");
            }

            return NoContent();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCheckoutCustomer(Guid id)
    {
        try
        {
            await _checkoutCustomerRepository.DeleteAsync(id);
            bool wasSaved = await _checkoutCustomerRepository.SaveAsync();
            if (!wasSaved)
            {
                return BadRequest("Failed to delete the checkoutCustomer.");
            }
            return Ok();
        }
        catch (NotFoundException)
        {
            return NotFound();
        }
    }
}
