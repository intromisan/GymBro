using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Services;
using Microsoft.EntityFrameworkCore;

namespace api.Extentions
{
  public static class ApplicationServiceExtentions
  {
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
      // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
      services.AddEndpointsApiExplorer();
      services.AddSwaggerGen();
      services.AddDbContext<DataContext>(options =>
      {
        options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
      });
      services.AddCors();
      services.AddScoped<ITokenService, TokenService>();

      return services;
    }
  }
}