using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
  [Authorize]
  public class ExerciseController : BaseApiController
  {
    private readonly DataContext _context;
    public ExerciseController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Exercise>))]
    public async Task<ActionResult<IEnumerable<Exercise>>> GetExercises()
    {
      var exercises = await _context.Exercises.ToListAsync();

      return Ok(exercises);
    }
  }
}