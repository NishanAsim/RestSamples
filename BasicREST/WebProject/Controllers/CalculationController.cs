using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BasicLibrary;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculationController : ControllerBase
    {
        

        private readonly ILogger<CalculationController> _logger;

        public CalculationController(ILogger<CalculationController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("[action]/{firstNumber}/{secondNumber}")]
        public IActionResult Add(int firstNumber, int secondNumber)
        {
           MyClass myClass = new MyClass();
           return Ok(myClass.Sum(firstNumber,secondNumber));
        }

        // [HttpGet()]
        // public IActionResult Add()
        // {
        //    return Ok(1000);
        // }
    }
}
