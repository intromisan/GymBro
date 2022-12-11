using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public enum Weekday
  {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun
  }
  public class WorkoutExercise : EntityBase
  {
    public byte Reps { get; set; }
    public byte Sets { get; set; }
    public short Weight { get; set; }
    public short RestSeconds { get; set; }
    public Weekday Weekday { get; set; }

    public Guid WorkoutId { get; set; }
    public Workout Workout { get; set; }
    public Guid ExerciseId { get; set; }
    public Exercise Exerice { get; set; }
  }
}