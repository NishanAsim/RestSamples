using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeeManagement
{
    public interface IEmployeeOperations
    {
        Task<Employee> GetEmployee(string employeeId);
        Task<List<Employee>> GetEmployees();
    }
}
