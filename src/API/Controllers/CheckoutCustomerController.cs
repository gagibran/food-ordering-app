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
        await _checkoutCustomerRepository.CreateAsync(checkoutCustomer);
        bool wasSaved = await _checkoutCustomerRepository.SaveAsync();

        if (!wasSaved)
        {
            return BadRequest("Failed to create the checkoutCustomer.");
        }

        return CreatedAtAction(nameof(GetCheckoutCustomer), new { id = checkoutCustomer.Id }, checkoutCustomer);
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
