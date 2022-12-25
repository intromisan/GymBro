using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using api.Data;
using api.DTOs.Workout;
using api.DTOs.Workouts;
using api.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
  [Authorize]
  public class WorkoutController : BaseApiController
  {
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    public WorkoutController(DataContext context, IMapper mapper)
    {
      _mapper = mapper;
      _context = context;

    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<WorkoutDetailsDto>>> GetWorkouts()
    {
      var userEmail = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      var user = await _context.Users.SingleAsync(u => u.Email == userEmail);

      var workouts = await _context.Workouts.Where(w => w.UserId == user.Id).Include(w => w.Exercises).ThenInclude(e => e.Exercise).ToListAsync();

      return Ok(_mapper.Map<IEnumerable<WorkoutDetailsDto>>(workouts));
    }

    [HttpPost]
    public async Task<ActionResult<Workout>> CreateWorkout(CreateWorkoutDto createWorkoutDto)
    {
      var user = await GetUserIdentity();
      var newWorkout = new Workout()
      {
        Name = createWorkoutDto.Name,
        UserId = user.Id
      };

      _context.Workouts.Add(newWorkout);

      try
      {
        await _context.SaveChangesAsync();
        return StatusCode(201, _mapper.Map<WorkoutDetailsDto>(newWorkout));
      }
      catch (Exception e)
      {
        return StatusCode(500, e);
      }
    }

    private async Task<User> GetUserIdentity()
    {
      var userEmail = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      return await _context.Users.SingleAsync(u => u.Email == userEmail);
    }
  }
}