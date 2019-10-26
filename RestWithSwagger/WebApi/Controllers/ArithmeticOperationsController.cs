using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ArithmeticLib;

namespace WebApi.Controllers
{
    
    /// <summary>
    /// Perform arithmetic operations
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class ArithmeticOperationsController : ControllerBase
    {
       
 /// <summary>
 /// Performs arithmetic operations
 /// </summary>
      public  ArithmeticOperationsController(/*ILogger<ArithmeticOperationsController> logger*/)
        {

        }
/// <summary>
/// Calculate sum of two numbers
/// </summary>
/// <param name="firstOperand">The first number</param>
/// <param name="secondOperand">The second number</param>
/// <returns>Sum of two numbers</returns>
[HttpGet(@"[action]/first/{firstOperand}/second/{secondOperand}")]
        public async Task<ActionResult<double>> Add(double firstOperand, double secondOperand)
        {
            ArithmeticOperations operations = new ArithmeticOperations();
            return await operations.AddNumbers(firstOperand, secondOperand).ConfigureAwait(false);
        }
        
    }
}
