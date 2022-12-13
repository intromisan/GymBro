using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [Route("api/healthcheck")]
  public class HealthCheckController : BaseApiController
  {

    [HttpGet]
    public IActionResult GetExercises()
    {
      return Ok("Healthy");
    }
  }
}