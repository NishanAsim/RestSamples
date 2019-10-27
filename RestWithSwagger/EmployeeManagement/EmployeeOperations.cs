using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeManagement
{

    /// <summary>
    /// Performs operations on employee data
    /// </summary>
    public class EmployeeOperations : IEmployeeOperations
    {
        List<Employee> employeeList = new List<Employee>();

        /// <summary>
        /// Initializes a new instance of employee management object 
        /// </summary>
        public EmployeeOperations()
        {
            var emp = new Employee()
            {
                Code = "E001",
                Name = "Name 01",
                Note = "Employee Note",
            };

            emp.Tasks.Add(new EmployeeTask() { TaskId = Guid.NewGuid(), Description = "This is a task" });
            emp.Tasks.Add(new EmployeeTask() { TaskId = Guid.NewGuid(), Description = "This is another task" });

            employeeList.Add(emp);

            emp = new Employee()
            {
                Code = "E002",
                Name = "Name 02",
                Note = "Employee Note 2",
            };

            emp.Tasks.Add(new EmployeeTask() { TaskId = Guid.NewGuid(), Description = "This is a task" });

            employeeList.Add(emp);

        }

        public async Task<List<Employee>> GetEmployees()
        {
            return employeeList;
        }

        public async Task<Employee> GetEmployee(string employeeId)
        {
            return this.employeeList.FirstOrDefault(
                e => string.Compare(e.Code, employeeId, StringComparison.InvariantCultureIgnoreCase) == 0);
        }
    }
}
