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

            emp.Tasks.Add(new EmployeeTask() { Description = "This is a task" });
            emp.Tasks.Add(new EmployeeTask() { Description = "This is another task" });

            employeeList.Add(emp);

            emp = new Employee()
            {
                Code = "E002",
                Name = "Name 02",
                Note = "Employee Note 2",
            };

            emp.Tasks.Add(new EmployeeTask() { Description = "This is a task" });

            employeeList.Add(emp);

        }

        /// <summary>
        /// Gets a list of employee object
        /// </summary>
        /// <returns>List of employees</returns>
        public async Task<List<Employee>> GetEmployees()
        {
            return employeeList;
        }
        /// <summary>
        /// Finds an employee object based on employee id
        /// </summary>
        /// <param name="employeeId">Employee Id</param>
        /// <returns>Gets an Employee object if found, null otherwise </returns>
        public async Task<Employee> GetEmployee(string employeeId)
        {
            if (string.IsNullOrWhiteSpace(employeeId))
            {
                throw new ArgumentException("Employee Id should not be blank", nameof(employeeId));
            }

            return this.employeeList.FirstOrDefault(
                e => string.Compare(e.Code, employeeId, StringComparison.InvariantCultureIgnoreCase) == 0);
        }

        /// <summary>
        /// Adds a new employee data to employee list
        /// </summary>
        /// <param name="employee">Reference of the new employee object</param>
        /// <returns>Reference of newly added employee object</returns>

        public async Task<Employee> Add(Employee employee)
        {
            if (employee == null)
            {
                throw new ArgumentNullException(nameof(employee));
            }

            this.employeeList.Add(employee);

            return employee;
        }
        /// <summary>
        /// Removes the a task from employee object
        /// </summary>
        /// <param name="employeeId"></param>
        /// <param name="employee"></param>
        /// <returns></returns>
        public async Task<Employee> Update(string employeeId, Employee employee)
        {
            if (employee is null)
            {
                throw new ArgumentNullException(nameof(employee));
            }

            var targetEmployee = await GetEmployee(employeeId);

            if (!(targetEmployee is null))
            {
                Copy(employee, targetEmployee);
            }

            return targetEmployee;
        }
        private static void Copy(Employee employee, Employee targetEmployee)
        {
            targetEmployee.Name = employee.Name;
            targetEmployee.Type = employee.Type;
            targetEmployee.Note = employee.Note;
            targetEmployee.Tasks.Clear();
            targetEmployee.Tasks.AddRange(employee.Tasks);
        }

        /// <summary>
        /// Deletes an employee data from the collection
        /// </summary>
        /// <param name="employeeId">Unique employee Id</param>
        /// <returns></returns>
        public async Task<Employee> Delete(string employeeId)
        {
            var targetEmployee = await GetEmployee(employeeId);
            if (targetEmployee != null)
            {
                this.employeeList.Remove(targetEmployee);
            }
            return targetEmployee;

        }

        /// <summary>
        /// Adds a new task to the employee object
        /// </summary>
        /// <param name="employeeId"></param>
        /// <param name="newTask"></param>
        /// <returns></returns>
        public async Task<EmployeeTask> AddTask(string employeeId, EmployeeTask newTask)
        {
            if (newTask is null)
            {
                throw new ArgumentNullException(nameof(newTask));
            }

            EmployeeTask targetTask = null;
            var targetEmployee = await GetEmployee(employeeId);

            if (targetEmployee != null)
            {
                targetTask = newTask;
                targetEmployee.Tasks.Add(targetTask);
            }

            return targetTask;
        }


        /// <summary>
        /// Removes the a task from employee object
        /// </summary>
        /// <param name="employeeId"></param>
        /// <param name="taskId"></param>
        /// <returns></returns>
        public async Task<EmployeeTask> RemoveTask(string employeeId, Guid taskId)
        {

            EmployeeTask targetTask = null;
            var targetEmployee = await GetEmployee(employeeId);

            if (targetEmployee != null)
            {
                targetTask = targetEmployee.Tasks.FirstOrDefault(t => t.TaskId == taskId);
                if (targetTask != null)
                {
                    targetEmployee.Tasks.Remove(targetTask);
                }
            }

            return targetTask;
        }
    }
}
