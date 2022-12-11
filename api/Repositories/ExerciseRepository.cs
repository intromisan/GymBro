using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;

namespace api.Repositories
{
  public class ExerciseRepository : IExerciseRepository
  {
    private readonly DataContext _context;

    public ExerciseRepository(DataContext context)
    {
      _context = context;
    }

    public ICollection<Exercise> GetExercises()
    {
      return _context.Exercises.OrderBy(e => e.Id).ToList();
    }
  }
}