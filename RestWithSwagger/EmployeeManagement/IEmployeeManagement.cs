using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeeManagement
{
    /// <summary>
    /// Encapsulates actions on employee objects
    /// </summary>
    public interface IEmployeeOperations
    {
        /// <summary>
        /// Finds an employee object based on employee id
        /// </summary>
        /// <param name="employeeId">Employee Id</param>
        /// <returns>Gets an Employee object if found, null otherwise </returns>
        Task<Employee> GetEmployee(string employeeId);
        /// <summary>
        /// Gets a list of employee object
        /// </summary>
        /// <returns>List of employees</returns>
        Task<List<Employee>> GetEmployees();
    }
}
