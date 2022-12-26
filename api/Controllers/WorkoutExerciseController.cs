using api.Data;
using api.DTOs.WorkoutExercises;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
  }
}