namespace AngularApp2.Server
{
    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }

    public class LoanCriteria //(string name, string description, string loanNumber)
    {
        public string? Description { get; set; }
        public string? LoanNumber { get; set; }
        public string? Name { get; set; }
    }

    public class  TesterClass 
    {
        public string? Tester { get; set; }
    }
}
