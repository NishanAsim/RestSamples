using System;

namespace EmployeeManagement
{

    /// <summary>
    /// Represents a task
    /// </summary>
    public class EmployeeTask
    {
        /// <summary>
        /// Unique Id of the task
        /// </summary>
        /// <value></value>
        public Guid TaskId { get; private set; } = Guid.NewGuid();
        
        /// <summary>
        /// Task description
        /// </summary>
        /// <value></value>
        public string Description { get; set; }
    }

}
