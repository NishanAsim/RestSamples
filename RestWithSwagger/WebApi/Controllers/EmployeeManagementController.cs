using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ArithmeticLib;
using EmployeeManagement;

namespace WebApi.Controllers
{
    
    /// <summary>
    /// Perform arithmetic operations
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class EmployeeManagementController : ControllerBase
    {
       
 /// <summary>
 /// Performs arithmetic operations
 /// </summary>
      public  EmployeeManagementController(IEmployeeOperations operations)
        {
            Operations = operations ?? throw new ArgumentNullException(nameof(operations));
        }

        private IEmployeeOperations Operations { get; }

        /// <summary>
        /// Gets list of all employees
        /// </summary>
        [HttpGet(@"[action]")]
        public async Task<ActionResult<List<Employee>>> Get()
        {
            return await Operations.GetEmployees().ConfigureAwait(false);
        }

         /// <summary>
        /// Gets details of the employee identified by employee Id
        /// </summary>
        [HttpGet(@"[action]/Id/{employeeId}")]
        public async Task<ActionResult<Employee>> Get(string employeeId)
        {
            return await Operations.GetEmployee(employeeId).ConfigureAwait(false);
        }
        
    }
}
