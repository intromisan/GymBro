using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class WorkoutExercise : EntityBase
  {
    public int Reps { get; set; }
    public int Sets { get; set; }
    public int Weight { get; set; }
    public int RestSeconds { get; set; }
    public DayOfWeek Weekday { get; set; }

    public Guid WorkoutId { get; set; }
    public Workout Workout { get; set; }
    public Guid ExerciseId { get; set; }
    public Exercise Exercise { get; set; }
  }
}