using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class Workout : EntityBase
  {
    public string Name { get; set; }
    public string ImageLink { get; set; }

    public Guid UserId { get; set; }
    public User User { get; set; }
    public List<WorkoutExercise> Exercises { get; set; } = new List<WorkoutExercise>();
  }
}