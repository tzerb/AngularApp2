
namespace AngularApp2.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddAuthorization();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            var summaries = new[]
            {
                "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
            };

            app.MapGet("/weatherforecast1", (HttpContext httpContext) =>
            {
                var forecast = Enumerable.Range(1, 5).Select(index =>
                    new WeatherForecast
                    {
                        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                        TemperatureC = Random.Shared.Next(-20, 55),
                        Summary = summaries[Random.Shared.Next(summaries.Length)]
                    })
                    .ToArray();
                return forecast;
            })
            .WithName("GetWeatherForecast2")
            .WithOpenApi();


            //app.MapGet("//*weatherforecast2*/", (HttpContext httpContext) =>
            //{
            //    var forecast2 = Enumerable.Range(1, 5).Select(index =>
            //        new LoanCriteria
            //        {
            //            Description = "Description" + index.ToString(),
            //            LoanNumber = "Loan" + index.ToString(),
            //            Name = "Test" + index.ToString()
            //        })
            //        .ToArray();
            //    return forecast2;
            //})
            //.WithName("GetWeatherForecast1")
            //.WithOpenApi();

            var loans = new LoanCriteria[]
            {
                new LoanCriteria{ Name = "Sam Smith", Description = "Loan 1 Description", LoanNumber="12345" },
                new LoanCriteria{ Name = "Jane Jones", Description = "Loan 2 Description", LoanNumber ="67890" }
            };

            app.MapGet("/weatherforecast/{sss}", (HttpContext httpContext, string sss) =>
            {
                return new TesterClass() { Tester=sss }; // "sss = " + sss;
            })
            .WithName("GetLoansWithParameter")
            .WithOpenApi();

            app.MapGet("/weatherforecastLoans", (HttpContext httpContext) =>
            {
                return loans.ToArray();
            })
            .WithName("GetLoans")
            .WithOpenApi();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
