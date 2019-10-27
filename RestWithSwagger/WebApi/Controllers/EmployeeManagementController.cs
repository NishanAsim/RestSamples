using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ArithmeticLib;
using EmployeeManagement;
using System.Threading;
using System.Diagnostics;

namespace WebApi.Controllers
{

    /// <summary>
    /// Perform arithmetic operations
    /// </summary>
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {

        /// <summary>
        /// Performs arithmetic operations
        /// </summary>
        public EmployeeController(IEmployeeOperations operations)
        {
            Debug.WriteLine("A new controller object is created");
            Operations = operations ?? throw new ArgumentNullException(nameof(operations));
        }

        private IEmployeeOperations Operations { get; }

        /// <summary>
        /// Gets list of all employees
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<List<Employee>>> Get()
        {
            return await Operations.GetEmployees().ConfigureAwait(false);
        }

        /// <summary>
        /// Gets details of the employee identified by employee Id
        /// </summary>
        [HttpGet(@"Id/{employeeId}")]
        [ApiConventionMethod(typeof(DefaultApiConventions),
                     nameof(DefaultApiConventions.Get))]
        public async Task<ActionResult<Employee>> Get(string employeeId)
        {
            var result = await Operations.GetEmployee(employeeId).ConfigureAwait(false);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return result;
            }
        }

        /// <summary>
        /// Gets list of all employees
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<Employee>> Post([FromBody] Employee employeeData, CancellationToken token)
        {
            return await Operations.Add(employeeData).ConfigureAwait(false);
        }

        /// <summary>
        /// Gets details of the employee identified by employee Id
        /// </summary>
        [HttpDelete(@"Id/{employeeId}")]
        [ApiConventionMethod(typeof(DefaultApiConventions),
                     nameof(DefaultApiConventions.Delete))]
        public async Task<ActionResult<Employee>> Delete(string employeeId)
        {
            var result = await Operations.Delete(employeeId).ConfigureAwait(false);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return result;
            }
        }

        /// <summary>
        /// Updates details of the employee identified by employee Id
        /// </summary>
        [HttpPut(@"Id/{employeeId}")]
        [ApiConventionMethod(typeof(DefaultApiConventions),
                     nameof(DefaultApiConventions.Delete))]
        public async Task<ActionResult<Employee>> Update(string employeeId, [FromBody] Employee employee)
        {
            var result = await Operations.Update(employeeId, employee).ConfigureAwait(false);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return result;
            }
        }

        /// <summary>
        /// Adds a new task to the employee data
        /// </summary>
        [HttpPost(@"Id/{employeeId}/Task")]
        [ApiConventionMethod(typeof(DefaultApiConventions),
                     nameof(DefaultApiConventions.Delete))]
        public async Task<ActionResult<EmployeeTask>> Add(string employeeId, [FromBody] EmployeeTask newTask)
        {
            var result = await Operations.AddTask(employeeId, newTask).ConfigureAwait(false);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return result;
            }
        }

        /// <summary>
        /// Removes the task from the employee data
        /// </summary>
        [HttpDelete(@"Id/{employeeId}/Task/{taskId}")]
        [ApiConventionMethod(typeof(DefaultApiConventions),
                     nameof(DefaultApiConventions.Delete))]
        public async Task<ActionResult<EmployeeTask>> Remove(string employeeId, Guid taskId)
        {
            var result = await Operations.RemoveTask(employeeId, taskId).ConfigureAwait(false);
            if (result == null)
            {
                return NotFound();
            }
            else
            {
                return result;
            }
        }

    }
}
