using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement
{
    /*
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
       
        public List<EmployeeTask> Tasks { get;set; } = new List<EmployeeTask>();
    }
*/
    /// <summary>
    /// Represents employee data
    /// </summary>
    /// <summary>
    /// Represents employee data
    /// </summary>
    public class Employee
    {
        /// <summary>
        /// Employee code
        /// </summary>
        /// <value></value>
        [Required]
        [MinLength(4)]
        public string Code { get; set; }
/// <summary>
/// Type of the employee
/// </summary>
public EmployeeType Type {get;set;}
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

        public List<EmployeeTask> Tasks { get; set; } = new List<EmployeeTask>();
    }
}
