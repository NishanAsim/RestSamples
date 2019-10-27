using System;

namespace WebApi
{
    /// <summary>
    /// The weather forecast object
    /// </summary>
    public class WeatherForecast
    {
    
        /// <summary>
        /// Statistics date
        /// </summary>
        /// <value></value>
        public DateTime Date { get; set; }
/// <summary>
/// Temperature in C
/// </summary>
/// <value></value>
        public int TemperatureC { get; set; }
        /// <summary>
        /// Temperature in F
        /// </summary>
        /// <returns></returns>

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        /// <summary>
        /// Summary of data
        /// </summary>
        /// <value></value>
        public string Summary { get; set; }
    }
}
