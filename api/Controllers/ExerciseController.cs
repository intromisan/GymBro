using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ExerciseController : ControllerBase
  {
    private readonly IExerciseRepository _exerciseRepository;
    public ExerciseController(IExerciseRepository exerciseRepository)
    {
      _exerciseRepository = exerciseRepository;
    }

    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Exercise>))]
    public IActionResult GetExercises()
    {
      var exercises = _exerciseRepository.GetExercises();
      if (!ModelState.IsValid)
        return BadRequest(ModelState);

      return Ok(exercises);
    }
  }
}