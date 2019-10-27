using System;
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

        /// <summary>
        /// Adds a new employee data to employee list
        /// </summary>
        /// <param name="employee">Reference of the new employee object</param>
        /// <returns>Reference of newly added employee object</returns>
        Task<Employee> Add(Employee employee);
        
        /// <summary>
        /// Updates an existing employee object
        /// </summary>
        /// <param name="employeeId">Employee Id whose data to be updated</param>
        /// <param name="employee">Reference of the object containing employee details</param>
        /// <returns>Reference of an object containing updated data, null if employee not found</returns>
        Task<Employee> Update(string employeeId, Employee employee);

        /// <summary>
        /// Deletes an employee data from the collection
        /// </summary>
        /// <param name="employeeId">Unique employee Id</param>
        /// <returns></returns>
        Task<Employee> Delete(string employeeId);

        /// <summary>
        /// Adds a new task to the employee object
        /// </summary>
        /// <param name="employeeId"></param>
        /// <param name="newTask"></param>
        /// <returns></returns>
        Task<EmployeeTask> AddTask(string employeeId, EmployeeTask newTask);

        /// <summary>
        /// Removes the a task from employee object
        /// </summary>
        /// <param name="employeeId"></param>
        /// <param name="taskId"></param>
        /// <returns></returns>
        Task<EmployeeTask> RemoveTask(string employeeId, Guid taskId);
    }
}
