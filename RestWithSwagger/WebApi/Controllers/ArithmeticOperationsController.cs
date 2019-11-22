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
      public  ArithmeticOperationsController(IArithmeticOperations operations)
        {
            Operations = operations ?? throw new ArgumentNullException(nameof(operations));
        }

        private IArithmeticOperations Operations { get; }

        /// <summary>
        /// Calculate sum of two numbers
        /// </summary>
        /// <param name="firstOperand">The first number</param>
        /// <param name="secondOperand">The second number</param>
        /// <returns>Sum of two numbers</returns>
        [HttpGet(@"[action]/first/{firstOperand}/second/{secondOperand}")]
        public async Task<ActionResult<double>> Add(double firstOperand, double secondOperand)
        {
            return await Operations.AddNumbers(firstOperand, secondOperand).ConfigureAwait(false);
        }

        /// <summary>
        /// Calculate sum of two numbers
        /// </summary>
        /// <param name="firstOperand">The first number</param>
        /// <param name="secondOperand">The second number</param>
        /// <returns>Sum of two numbers</returns>
        [HttpGet(@"[action]/{firstOperand}/{secondOperand}")]
        public async Task<ActionResult<double>> Sum(double firstOperand, double secondOperand)
        {
            return await Operations.AddNumbers(firstOperand, secondOperand).ConfigureAwait(false);
        }
        
    }
}
