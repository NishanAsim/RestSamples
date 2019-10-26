using System;

namespace WebApi
{
    public class WeatherForecast
    {
    
        /// <summary>
        /// Statistics date
        /// </summary>
        /// <value></value>
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }
}
