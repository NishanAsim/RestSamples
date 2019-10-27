using System;
using System.Threading.Tasks;

namespace ArithmeticLib
{

    public class ArithmeticOperations : IArithmeticOperations
    {
        public async Task<double> AddNumbers(
            double firstOperand,
            double secondOperand) => (firstOperand + secondOperand);
    }
}
