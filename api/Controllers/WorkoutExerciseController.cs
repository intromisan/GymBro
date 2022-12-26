using api.Data;
using api.DTOs.WorkoutExercises;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
  [Authorize]
  public class WorkoutExerciseController : BaseApiController
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public WorkoutExerciseController(DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _context = context;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetWorkoutExercise(Guid id)
    {
      var workoutExercise = await _context.WorkoutExercises.Where(we => we.Id == id).Include(we => we.Exercise).SingleOrDefaultAsync();

      if (workoutExercise == null) return NotFound("Workout exercise not found");

      return Ok(_mapper.Map<WorkoutExerciseDetailsDto>(workoutExercise));
    }

    [HttpPost]
    public async Task<ActionResult<WorkoutExercise>> CreateWorkoutExercise(CreateWorkoutExerciseDto createWorkoutExerciseDto)
    {
      var newWorkoutExercise = _mapper.Map<WorkoutExercise>(createWorkoutExerciseDto);

      _context.WorkoutExercises.Add(newWorkoutExercise);

      try
      {
        await _context.SaveChangesAsync();
        return StatusCode(201, newWorkoutExercise);
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateWorkoutExercise(Guid id, UpdateWorkoutExerciseDto updateWorkoutExerciseDto)
    {
      var workoutExercise = await _context.WorkoutExercises.Where(we => we.Id == id).Include(we => we.Exercise).SingleOrDefaultAsync();

      if (workoutExercise == null) return NotFound("Workout exercise not found");

      _mapper.Map(updateWorkoutExerciseDto, workoutExercise);

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
    public async Task<IActionResult> DeleteWorkoutExercise(Guid id)
    {
      var workoutExercise = await _context.WorkoutExercises.Where(we => we.Id == id).SingleOrDefaultAsync();

      if (workoutExercise == null) return NotFound("Workout exercise not found");

      _context.WorkoutExercises.Remove(workoutExercise);

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
  }
}