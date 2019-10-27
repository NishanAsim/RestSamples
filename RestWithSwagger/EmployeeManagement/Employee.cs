using System;
using System.Collections.Generic;

namespace EmployeeManagement
{
    /// <summary>
    /// Represents employee data
    /// </summary>
    public class Employee
    {
        /// <summary>
        /// Employee code
        /// </summary>
        /// <value></value>
        public string Code { get; set; }

        /// <summary>
        /// Employee name
        /// </summary>
        /// <value></value>
        public string Name { get; set; }

        /// <summary>
        /// Note on employee
        /// </summary>
        /// <value></value>
        public string Note { get; set; }

        /// <summary>
        /// List of open tasks assigned to employee
        /// </summary>
        /// <typeparam name="EmployeeTask"></typeparam>
        /// <returns></returns>
        public List<EmployeeTask> Tasks { get; } = new List<EmployeeTask>();
    }
}
