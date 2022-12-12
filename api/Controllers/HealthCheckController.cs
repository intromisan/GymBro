using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [ApiController]
  [Route("api/healthcheck")]
  public class HealthCheckController : ControllerBase
  {

    [HttpGet]
    public IActionResult GetExercises()
    {
      return Ok("Healthy");
    }
  }
}