using System.Threading.Tasks;

namespace ArithmeticLib
{
    public interface IArithmeticOperations
    {
        /// <summary>
        /// Returns sum of two numbers
        /// </summary>
        /// <param name="firstOperand">The first operand</param>
        /// <param name="secondOperand">The second operand</param>
        /// <returns>Sum of the operands</returns>
           Task<double> AddNumbers(double firstOperand, double secondOperand);
    }
}
