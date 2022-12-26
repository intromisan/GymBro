using api.Data;
using api.DTOs;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
  [Authorize]
  public class ExerciseController : BaseApiController
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public ExerciseController(DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _context = context;
    }

    [HttpGet]
    [ProducesResponseType(200, Type = typeof(IEnumerable<Exercise>))]
    public async Task<ActionResult<IEnumerable<Exercise>>> GetExercises()
    {
      var exercises = await _context.Exercises.ToListAsync();

      return Ok(exercises);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(200, Type = typeof(Exercise))]
    public async Task<ActionResult<Exercise>> GetExerciseById(Guid id)
    {
      var exercise = await FindExerciseById(id);
      if (exercise == null) return NotFound("Exercise not found");
      return exercise;
    }

    [HttpPost]
    [ProducesResponseType(201, Type = typeof(Exercise))]
    public async Task<ActionResult<Exercise>> CreateExercise(CreateExerciseDto exerciseDto)
    {

      var newExercise = _mapper.Map<Exercise>(exerciseDto);

      _context.Exercises.Add(newExercise);
      await _context.SaveChangesAsync();

      return newExercise;

    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateExercise(Guid id, CreateExerciseDto exerciseDto)
    {
      var exercise = await FindExerciseById(id);

      if (exercise == null) return NotFound("Exercise not found");

      _mapper.Map(exerciseDto, exercise);

      try
      {
        await _context.SaveChangesAsync();
        return NoContent();
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteExercise(Guid id)
    {
      var exercise = await FindExerciseById(id);

      if (exercise == null) return NotFound("Exercise not found");

      _context.Exercises.Remove(exercise);

      try
      {
        await _context.SaveChangesAsync();
        return Ok("Exercise removed successfully");
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    private async Task<Exercise> FindExerciseById(Guid id)
    {
      var exercise = await _context.Exercises.FindAsync(id);

      return exercise;
    }
  }
}