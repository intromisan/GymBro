using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace api.Extentions
{
  public static class IdentityServiceExtentions
  {
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
      services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
        {
          options.TokenValidationParameters = new TokenValidationParameters
          {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"])),
            ValidateIssuer = false,
            ValidateAudience = false
          };
        });
      return services;
    }
  }
}